import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BannerImage from "../../assets/img/home/Banner 1.webp";
import heroBg from "../../assets/img/Group 1.webp";
import heroBgAlt from "../../assets/img/Frame 2147224797.webp";
import legacyBackground from "../../assets/img/home/Frame legacybackground.webp";
import questionIcon from "../../assets/icon/Vectorlogo6904.webp";
import arrowLeft from "../../assets/icon/circle-arrow-left-02-sharp.webp";
import arrowRight from "../../assets/icon/circle-arrow-right-sharp.webp";

const slides = [
  {
    id: 1,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "Are you comfortable\nwith the law deciding ",
    questionHighlight: "your family's\nfuture for you?",
    description:
      "If you leave it to the law, your family's future may unfold differently than you expect.",
  },
  {
    id: 2,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "What would happen \nto your family's wealth ",
    questionHighlight: "if you weren't here tomorrow?",
    description:
      "Without a clear plan, important decisions about your assets may be made by default legal rules.",
  },
  {
    id: 3,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "Do your loved ones know \nexactlyhow you want your ",
    questionHighlight: "legacy to be shared?",
    description:
      "Clear instructions today can help your family avoid confusion, conflict, and delays in the future.",
  },
  {
    id: 4,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "Are you ready to turn\nyour intentions into a ",
    questionHighlight: "clear, written plan for \nyour family?",
    description:
      "With the right guidance, you can protect what you've built and give your family lasting peace of mind.",
  },
];

/* 🔑 Helper: attach icon STRICTLY to the question mark */
const renderQuestionWithIcon = (text) => {
  if (!text.includes("?")) return text;

  const parts = text.split("?");
  if (parts.length !== 2) return text;

  // Check if text has newlines (multi-line)
  const isMultiLine = text.includes("\n");
  
  return (
    <>
      {parts[0]}
      <span className="relative inline-block">
        <img
          src={questionIcon}
          alt="Question Icon"
          className={`absolute ${
            isMultiLine 
              ? "top-4 sm:top-6 md:top-12 -right-3 sm:-right-4 md:-right-5" 
              : "top-2 sm:top-3 md:top-9 -right-3 sm:-right-3 md:-right-4"
          } w-[14px] sm:w-[16px] md:w-[18px] h-[14px] sm:h-[16px] md:h-[18px]`}
        />
        ?
      </span>
      {parts[1]}
    </>
  );
};

const HeaderHome = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  const currentSlide = slides[activeIndex];
  const prevSlide = slides[prevIndex];

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevIndex((p) => activeIndex);
    setTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setTransitioning(false);
      setIsAnimating(false);
    }, 700);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevIndex((p) => activeIndex);
    setTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      setTransitioning(false);
      setIsAnimating(false);
    }, 700);
  };

  const getPosition = (index) => {
    const offset = (index - activeIndex + slides.length) % slides.length;
    if (offset === 0) return "front";
    if (offset === 1) return "middle";
    return "back";
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    setActiveIndex(0);
    setPrevIndex(0);
    setTransitioning(false);
    setIsAnimating(false);
  }, [location.pathname]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(id);
  }, [paused, activeIndex, isAnimating]);
  const renderStackedLines = (text, extra = "", baseDelay = 0) => {
    const parts = String(text).split("\n");
    return (
      <span className="block carousel-text">
        {parts.map((line, idx) => (
          <span
            key={idx}
            className={`block whitespace-pre ${extra} reveal-line`}
            style={{ animationDelay: `${baseDelay + idx * 110}ms` }}
          >
            {line}
          </span>
        ))}
      </span>
    );
  };

  // For the yellow highlight: split lines then apply the question icon only to the last line
  const renderHighlightStack = (text, baseDelay = 0) => {
    const parts = String(text).split("\n");
    const last = parts.length - 1;
    return (
      <span className="block carousel-text">
        {parts.map((line, idx) => (
          <span
            key={idx}
            className="block whitespace-pre reveal-line"
            style={{ animationDelay: `${baseDelay + idx * 110}ms` }}
          >
            {idx === last ? renderQuestionWithIcon(line) : line}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      className="relative w-full h-dvh lg:h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={currentSlide.background}
          alt="Succession Planning"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={prevSlide.background}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            transitioning ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      
      {/* Decorative background accent (subtle) */}
      <img
        src={legacyBackground}
        alt=""
        aria-hidden="true"
        className="absolute right-[-140px] bottom-[-80px] w-[460px] opacity-25 pointer-events-none hidden md:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-16 h-full flex items-end pb-20 md:pb-14 lg:pb-16">
        <div className="flex items-stretch gap-6 sm:gap-8">
          {/* Left accent line */}
          <div className="self-stretch border-l-[4px] border-[#F4D57E]" />

          {/* Text */}
          <div className="text-left text-white max-w-3xl md:w-[680px] lg:w-[780px] w-full">
            <h1 key={currentSlide.id} className="font-[Urania] font-light text-[24px] sm:text-[28px] md:text-[32px] lg:text-[66px] leading-[30px] sm:leading-[34px] md:leading-[40px] lg:leading-[74px] animate-fade-up break-words">
              {renderStackedLines(currentSlide.questionPrefix)}
              <span className="block font-bold text-[#F4D57E]">
                {/* left-to-right stagger for highlight lines */}
                <span className="block carousel-text">
                  {String(currentSlide.questionHighlight).split("\n").map((line, idx, arr) => (
                    <span
                      key={idx}
                      className="block whitespace-pre break-words reveal-left-line"
                      style={{ animationDelay: `${120 + idx * 110}ms` }}
                    >
                      {idx === arr.length - 1 ? renderQuestionWithIcon(line) : line}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p key={`desc-${currentSlide.id}`} className="mt-6 font-[Urania] text-[16px] md:text-[18px] leading-[1.4] max-w-[660px] animate-fade-in" style={{ animationDelay: "180ms" }}>
              {currentSlide.description}
            </p>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute z-20 left-14 sm:left-24 lg:left-32 bottom-4 sm:bottom-6 flex items-center gap-3">
        <button
          className="h-8 w-8 hover:scale-105 transition-transform"
          onClick={goPrev}
        >
          <img src={arrowLeft} alt="Previous" />
        </button>

        <button
          className="h-8 w-8 hover:scale-105 transition-transform"
          onClick={goNext}
        >
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default HeaderHome;
