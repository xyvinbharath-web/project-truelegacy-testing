import { useEffect, useState } from "react";
import FrameourPromise from "../../assets/img/whychooseus/Frameour-promise.webp";
import StyledButton from "../../ui/StyledButton";

const OurPromise = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("our-promise-section");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="our-promise-section"
      className="bg-[#F6FFFF] text-black px-4 md:px-16 py-10 md:py-16"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT CONTENT */}
          <div
            className={`order-1 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
  <h2 className="font-[Urania] font-semibold text-[42px] lg:text-[42px] text-[#132F2C] mb-5">
    Our Promise
  </h2>

  <p className="font-[Urania] font-medium text-[22px] lg:text-[32px] leading-snug text-[#132F2C] mb-6 max-w-[520px]">
    No matter your situation, you are not alone.
    We're here to guide you every step of the way.
  </p>

  <p className="font-[Urania] text-[16px] leading-[26px] text-[#2F4F4A] mb-8 max-w-[520px]">
    We help families, NRIs, and individuals plan their inheritance the right
    way. Many of you have worked hard your entire lives and leave behind your
    wealth in confusion because there is no clear Will or plan. We're a team of
    experts in Indian succession laws and cross-border inheritance. Our goal is
    to make succession planning simple, legal, and stress-free—so your legacy
    reaches the right hands, without conflict.
  </p>

  {/* CTA */}
  <div className="mb-10">
    <button
      className="flex items-center justify-center text-[18px] font-[Urania] text-white bg-[#132F2C] border border-[#132F2C] rounded-[66px] h-[51px] px-8"
      style={{ width: "310px" }}
    >
      Start Estate Planning Today
    </button>
  </div>

  {/* Divider: thin grey line with thicker yellow segment */}
  <div className="relative w-full max-w-[520px] mb-6 h-[6px]">
    {/* Grey base line (thin, centered) */}
    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#D6E0DE]" />
    {/* Yellow segment (thicker) */}
    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#F4D57E] rounded-full" />
  </div>

  <p className="font-[Urania] text-[22px] lg:text-[32px] leading-snug text-[#132F2C] max-w-[520px]">
    Succession Solutions for all. Tailored for Families, NRIs & Businesses.
  </p>
  
  
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`order-2 lg:order-2 transition-all duration-700 delay-200 flex justify-end ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={FrameourPromise}
              alt="Our Promise"
              loading="lazy"
              decoding="async"
              className="w-[302px] h-[299px] rounded-lg mt-8 lg:mt-0 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
