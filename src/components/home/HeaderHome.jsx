import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BannerImage from "../../assets/img/home/Frameheaderpng.webp";
import heroBg from "../../assets/img/Group 1.webp";
import heroBgAlt from "../../assets/img/Frame 2147224797.webp";
import legacyBackground from "../../assets/img/home/Frame 2147224800 (2).webp";
import mobileframe1 from "../../assets/img/home/mobileframe1.webp";
import mobileframe2 from "../../assets/img/home/mobile frame2.webp";
import frame12 from "../../assets/img/home/Frame 12.webp";
import frameHeader3 from "../../assets/img/home/Frameheader3.webp";
import questionIcon from "../../assets/icon/Vectorlogo6904.webp";
import arrowLeft from "../../assets/icon/circle-arrow-left-02-sharp.webp";
import arrowRight from "../../assets/icon/circle-arrow-right-sharp.webp";

const slides = [
  {
    mobileBackground: legacyBackground,
    desktopBackground: BannerImage,
    eyebrow: "Succession Planning",
    questionPrefix: "Are you comfortable \nwith the law deciding ",
    questionPrefixMobile: "Are you comfortable \nwith the law deciding ",
    questionHighlight: "your family’s future for you?",
    questionHighlightMobile: "your family’s \nfuture for you?",
    description:
      "With the right guidance, you can protect what you've built and give your family lasting peace of mind.",
  },
  {
    mobileBackground: mobileframe1,
    desktopBackground: frame12,
    eyebrow: "Succession Planning",
    questionPrefix: "How do you ensure your \nwealth remains with your  ",
    questionPrefixMobile: "How do you ensure your \nwealth remains with your ",
    questionHighlight: "children in your absence?",
    questionHighlightMobile: "children in your \nabsence?",
    description:
      "Proper planning protects your wealth and guarantees it reaches your children without complications.",
  },
  {
    mobileBackground: mobileframe2,
    desktopBackground: frameHeader3,
    eyebrow: "Succession Planning",
    questionPrefix: "Do you know who will \nget your wealth if  ",
    questionPrefixMobile: "Do you know who will \nget your wealth if ",
    questionHighlight: "something happens to you?",
    questionHighlightMobile: "something \nhappens to you?",
    description:
      "If your wishes aren’t documented, your wealth may go to someone you didn’t intend.",
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
          className={`absolute ${isMultiLine
            ? "top-6 sm:top-6 lg:top-12 -right-5 sm:-right-6 lg:-right-7"
            : "top-3 sm:top-3 lg:top-9 -right-5 sm:-right-5 lg:-right-6"
            } w-[18px] sm:w-[20px] lg:w-[22px] h-[18px] sm:h-[20px] lg:h-[22px]`}
        />
        ?
      </span>
      {parts[1]}
    </>
  );
};

const HeaderHome = () => {
  const location = useLocation();
  useEffect(() => {
    // Add custom CSS for large screens
    const style = document.createElement('style');
    style.textContent = `
      @media (min-width: 1700px) {
        .desktop-bg-large {
          height: 480px !important;
        }
        section.header-section-large {
          height: 580px !important;
        }
        .content-large {
          padding-top: 220px !important;
        }
        .carousel-large {
          top: 460px !important;
          left: 60px !important;
        }
        section.header-section-large {
          margin-bottom: -30px !important;
          padding-bottom: 0px !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [fadePhase, setFadePhase] = useState(false);

  const currentSlide = slides[activeIndex];
  const prevSlide = slides[prevIndex];

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFadePhase(false);
    setPrevIndex((p) => activeIndex);
    setTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setFadePhase(true), 20);
    setTimeout(() => {
      setTransitioning(false);
      setFadePhase(false);
      setIsAnimating(false);
    }, 700);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFadePhase(false);
    setPrevIndex((p) => activeIndex);
    setTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setFadePhase(true), 20);
    setTimeout(() => {
      setTransitioning(false);
      setFadePhase(false);
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
      className="relative w-full h-[640px] lg:h-[650px] xl:h-[700px] overflow-hidden sm:h-[700px] md:h-[700px] mt-[-50px] sm:mt-[-80px] md:mt-[-80px] lg:mt-0 xl:mt-0 pt-[260px] sm:pt-0 mb-0 lg:mb-8 xl:mb-10 header-section-large"
      style={{
        '@media (min-width: 1700px)': {
          height: '950px'
        }
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Mobile background image with crossfade */}
        <img
          src={currentSlide.mobileBackground}
          alt="Succession Planning"
          className={`absolute inset-0 w-full h-full object-cover block lg:hidden sm:!h-full sm:!top-0 sm:!p-0 md:!h-full md:!top-0 md:!p-0 transition-opacity duration-700 ${transitioning ? (fadePhase ? "opacity-100" : "opacity-0") : "opacity-100"
            }`}
          style={{ top: '10px', bottom: 'auto', objectPosition: 'right bottom', width: '100%', height: '90%', paddingTop: '120px' }}
        />

        {/* Tablet background image (cropped Banner) */}
        <img
          src={currentSlide.desktopBackground}
          alt="Succession Planning"
          className={`absolute inset-0 w-full h-full object-cover hidden lg:block lg:hidden transition-opacity duration-700 ${transitioning ? (fadePhase ? "opacity-100" : "opacity-0") : "opacity-100"
            }`}
          style={{ top: '0', objectPosition: 'right bottom', width: '100%', height: '100%' }}
        />
        <img
          src={prevSlide.desktopBackground}
          alt="Succession Planning"
          className={`absolute inset-0 w-full h-full object-cover hidden lg:block lg:hidden transition-opacity duration-700 ${transitioning ? (fadePhase ? "opacity-0" : "opacity-100") : "opacity-0"
            }`}
          style={{ top: '0', objectPosition: 'right bottom', width: '100%', height: '100%' }}
        />
        {/* Desktop background image  */}
        <img
          src={currentSlide.desktopBackground}
          alt="Succession Planning"
          className={`absolute left-0 right-0 w-full h-[561px] xl:h-[540px] min-[1700px]:h-[480px] object-cover hidden lg:block xl:hidden transition-opacity duration-700 desktop-bg-large ${transitioning ? (fadePhase ? "opacity-100" : "opacity-0") : "opacity-100"
            }`}
          style={{ top: '60px', objectPosition: 'right bottom' }}
        />
        <img
          src={prevSlide.desktopBackground}
          alt="Succession Planning"
          className={`absolute left-0 right-0 w-full h-[561px] xl:h-[540px] min-[1700px]:h-[480px] object-cover hidden lg:block xl:hidden transition-opacity duration-700 desktop-bg-large ${transitioning ? (fadePhase ? "opacity-0" : "opacity-100") : "opacity-0"
            }`}
          style={{ top: '20px', objectPosition: 'right bottom' }}
        />
        {/* XL Desktop background image  */}
        <img
          src={currentSlide.desktopBackground}
          alt="Succession Planning"
          className={`absolute left-0 right-0 w-full h-[561px] xl:h-[540px] min-[1700px]:h-[480px] object-cover hidden xl:block transition-opacity duration-700 desktop-bg-large ${transitioning ? (fadePhase ? "opacity-100" : "opacity-0") : "opacity-100"
            }`}
          style={{ top: '60px', objectPosition: 'right bottom' }}
        />
        <img
          src={prevSlide.desktopBackground}
          alt="Succession Planning"
          className={`absolute left-0 right-0 w-full h-[561px] xl:h-[540px] min-[1700px]:h-[480px] object-cover hidden xl:block transition-opacity duration-700 desktop-bg-large ${transitioning ? (fadePhase ? "opacity-0" : "opacity-100") : "opacity-0"
            }`}
          style={{ top: '20px', objectPosition: 'right bottom' }}
        />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 max-w-[1900px] xl:max-w-[2200px] mx-auto pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-5 lg:pr-16 xl:pl-7 xl:pr-24 h-[561px] sm:h-[661px] lg:h-[561px] xl:h-[540px] min-[1700px]:h-[480px] flex items-start pb-21 md:pb-14 lg:pb-16 xl:pb-20 pt-[16px] sm:pt-[375px] md:pt-[375px] lg:pt-[280px] xl:pt-[220px] min-[1700px]:pt-[220px] content-large"
      >
        <div className="flex items-stretch gap-3 sm:gap-8">
          {/* Left accent line */}
          <div className="self-stretch border-l-[4px] border-[#F4D57E]" />

          {/* Text */}
          <div className="text-left text-white w-full">
            <h1 key={activeIndex} className="font-[Urania] animate-fade-up break-words w-1/2">
              <span className="block lg:hidden" style={{ fontFamily: 'Urania', fontWeight: '300', fontStyle: 'light', fontSize: '28px', lineHeight: '35px', letterSpacing: '0%' }}>
                {renderStackedLines(currentSlide.questionPrefixMobile)}
              </span>
              <span className="hidden lg:block" style={{ fontFamily: 'Urania', fontWeight: '300', fontStyle: 'light', fontSize: '66px', lineHeight: '74px', letterSpacing: '0%' }}>
                {renderStackedLines(currentSlide.questionPrefix)}
              </span>
              <span className="block mt-2 sm:mt-0 font-bold text-[#F4D57E] max-w-[180px] md:max-w-none" style={{ fontFamily: 'Urania', fontWeight: '700', fontStyle: 'normal', fontSize: '36px', lineHeight: '42px', letterSpacing: '0%' }}>
                {/* left-to-right stagger for highlight lines */}
                <span className="block carousel-text">
                  <span className="block lg:hidden">
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
                  <span className="hidden lg:block" style={{ fontFamily: 'Urania', fontWeight: '700', fontStyle: 'normal', fontSize: '66px', lineHeight: '74px', letterSpacing: '0%' }}>
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

            <p key={`desc-${activeIndex}`} className="mt-4 lg:mt-8 max-w-[250px] sm:max-w-[350px] md:max-w-[660px] lg:max-w-[800px] animate-fade-in">
              <span className="block lg:hidden" style={{ animationDelay: "180ms", fontFamily: 'Urania', fontWeight: '200', fontStyle: 'Regular', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
                {currentSlide.description}
              </span>
              <span className="hidden lg:block" style={{ animationDelay: "180ms", fontFamily: 'Urania', fontWeight: '300', fontStyle: 'Regular', fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
                {currentSlide.description}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute z-20 left-4 sm:left-24 md:left-4 lg:left-10 xl:left-16 top-[545px] sm:top-[650px] md:top-[650px] lg:top-[540px] xl:top-[520px] min-[1700px]:top-[460px] flex items-center gap-3 carousel-large">
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
