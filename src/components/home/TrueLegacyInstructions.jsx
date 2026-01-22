import { useEffect, useRef, useState } from "react";
import slideImageInstruction from "../../assets/img/home/instructionFrame 2147224734.webp";
import mobileInstructionBg from "../../assets/img/home/instructionmobileframe.webp";
import cornerTriangle from "../../assets/icon/Vectorlogo6904.webp";
import leftArrowIcon from "../../assets/icon/circle-arrow-left-02-sharp.webp";
import rightArrowIcon from "../../assets/icon/circle-arrow-right-sharp.webp";

const slides = [
  {
    image: slideImageInstruction,
    text: "What will happen to your assets? Will your family inherit them easily, or will there be legal hiccups?",
  },
  {
    image: slideImageInstruction,
    text: "Can they locate your bank information, insurance policies, and property documents without you?",
  },
  {
    image: slideImageInstruction,
    text: "Would your family know how your wealth is meant to be distributed, or would they face disputes and confusion?",
  },
  {
    image: slideImageInstruction,
    text: "Would your family know where to begin?",
  },
  {
    image: slideImageInstruction,
    text: "Will they remember you for your life or for the paperwork they were left to untangle?",
  },
];

const TrueLegacyInstructions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentSlide = slides[activeIndex];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 620);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 620);
  };

  const getPosition = (index) => {
    const offset = (index - activeIndex + slides.length) % slides.length;
    if (offset === 0) return "front";
    if (offset === 1) return "middle";
    return "back";
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`instruction-section ${isVisible ? "instruction-section-visible" : ""}`}
    >
      {/* Mobile layout */}
      <section
        className="relative w-full min-h-[100vh] flex items-center md:hidden"
        style={{
          backgroundImage: `url(${mobileInstructionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-[375px] mx-auto w-full px-4 pt-1 pb-1">
          {/* Heading on top */}
          <h2 className="font-[Urania] font-bold text-[32px] leading-[36px] text-white max-w-[274px] instruction-heading">
            If you weren't here tomorrow...
          </h2>

          {/* Card stack */}
          <div className="relative mt-24 flex justify-center instruction-stack-mobile">
            {slides.map((slide, index) => {
              const position = getPosition(index);
              const isFront = position === "front";

              return (
                <div
                  key={slide.text}
                  className={`instruction-layer-mobile instruction-card-${position} ${
                    isFront ? "instruction-card" : ""
                  }`}
                >
                  {isFront && (
                    <>
                      <div className="flex items-center h-full w-full instruction-slide">
                        <div className="border-l-[5px] border-[#F4D57E] pl-7 ml-0">
                          <p className="mt-0 font-[Urania] font-normal text-[18px] sm:text-[20px] lg:text-[32px] leading-[1.5] lg:leading-[45.5px] text-[#132F2C] max-w-[320px] sm:max-w-[360px] lg:max-w-[640px]">
                            {slide.text}
                          </p>
                        </div>
                      </div>

                      <img
                        src={cornerTriangle}
                        alt=""
                        className="absolute bottom-2 right-2 w-6 h-6"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* arrows */}
          <div className="mt-7 flex justify-center gap-3">
            <button onClick={goPrev} aria-label="Previous">
              <img src={leftArrowIcon} alt="Previous" className="w-7 h-7" />
            </button>
            <button onClick={goNext} aria-label="Next">
              <img src={rightArrowIcon} alt="Next" className="w-7 h-7" />
            </button>
          </div>
        </div>
      </section>

      {/* Desktop / tablet layout (unchanged) */}
      <section
        className="relative w-full min-h-[520px] hidden md:flex items-center"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-[1300px] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-10">

          {/* TOP LEFT HEADING */}
          <h2 className="font-[Urania] font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] text-white max-w-[350px] md:absolute md:top-0 md:left-0 instruction-heading">
            If you weren't here tomorrow...
          </h2>

          {/* RIGHT CARD AREA */}
          <div className="relative flex justify-center md:justify-end mt-10 md:mt-24 instruction-stack-desktop">
            {slides.map((slide, index) => {
              const position = getPosition(index);
              const isFront = position === "front";

              return (
                <div
                  key={slide.text}
                  className={`instruction-layer-desktop instruction-card-${position} ${
                    isFront ? "instruction-card" : ""
                  }`}
                >
                  {isFront && (
                    <>
                      <div className="flex items-center h-full instruction-slide">
                        {/* Left yellow line matching text height, aligned with card edge */}
                        <div className="border-l-[5px] border-[#F4D57E] pl-7 -ml-2 sm:-ml-0">
                          <p className="font-[Urania] font-normal text-[18px] sm:text-[20px] lg:text-[32px] leading-[1.5] lg:leading-[45.5px] text-[#132F2C] max-w-[640px]">
                            {slide.text}
                          </p>
                        </div>
                      </div>

                      {/* YELLOW CORNER */}
                      <img
                        src={cornerTriangle}
                        alt=""
                        className="absolute bottom-2 right-2 w-10 h-10"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* ARROWS UNDER CARD */}
          <div className="flex justify-center md:justify-end mt-6 md:pr-[350px] gap-1">
            <button onClick={goPrev} aria-label="Previous">
              <img src={leftArrowIcon} alt="Previous" className="w-7 h-7" />
            </button>
            <button onClick={goNext} aria-label="Next">
              <img src={rightArrowIcon} alt="Next" className="w-7 h-7" />
            </button>
          </div>

        </div>
      </section>
    </section>
  );
}

export default TrueLegacyInstructions;
