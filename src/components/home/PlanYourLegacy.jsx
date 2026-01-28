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
  const rightSectionRef = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (rightSectionRef.current) {
        if (window.innerWidth >= 1600) {
          rightSectionRef.current.style.marginLeft = 'auto';
          rightSectionRef.current.style.marginRight = 'auto';
          rightSectionRef.current.style.maxWidth = '440px';
        } else {
          rightSectionRef.current.style.marginLeft = '100px';
          rightSectionRef.current.style.marginRight = 'auto';
          rightSectionRef.current.style.maxWidth = 'none';
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white pb-16 md:pb-20 lg:pb-24 pt-1 md:pt-8 lg:pt-8 plan-section ${
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

        <div className="relative z-10 max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-6 grid gap-8 lg:grid-cols-[690px_1fr] items-center">
        {/* Left: Family tree image */}
        <div className="flex flex-col items-center lg:items-start justify-center plan-left">
          {/* Mobile image */}
          <div className="w-full max-w-[343px] md:hidden plan-image">
            <div className="w-full">
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
              className="!w-[343px] h-[50px] rounded-[66px] font-[Urania] text-[18px] font-bold !bg-[#132F2C] !text-white shadow-[0_10px_25px_rgba(10,47,36,0.35)] hover:!bg-[#05281F] transition-colors duration-200"
              style={{fontFamily: 'Urania', fontWeight: '700', fontStyle: 'normal', fontSize: '18px', lineHeight: '100%', letterSpacing: '0%', padding: '15px 32px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            />
          </div>

          {/* Desktop / tablet image */}
          <div className="hidden md:block w-full max-w-[690px] lg:w-[690px] plan-image">
            <img
              src={planYourLegacyImage}
              alt="Family tree preview"
              loading="lazy"
              decoding="async"
              className="w-full h-[568px] object-cover"
            />
          </div>
        </div>

        {/* Right: Text + bullets + CTA (desktop/tablet only) */}
        <div ref={rightSectionRef} className="hidden md:block text-left plan-right relative" style={{ marginLeft: '100px' }}>
            <h1 className="font-[Urania] font-bold text-[42px] leading-[49px] text-[#132F2C] plan-heading max-w-[440px]">
              No Succession Plan? Discover your legal heirs in seconds.
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
