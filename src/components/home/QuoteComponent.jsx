import { useEffect, useRef, useState } from "react";
import StyledButton from "../../ui/StyledButton";
import RequestDialog from "./RequestDialog";
import secureYourLegacyImage from "../../assets/img/home/Framesecureyourlegacy.webp";
import legacyBackground from "../../assets/img/home/Frame legacybackground.webp";

const QuoteComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleRequestCallback = () => {
    // future action
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#FFFFFF] py-16 md:py-20 lg:py-24 relative overflow-x-hidden quote-section ${
        isVisible ? "quote-section-visible" : ""
      }`}
    >
      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 grid gap-1 lg:gap-6 lg:grid-cols-2 md:grid-cols-1 text-center items-center">

        {/* LEFT CONTENT — unchanged */}
        <div className="text-left relative z-20 quote-left text-center mx-auto md:text-center md:mx-auto">
          <h1 className="font-[Urania] font-bold text-[32px] md:text-[42px] leading-[36px] md:leading-[49px] text-[#132F2C] quote-heading">
            Want to Secure
            <br />
            your Legacy?
          </h1>

          <p className="mt-6 max-w-[350px] md:max-w-xl font-[Urania] text-[16px] md:text-[18px] leading-[26px] text-[#132F2C] quote-body">
            "Tomorrow is promised to none. Planning is a gift you can give today. With True Legacy,
            estate and wealth planning becomes more than a financial act; it becomes an act of
            love. The greatest inheritance you can give is peace of mind."
          </p>

          {/* Desktop button */}
          <div className="mt-10 hidden md:block quote-cta">
            <StyledButton
              name="Request a Call Back"
              onClick={() => setIsCallbackOpen(true)}
              variant="primary"
              minWidth="auto"
              className="inline-flex items-center justify-center rounded-full !bg-[#132F2C] px-8 py-3 font-[Urania] text-[18px] font-bold !text-white shadow-[0_10px_25px_rgba(10,47,36,0.35)] hover:!bg-[#0D241E]"
            />
          </div>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative mt-8 md:mt-0 flex justify-center md:justify-center ml-0 md:ml-20 lg:ml-22 quote-right">
          {/* 🔸 DESKTOP decorative background — unchanged */}
          <img
            src={legacyBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="hidden md:block absolute z-10 left-[-350px] bottom-[-1px] w-[420px] pointer-events-none"
          />

          {/* 🔸 MOBILE decorative background */}
          <img
            src={legacyBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="
              md:hidden
              absolute
              z-10
              left-[-40px]
              bottom-[-30px]
              w-[220px]
              pointer-events-none
            "
          />

          {/* 🔹 Image */}
          <div className="relative z-20 w-[285px] h-[284px] md:w-[499px] md:h-[496px] overflow-hidden">
            <img
              src={secureYourLegacyImage}
              alt="Secure your legacy"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>

        {/* MOBILE BUTTON — unchanged */}
        <div className="mt-8 md:hidden flex justify-start w-full relative z-20">
          <StyledButton
            name="Request a Call Back"
            onClick={() => setIsCallbackOpen(true)}
            variant="primary"
            minWidth="auto"
            className="inline-flex items-center justify-center rounded-full !bg-[#132F2C] px-8 py-3 font-[Urania] text-[18px] font-bold !text-white shadow-[0_10px_25px_rgba(10,47,36,0.35)] hover:!bg-[#0D241E]"
          />
        </div>

        {/* Request Dialog */}
        <RequestDialog
          open={isCallbackOpen}
          title="Request a Call Back"
          onClose={() => setIsCallbackOpen(false)}
        />

      </div>
    </section>
  );
};

export default QuoteComponent;
