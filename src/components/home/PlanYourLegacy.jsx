import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSuccession } from "../../context/SuccessionContext";
import planYourLegacyImage from "../../assets/img/home/Frame planyourlagacy.webp";
import planYourLegacyMobile from "../../assets/img/home/Framemobileplanyourlagacy.webp";
import group4Bg from "../../assets/img/home/Group 4.webp";
import tickIcon from "../../assets/icon/tickelements.webp";
import StyledButton from "../../ui/StyledButton";

const PlanYourLegacy = () => {
  const { successionData } = useSuccession();
  const token = successionData?.temporary_user?.token;
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleStartPlan = () => {
    if (token) {
      navigate("/succession/view");
    } else {
      navigate("/succession");
    }
  };

  const features = [
    "Interactive Family Tree Visualization",
    "Inheritance Calculation Based on Succession Laws",
    "In under one-minute",
  ];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white py-16 md:py-20 lg:py-24 plan-section ${
        isVisible ? "plan-section-visible" : ""
      }`}
    >
      <div className="relative">
        <img
          src={group4Bg}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute top-0 right-0 w-[240px] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[690px_1fr] items-center">
        {/* Left: Family tree image */}
        <div className="flex flex-col items-center lg:items-start justify-center plan-left">
          {/* Mobile image */}
          <div className="w-full max-w-[343px] md:hidden plan-image">
            <div className="w-full bg-white rounded-[6px] overflow-hidden">
              <img
                src={planYourLegacyMobile}
                alt="Family tree preview mobile"
                loading="lazy"
                decoding="async"
                className="w-[343px] h-[430px] object-cover"
              />
            </div>
          </div>

          {/* Mobile CTA button under image */}
          <div className="mt-6 md:hidden flex justify-center w-full plan-cta">
            <StyledButton
              name="Find Your Legal Heirs"
              onClick={handleStartPlan}
              variant="primary"
              minWidth="auto"
              className="inline-flex items-center justify-center rounded-full !bg-[#132F2C] px-8 py-3 font-[Urania] text-[18px] font-bold !text-white shadow-[0_10px_25px_rgba(10,47,36,0.35)] hover:!bg-[#0D241E] transition-colors duration-200"
            />
          </div>

          {/* Desktop / tablet image */}
          <div className="hidden md:block w-full max-w-[690px] lg:w-[690px] plan-image">
            <div className="w-full bg-white rounded-[6px] overflow-hidden shadow-[0_18px_40px_rgba(5,41,26,0.10)]">
              <img
                src={planYourLegacyImage}
                alt="Family tree preview"
                loading="lazy"
                decoding="async"
                className="w-full h-[568px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Text + bullets + CTA (desktop/tablet only) */}
        <div className="hidden md:block text-left plan-right relative">
            <h1 className="font-[Urania] font-bold text-[42px] leading-[49px] text-[#132F2C] plan-heading">
              No Succession Plan? Discover your legal <br />heirs in seconds.
            </h1>

            <div className="mt-8 space-y-3">
              {features.map((text, idx) => (
                <div key={text} className="max-w-md feature-pill" style={{ transitionDelay: `${160 + idx * 80}ms` }}>
                  <div className="flex items-center gap-3 w-full rounded-full border border-[#D7E7DF] bg-white px-5 py-3 shadow-[0_4px_10px_rgba(5,41,26,0.06)] hover:shadow-[0_10px_24px_rgba(5,41,26,0.14)] hover:-translate-y-0.5 transition-all duration-300">
                    <img
                      src={tickIcon}
                      alt="tick icon"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="font-[Urania] text-[16px] leading-[1.25] text-[#132F2C]">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 plan-cta">
              <StyledButton
                name="Find Your Legal Heirs"
                onClick={handleStartPlan}
                variant="primary"
                minWidth="auto"
                className="inline-flex items-center justify-center rounded-full !bg-[#132F2C] px-8 py-3 font-[Urania] text-[18px] font-bold !text-white shadow-[0_10px_25px_rgba(10,47,36,0.35)] hover:!bg-[#0D241E] transition-colors duration-200"
              />
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PlanYourLegacy;
