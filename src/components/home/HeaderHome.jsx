import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BannerImage from "../../assets/img/home/Banner 1.webp";
import heroBg from "../../assets/img/Group 1.webp";
import heroBgAlt from "../../assets/img/Frame 2147224797.webp";
import legacyBackground from "../../assets/img/home/Frame 2147224800 (2).webp";
import questionIcon from "../../assets/icon/Vectorlogo6904.webp";
import arrowLeft from "../../assets/icon/circle-arrow-left-02-sharp.webp";
import arrowRight from "../../assets/icon/circle-arrow-right-sharp.webp";

const slides = [
  {
    id: 1,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "Are you comfortable \nwith the law deciding ",
    questionPrefixMobile: "Are you comfortable\nwith the law deciding ",
    questionHighlight: "your family's future for you?",
    questionHighlightMobile: "your family's\nfuture for you?",
    description:
      "If you leave it to the law, your family's future may unfold differently than you expect.",
  },
  {
    id: 2,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "What would happen \nto your family's wealth ",
    questionPrefixMobile: "What would happen \nto your family's wealth ",
    questionHighlight: "if you weren't here tomorrow?",
    questionHighlightMobile: "if you weren't \nhere tomorrow?",
    description:
      "Without a clear plan, important decisions about your assets may be made by default legal rules.",
  },
  {
    id: 3,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "Do your loved ones know \nexactly how you want your ",
    questionPrefixMobile: "Do your loved ones know \nexactly how you want your ",
    questionHighlight: "legacy to be shared?",
    questionHighlightMobile: "legacy to \nbe shared?",
    description:
      "Clear instructions today can help your family avoid confusion, conflict, and delays in the future.",
  },
  {
    id: 4,
    background: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "Are you ready to turn \nyour intentions into a ",
    questionPrefixMobile: "Are you ready to turn\nyour intentions into a ",
    questionHighlight: "clear, written plan for your family?",
    questionHighlightMobile: "clear, written plan \nfor your family?",
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
              ? "top-6 sm:top-6 md:top-12 -right-5 sm:-right-6 md:-right-7" 
              : "top-3 sm:top-3 md:top-9 -right-5 sm:-right-5 md:-right-6"
          } w-[18px] sm:w-[20px] md:w-[22px] h-[18px] sm:h-[20px] md:h-[22px]`}
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
  // Helper to get responsive text
  const getResponsiveText = (mobileText, desktopText) => {
    return window.innerWidth < 768 ? mobileText : desktopText;
  };

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
      className="relative w-full h-[640px] lg:h-screen overflow-hidden md:h-screen mt-[-50px] sm:mt-[-50px] md:mt-0 lg:mt-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Mobile background image  */}
        <img
          src={legacyBackground}
          alt="Succession Planning"
          className="absolute inset-0 w-full h-full object-cover block md:hidden lg:hidden"
          style={{ top: '0', objectPosition: '100% center', width: '100%', height: '100%' }}
        />
        {/* Tablet background image (cropped Banner) */}
        <img
          src={BannerImage}
          alt="Succession Planning"
          className="absolute inset-0 w-full h-full object-cover hidden md:block lg:hidden"
          style={{ top: '0', objectPosition: 'center center', width: '100%', height: '80%' }}
        />
        {/* Desktop background image  */}
        <img
          src={currentSlide.background}
          alt="Succession Planning"
          className="absolute left-0 right-0 w-full h-[561px] object-cover hidden lg:block"
          style={{ top: '79px' }}
        />
        <img
          src={prevSlide.background}
          alt=""
          aria-hidden="true"
          className={`absolute left-0 right-0 w-full h-[561px] object-cover transition-opacity duration-700 ease-in-out hidden lg:block ${
            transitioning ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: '79px' }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-16 h-[561px] flex items-start pb-21 md:pb-14 lg:pb-16" style={{ paddingTop: '300px' }}>
        <div className="flex items-stretch gap-3 sm:gap-8">
          {/* Left accent line */}
          <div className="self-stretch border-l-[4px] border-[#F4D57E]" />

          {/* Text */}
          <div className="text-left text-white w-full">
            <h1 key={currentSlide.id} className="font-[Urania] animate-fade-up break-words w-1/2">
              <span className="block sm:hidden" style={{fontFamily: 'Urania', fontWeight: '300', fontStyle: 'normal', fontSize: '28px', lineHeight: '35px', letterSpacing: '0%'}}>
                {renderStackedLines(currentSlide.questionPrefixMobile)}
              </span>
              <span className="hidden sm:block lg:hidden" style={{fontFamily: 'Urania', fontWeight: '300', fontStyle: 'normal', fontSize: '48px', lineHeight: '56px', letterSpacing: '0%'}}>
                {renderStackedLines(currentSlide.questionPrefix)}
              </span>
              <span className="hidden lg:block" style={{fontFamily: 'Urania', fontWeight: '300', fontStyle: 'normal', fontSize: '66px', lineHeight: '74px', letterSpacing: '0%'}}>
                {renderStackedLines(currentSlide.questionPrefix)}
              </span>
              <span className="block font-bold text-[#F4D57E] max-w-[180px] md:max-w-none" style={{fontFamily: 'Urania', fontWeight: '700', fontStyle: 'normal', fontSize: '36px', lineHeight: '42px', letterSpacing: '0%'}}>
                {/* left-to-right stagger for highlight lines */}
                <span className="block carousel-text">
                  <span className="block sm:hidden">
                    {String(currentSlide.questionHighlightMobile).split("\n").map((line, idx, arr) => (
                      <span
                        key={idx}
                        className="block whitespace-pre break-words reveal-left-line"
                        style={{ animationDelay: `${120 + idx * 110}ms` }}
                      >
                        {idx === arr.length - 1 ? renderQuestionWithIcon(line) : line}
                      </span>
                    ))}
                  </span>
                  <span className="hidden sm:block lg:hidden" style={{fontFamily: 'Urania', fontWeight: '700', fontStyle: 'normal', fontSize: '48px', lineHeight: '56px', letterSpacing: '0%'}}>
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
                  <span className="hidden lg:block" style={{fontFamily: 'Urania', fontWeight: '700', fontStyle: 'normal', fontSize: '66px', lineHeight: '74px', letterSpacing: '0%'}}>
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
              </span>
            </h1>

            <p key={`desc-${currentSlide.id}`} className="mt-4 max-w-[250px] sm:max-w-[350px] md:max-w-[660px] lg:max-w-[800px] animate-fade-in" style={{ animationDelay: "180ms", fontFamily: 'Urania', fontWeight: '400', fontStyle: 'normal', fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
              {currentSlide.description}
            </p>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute z-20 left-4 sm:left-24 lg:left-26 top-[585px] flex items-center gap-3 md:left-14">
        <button
          className="h-6 w-6 hover:scale-105 transition-transform"
          onClick={goPrev}
        >
          <img src={arrowLeft} alt="Previous" />
        </button>

        <button
          className="h-6 w-6 hover:scale-105 transition-transform"
          onClick={goNext}
        >
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default HeaderHome;
