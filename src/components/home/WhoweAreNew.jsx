import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardImageWill from "../../assets/img/home/Framewhoarewe1.webp";
import cardImageTrust from "../../assets/img/home/Framewhoarewe2.webp";
import cardImageFamily from "../../assets/img/home/Framewhoarewe3.webp";
import questionIcon from "../../assets/icon/Vectorlogo6904.webp";
import quoteDotsBg from "../../assets/img/home/Group 3.webp";
import StyledButton from "../../ui/StyledButton";

const cards = [
  {
    image: cardImageWill,
    title: "Will",
    description: "Don't let your legacy fall into the wrong hands.",
    btn: "Draft your Will",
    tab: "will",
  },
  {
    image: cardImageTrust,
    title: "Trust",
    description: "Build a fortress to protect what matters.",
    btn: "Form your Trust",
    tab: "trust",
  },
  {
    image: cardImageFamily,
    title: "Family Office",
    description: "Keep your wealth guided, guarded, and growing.",
    btn: "Coming Soon",
    tab: null,
  },
];

const WhoweAreNew = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (tab) => {
    if (tab) navigate(`/services?tab=${tab}`);
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#F6FFFF] pt-16 md:pt-20 lg:pt-24 pb-40 md:pb-56 lg:pb-64 who-section ${
        isVisible ? "who-section-visible" : ""
      }`}
    >
      {/* Container */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
          {/* Left content */}
          <div className="who-heading-block">
            <h2 className="font-[Urania] font-bold text-[32px] sm:text-[38px] lg:text-[42px] leading-[49px] text-[#132F2C] mb-4">
              Who are We?
            </h2>

            <p className="font-[Urania] font-normal text-[16px] leading-[24px] text-[#132F2C] max-w-[520px]">
              We are a specialized estate planning and cross-border succession advisory firm.
              Our work focuses on enabling Indian and NRI families to achieve a clear,
              enforceable, and tax-efficient transfer of wealth through Wills, private trusts,
              and structured family governance.
            </p>
          </div>

          {/* Right quote with dots background */}
          <div
            className="relative max-w-[480px] lg:ml-auto mt-4 lg:mt-10 pb-6 who-quote-block"
            style={{
              backgroundImage: `url(${quoteDotsBg})`,
              backgroundRepeat: "no-repeat",
              // Position dots + triangle around the quote text
              backgroundPosition: "70% 10%",
              backgroundSize: "120% 150%",
            }}
          >
            <p className="font-[Urania] font-extralight italic text-[24px] sm:text-[28px] lg:text-[32px] leading-tight text-[#132F2C] text-left">
              “Families deserve peace, clarity, and security when passing on what they have built.”
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3 justify-items-center mt-12 md:mt-16 who-cards-grid">
          {cards.map((card) => (
            <div
              key={card.title}
              className="who-card bg-white shadow-[0_10px_30px_rgba(5,41,26,0.08)] overflow-hidden"
              style={{
                maxWidth: "427px",
                width: "100%",
                height: "466px",
                borderRadius: "6px",
              }}
            >
              {/* Image */}
              <div className="pt-[30px] px-[30px] flex justify-center">
                <div
                  className="overflow-hidden bg-[#05281F] who-card-image"
                  style={{
                    width: "367px",
                    height: "220px",
                    borderRadius: "6px",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 px-6 pb-8 text-center flex flex-col items-center who-card-body">
                <h3 className="font-[Urania] font-bold text-[22px] lg:text-[24px] text-[#132F2C] mb-2">
                  {card.title}
                </h3>

                <p className="font-[Urania] text-[15px] leading-[22px] text-[#132F2C]/80 max-w-[260px] mb-5">
                  {card.description}
                </p>

                <StyledButton
                  name={card.btn}
                  onClick={() => handleCardClick(card.tab)}
                  disabled={!card.tab}
                  variant="primary"
                  minWidth="237px"
                  className={`rounded-[66px] px-8 py-3.5 font-[Urania] text-[14px] font-bold whitespace-nowrap !bg-[#132F2C] !text-white !opacity-100 transition
                    ${card.tab ? "hover:!bg-[#0D241E]" : "cursor-not-allowed"}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoweAreNew;
