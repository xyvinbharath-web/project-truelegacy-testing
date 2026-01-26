import { useEffect, useState } from "react";
import Framewhychoose1 from "../../assets/img/whychooseus/Framewhychoose1.webp";
import Framewhychoose2 from "../../assets/img/whychooseus/Framewhychoose2.webp";
import Framewhychoose3 from "../../assets/img/whychooseus/Framewhychoose3.webp";
import Framewhychoose4 from "../../assets/img/whychooseus/Framewhychoose4.webp";
import Framewhychoose5 from "../../assets/img/whychooseus/Framewhychoose5.webp";
import Framewhychoose6 from "../../assets/img/whychooseus/Framewhychoose6.webp";

const WhyChoose = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("whychooseus-section");
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

  const cards = [
    {
      id: "01",
      title: "Custom Trust Creation",
      desc: "We help you establish private, public, family, charitable, or religious trusts tailored to your goals and advise on best structure, whether revocable, irrevocable, discretionary, or fixed.",
      image: Framewhychoose1
    },
    {
      id: "02",
      title: "Estate & Succession Planning",
      desc: "Our plans combine trusts, wills, and other tools to make asset transfer smooth, reduce tax impact, and address both local and international needs.",
      image: Framewhychoose2
    },
    {
      id: "03",
      title: "Trust Management & Compliance",
      desc: "We support trustees in managing assets, preparing financial statements, filing taxes, and meeting all legal and regulatory requirements.",
      image: Framewhychoose3
    },
    {
      id: "04",
      title: "Tax-Efficient Strategies",
      desc: "We guide you on how to structure trust income to save taxes, use available exemptions, and stay compliant with tax laws.",
      image: Framewhychoose4
    },
    {
      id: "05",
      title: "Family Business Governance",
      desc: "Every result includes clear explanations with citations, so you understand not just what the law says, but why.",
      image: Framewhychoose5
    },
    {
      id: "06",
      title: "Trustee Guidance",
      desc: "We train and advise trustees to fulfil their roles with confidence, responsibility, and best practices.",
      image: Framewhychoose6
    },
  ];

  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .why-choose-card {
            width: 414px !important;
            height: 451px !important;
            min-height: 451px !important;
            border-radius: 6px !important;
            opacity: 1 !important;
            transform: rotate(0deg) !important;
          }
          .why-choose-card img {
            width: 359px !important;
            height: 186px !important;
            border-radius: 6px !important;
            opacity: 1 !important;
            transform: rotate(0deg) !important;
            position: absolute !important;
            top: 30px !important;
            left: 30px !important;
          }
          .why-choose-card h3 {
            position: relative !important;
            z-index: 10 !important;
            margin-top: 226px !important;
            margin-bottom: 12px !important;
            max-width: 240px !important;
          }
          .why-choose-card p {
            position: relative !important;
            z-index: 10 !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
      <section
        id="whychooseus-section"
        className="bg-white text-black px-4 md:px-16 py-10 md:py-16"
      >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`why-choose-card relative bg-[#132F2C] border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-6 group flex flex-col h-full cursor-pointer rounded-[6px] w-full h-auto min-h-[320px] sm:min-h-[400px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                width: '100%',
                maxWidth: '414px',
                borderRadius: '6px',
                transform: 'rotate(0deg)',
                transitionDelay: isVisible ? `${i * 150}ms` : '0ms'
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="w-full h-32 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6"
              />
              <h3 className="text-[24px] mb-4 sm:mb-6 text-[#F4D57E] font-bold font-[Urania] leading-[24px] max-w-[200px] sm:max-w-[280px]">
                {card.title}
              </h3>
              <p className="text-gray-300 text-[16px] leading-[22px] flex-grow font-[Urania] font-normal max-w-[260px] sm:max-w-[330px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyChoose;
