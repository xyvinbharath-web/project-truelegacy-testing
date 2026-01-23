import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogMain from "../../assets/img/resource/Blog1 1.webp";
import Blog2 from "../../assets/img/resource/blog2.webp";
import Blog3 from "../../assets/img/resource/blog3.webp";
import Blog4 from "../../assets/img/resource/blog4.webp";
import NomineesImg from "../../assets/img/resource/Nominees.webp";
import JointWillImg from "../../assets/img/resource/Is-a-Joint-Will Right-for-You.webp";
import DigitalWillsImg from "../../assets/img/resource/Digital-Wills-in India-Validity-and Risks.webp";
import TrustMattersImg from "../../assets/img/resource/Why-Trust-Matters.webp";
import KeralaCourtImg from "../../assets/img/resource/What-the-Kerala-High-Court’s-Mutation.webp";
import LegalHeirshipImg from "../../assets/img/resource/Understanding-Legal-Heirship-Certificate.webp";

const articles = [
  {
    id: 1,
    type: "Blog",
    meta: "Published: 16 Jan 2026",
    title: "Nominees are NOT Your Legal Heirs!",
    desc: "Understanding the critical difference between a nominee and a legal heir to ensure your assets are distributed according to your wishes.",
    image: NomineesImg,
  },
  {
    id: 2,
    type: "Blog",
    meta: "Published: 16 Jan 2026",
    title: "Is a Joint Will Right for You?",
    desc: "Explore the pros and cons of creating a joint will with your spouse and whether it's the right choice for your estate planning needs.",
    image: JointWillImg,
  },
  {
    id: 3,
    type: "Blog",
    meta: "Published: 16 Jan 2026",
    title: "Why “Trust” Matters When Creating a Private Trust for Succession Planning",
    desc: "Learn why the concept of trust is foundational when setting up a private trust for succession and asset protection.",
    image: TrustMattersImg,
  },
  {
    id: 4,
    type: "Blog",
    meta: "Published: 15 Jan 2026",
    title: "What the Kerala High Court’s Mutation Guidelines Mean for Succession Planning",
    desc: "An overview of the Kerala High Court’s latest mutation guidelines and their impact on succession planning and property transfer.",
    image: KeralaCourtImg,
  },
  {
    id: 5,
    type: "Blog",
    meta: "Published: 15 Jan 2026",
    title: "Understanding Legal Heirship Certificate and Succession Certificate",
    desc: "A clear guide to the differences between a Legal Heirship Certificate and a Succession Certificate, and when each is required.",
    image: LegalHeirshipImg,
  },
 
];

const AllResources = () => {
  const featured = articles[0];
  const others = articles.slice(1);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll-triggered entrance
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleArticleClick = (article) => {
    // Special routing for Nominees article
    if (article.id === 1) {
      navigate("/resources/nominees-are-not-legal-heirs");
      return;
    }
    // Special routing for Joint Will article
    if (article.id === 2) {
      navigate("/resources/is-joint-will-right-for-you");
      return;
    }
    // Special routing for Trust Matters article
    if (article.id === 3) {
      navigate("/resources/why-trust-matters");
      return;
    }
    // Special routing for Kerala Court article
    if (article.id === 4) {
      navigate("/resources/kerala-court-mutation-guidelines");
      return;
    }
    // Special routing for Understanding Legal Heirship article (15 Jan 2026)
    if (article.id === 5) {
      navigate("/resources/understanding-legal-heirship-certificate");
      return;
    }
    // Default routing for other articles
    navigate(`/resources/${article.id}`, {
      state: {
        id: article.id,
        title: article.title,
        image: article.image,
        meta: article.meta,
        type: article.type,
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-white px-4 md:px-16 py-12 md:py-16 resources-section ${
        isVisible ? "resources-section-visible" : ""
      }`}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section heading */}
        <h2 className="font-[Urania] font-bold text-[#132F2C] text-[32px] leading-[32px] md:text-[42px] md:leading-[49px] mb-6 md:mb-8 resources-heading">
          Insights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Featured article - spans two columns on desktop */}
          <article
            className="lg:col-span-2 cursor-pointer resources-featured"
            onClick={() => handleArticleClick(featured)}
          >
            <div className="w-full overflow-hidden rounded-md mb-5">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover"
              />
            </div>

            <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal mb-3">
              <span>{featured.type}</span>
              <span className="mx-2">•</span>
              <span>{featured.meta}</span>
            </div>

            <h3 className="font-[Urania] text-[#132F2C] text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] font-medium mb-3 max-w-[660px]">
              {featured.title}
            </h3>

            <p className="font-[Urania] text-[#132F2C] text-[16px] leading-[24px] md:text-[18px] md:leading-[29px] font-normal max-w-[550px]">
              {featured.desc}
            </p>
          </article>

          {/* Other articles */}
          <div className="space-y-6 resources-sidebar">
            {/* Mobile / tablet: stacked full-width cards */}
            <div className="block lg:hidden space-y-6">
              {others.map((item) => (
                <article
                  key={item.id}
                  className="w-full cursor-pointer resources-article"
                  onClick={() => handleArticleClick(item)}
                >
                  <div className="w-full overflow-hidden rounded-md mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal mb-2">
                    <span>{item.type}</span>
                    <span className="mx-2">•</span>
                    <span>{item.meta}</span>
                  </div>

                  <h4 className="font-[Urania] text-[#132F2C] text-[18px] leading-[22px] font-medium mb-1">
                    {item.title}
                  </h4>

                  <p className="font-[Urania] text-[#2F4F4A] text-[14px] leading-[20px]">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Desktop: compact side list */}
            <div className="hidden lg:block space-y-6">
              {others.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 border-b border-[#E3E7E6] pb-4 last:border-b-0 last:pb-0 cursor-pointer resources-article"
                  onClick={() => handleArticleClick(item)}
                >
                  <div className="w-[130px] h-[90px] overflow-hidden rounded-md flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-[Urania] text-[12px] leading-[14px] text-[#868989] mb-1.5">
                      <span>{item.type}</span>
                      <span className="mx-2">•</span>
                      <span>{item.meta}</span>
                    </div>

                    <h4 className="font-[Urania] text-[#132F2C] text-[16px] leading-snug font-medium mb-1">
                      {item.title}
                    </h4>

                    <p className="font-[Urania] text-[#2F4F4A] text-[13px] leading-[18px] line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* New Section - Additional Resources */}
        <div className="mt-16 md:mt-20 hidden md:block">
      
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer hover:opacity-90 transition-opacity resources-article"
                onClick={() => handleArticleClick(item)}
              >
                <div className="w-full overflow-hidden rounded-md mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover"
                  />
                </div>
                <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal mb-3">
                  <span>{item.type}</span>
                  <span className="mx-2">•</span>
                  <span>{item.meta}</span>
                </div>
                <h3 className="font-[Urania] text-[#132F2C] text-[20px] leading-[20px] md:text-[24px] md:leading-[24px] font-medium mb-3">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="font-[Urania] text-[#132F2C] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] font-normal">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllResources;
