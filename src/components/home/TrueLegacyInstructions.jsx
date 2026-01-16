import { useState } from "react";
import slideImageInstruction from "../../assets/img/home/instructionFrame 2147224734.webp";
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
    text: "Have you clearly recorded your wishes, or are loved ones left to interpret what you would have wanted?",
  },
  {
    image: slideImageInstruction,
    text: "Is your plan updated for today’s relationships, locations, and responsibilities across your family?",
  },
];

const TrueLegacyInstructions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex];

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative w-full min-h-[520px] flex items-center"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-[1300px] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-10">

        {/* TOP LEFT HEADING */}
        <h2 className="font-[Urania] font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] text-white max-w-[350px] md:absolute md:top-0 md:left-0">
          If you weren't here tomorrow...
        </h2>

        {/* RIGHT CARD AREA */}
        <div className="relative flex justify-center md:justify-end mt-10 md:mt-24">

          {/* STACKED BACK CARDS */}
          <div className="absolute right-14 top-[-28px] w-[660px] h-[210px] rounded-xl bg-white" />
          <div className="absolute right-7 top-[-14px] w-[710px] h-[210px] rounded-xl bg-white" />

          {/* MAIN CARD */}
          <div className="relative w-full max-w-[760px] min-h-[210px] bg-[#F6FFFF] rounded-xl shadow-[0_18px_50px_rgba(0,0,0,0.35)] px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
            <div className="flex">
              {/* Left yellow line matching text height, aligned with card edge */}
              <div className="border-l-[5px] border-[#F4D57E] pl-4 -ml-8 sm:-ml-10">
                <p className="font-[Urania] text-[20px] sm:text-[24px] lg:text-[32px] leading-[1.4] text-[#132F2C]">
                  {currentSlide.text}
                </p>
              </div>
            </div>

            {/* YELLOW CORNER */}
            <img
              src={cornerTriangle}
              alt=""
              className="absolute bottom-2 right-2 w-10 h-10"
            />
          </div>
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
  );
};

export default TrueLegacyInstructions;
