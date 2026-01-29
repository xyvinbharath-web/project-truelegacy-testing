import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JointWillImg from "../../assets/img/resource/Is-a-Joint-Will Right-for-You.webp";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";
import ShareIcon from "../../assets/icon/share-08.webp";
import NomineesImg from "../../assets/img/resource/Nominees.webp";
import TrustMattersImg from "../../assets/img/resource/Why-Trust-Matters.webp";
import KeralaCourtImg from "../../assets/img/resource/What-the-Kerala-High-Court’s-Mutation.webp";
import LegalHeirshipImg from "../../assets/img/resource/Understanding-Legal-Heirship-Certificate.webp";

const IsJointWillRightForYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
  ].filter((a) => a.id !== 2);

  const handleArticleClick = (article) => {
    if (article.id === 1) {
      navigate("/resources/nominees-are-not-legal-heirs");
      return;
    }
    if (article.id === 2) {
      navigate("/resources/is-joint-will-right-for-you");
      return;
    }
    if (article.id === 3) {
      navigate("/resources/why-trust-matters");
      return;
    }
    if (article.id === 4) {
      navigate("/resources/kerala-court-mutation-guidelines");
      return;
    }
    if (article.id === 5) {
      navigate("/resources/understanding-legal-heirship-certificate");
      return;
    }
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

  // Simple on-load entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative"
      style={{
        background: "linear-gradient(264.41deg, #132F2C 4.24%, #132F2C 98.47%)",
      }}
    >
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#132F2C]">
        <Navbar />
      </div>

      {/* Spacer to avoid content overlap */}
      <div className="h-[64px] md:h-[72px]" />

      {/* Hero Section - matching ResourcesSection format */}
      <section
        ref={sectionRef}
        className={`bg-[#F6FFFF] py-10 md:py-16 ${
          isVisible ? "animate-fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">

          {/* ================= HERO SECTION (RESPONSIVE OVERLAP) ================= */}
          <div className="relative mb-10 md:mb-1">

            {/* Image wrapper - mobile right-aligned, tablet wider */}
            <div className={`relative w-full max-w-[324px] h-[300px] sm:h-[380px] md:h-[380px]
                            ml-auto mr-[-26px]
                            md:max-w-[640px] md:mr-0
                            lg:max-w-none lg:w-[968px] lg:h-[540px] rounded-xl overflow-hidden
                            lg:ml-auto lg:mr-[-180px] ${
                              isVisible ? "animate-fade-in" : ""
                            }`}
                            style={{ animationDelay: '200ms' }}>
              <img
                src={JointWillImg}
                alt="Is a Joint Will Right for You?"
                className="w-full h-full object-cover object-[10%_50%] lg:object-center"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#132F2C]/45" />

              {/* Legacy accent image in place of triangle */}
              <img
                src={LegacyAccent}
                alt="Legacy accent"
                className="absolute bottom-0 right-0 w-[200px] h-auto"
              />
            </div>

            {/* Yellow card */}
            <div
              className={`bg-[#F4D57E] text-[#132F2C] rounded-[6px]
                         w-[315px] max-w-[90%] px-6 py-4 ml-3 -mt-10 relative z-20
                         md:w-[420px] md:ml-8 md:-mt-14
                         lg:absolute lg:mt-0 lg:ml-0 lg:left-[-175px] lg:px-[69px] lg:py-[66px] lg:w-[640px]
                         lg:top-1/2 lg:-translate-y-1/2 ${
                           isVisible ? "animate-fade-in" : ""
                         }`}
                         style={{ animationDelay: '400ms' }}
            >
              {/* Meta */}
              <p
                className="flex items-center gap-2 font-[Urania] font-normal text-[14px] leading-[14px] mb-[16px]"
              >
                <span>Blog • 2 min reads • Share</span>
                <img
                  src={ShareIcon}
                  alt="Share"
                  className="w-5 h-5"
                />
              </p>
              <h1
                className="font-[Urania] font-bold text-[26px] leading-[31px]
                           md:text-[26px] md:leading-[31px]
                           lg:text-[46px] lg:leading-[46px]"
              >
                Is a Joint Will Right for You?
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div className="bg-[#F6FFFF] px-4 md:px-16 pt-0">
        <button
          onClick={() => navigate(-1)}
          className="mb-3 text-[#132F2C]/80 hover:text-[#132F2C] transition-colors font-[Urania] text-sm underline"
        >
          ← Back to Resources
        </button>
      </div>

      {/* Content */}
      <main className="flex-grow bg-[#F6FFFF] text-black ">
        <div
          ref={sectionRef}
          className={`px-4 md:px-16 pt-6 pb-12 md:pt-8 md:pb-16 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="prose prose-lg max-w-none font-[Urania] text-[#132F2C] leading-[28px] md:leading-[32px]">
            <blockquote className="border-l-4 border-[#F4D57E] pl-4 my-6 text-[20px] leading-[30px] font-medium italic">
              "Why bother with two Wills when we own everything together? It's easier this way, right?"
            </blockquote>
            <p className="mb-4">
              Many clients come to us wanting to write a Joint Will because all their assets are in joint names and they believe a joint will is the most natural next step.
            </p>
            <p className="mb-4">
              On the surface, the idea of a single document to reflect a shared life seems logical - and even emotionally satisfying. But when it comes to succession planning, simplicity on paper can sometimes lead to complexity in practice.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What is a Joint Will?
            </h2>
            <p className="mb-4">
              A Joint Will is a unified document created by two individuals, typically spouses, outlining how their assets should be distributed after their death. In most cases, it states that the surviving spouse will inherit everything, and after their passing, the remaining assets will pass to specified beneficiaries, usually children.
            </p>
            <p className="mb-4">
              A key feature of a Joint Will is that it is a binding agreement between the husband and wife, implying neither of them can alter the Will without the other's approval while both are alive and more importantly, once a partner passes away, the surviving spouse is locked into its terms and cannot change the terms. Hence, the choice to create a Joint Will should be made with careful consideration of its limitations and the potential effects on the surviving partner's ability to adjust to future changes.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Why some Couples consider a Joint Will
            </h2>
            <p className="mb-4">
              A few advantages that may attract couples to write a Joint Will are:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li className="mb-2">
                <strong>Simplified Planning and Documentation</strong> - Joint Wills combine the succession planning process into a single document for both parties. This approach can be beneficial for couples sharing the same interests for asset distribution, as it eliminates the need to create and manage separate Wills.
              </li>
              <li className="mb-2">
                <strong>Mutual decisions upheld</strong> - With Joint Wills there is a certainty that both partners' wishes will be honoured after one of them passes away as the terms cannot be altered after one spouse passes away.
              </li>
              <li className="mb-2">
                <strong>Cost Effective</strong> - Creating a Joint Will is more cost-effective than drafting separate Wills, saving on both the initial creation of the Will and potentially reducing legal costs during estate administration.
              </li>
              <li className="mb-2">
                <strong>Protection for the Surviving Spouse</strong> - A Joint Will protects the surviving spouse, ensuring they have the necessary resources and assets to live comfortably before the estate is distributed according to the further terms of the Will.
              </li>
            </ol>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What are the Disadvantages of a Joint Will?
            </h2>
            <p className="mb-4">
              Here's why you should think twice before choosing a Joint Will:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li className="mb-2">
                <strong>Limited Flexibility / Control for the Surviving Partner</strong> - A major drawback of a Joint Will is its limited flexibility, particularly after one partner's death. The Will becomes irrevocable upon the death of one partner which also reduces the surviving partner's ability to exercise control over the estate. This can be problematic as it prevents the surviving partner from modifying it to reflect changes in circumstances, relationships, or preferences such as remarriage, new dependents, altered financial plans, make fair provision for children from previous relationships etc.
              </li>
              <li className="mb-2">
                <strong>Risk of Future Conflicts</strong> - A Joint Will is aimed at reducing disputes by clearly outlining both partners' wishes, but it can sometimes cause conflicts among beneficiaries, specifically if circumstances change after the death of the first partner.
              </li>
              <li className="mb-2">
                <strong>Complications in Estate Administration</strong> - Joint Will can add complexity to the estate administration process, as the Will must address the distribution of assets after both individuals have passed away. It may result in legal challenges if Will's terms become outdated or if there are unclear instructions regarding asset distribution.
              </li>
              <li className="mb-2">
                <strong>Delays in Asset Distribution</strong> - A Joint Will typically specifies asset distribution only after both partners have passed away, and it can cause delays in distributing assets to beneficiaries.
              </li>
            </ol>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Final Thoughts
            </h2>
            <p className="mb-4">
              A Joint Will may be suitable for couples who:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Have fully aligned and unchanging wishes regarding asset distribution.</li>
              <li>Share a simple, jointly-owned estate.</li>
              <li>Want to ensure mutual decisions are legally locked in.</li>
              <li>Do not foresee remarriage, relocation, new dependents or change in financial plans.</li>
              <li>Prefer simplicity over flexibility.</li>
            </ul>
            <p className="mb-4">
              However, before making a decision on whether a Joint Will is suitable for you or not, careful consideration of many factors including your estate planning needs, goals, and the potential impact it has on your estate's future management and distribution, is recommended. Do consult with experts to receive insights into whether a Joint Will is the best choice for your situation or if alternative succession planning tools might better serve your needs.
            </p>
          </div>
        </div>
      </main>

      {/* ================= RELATED ARTICLES SECTION ================= */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16">
          <div className="pt-16 md:pt-20 hidden md:block resources-section-visible">
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[32px] leading-[32px] md:text-[42px] md:leading-[49px] mb-6 md:mb-8">
              Related articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.slice(0, 3).map((item) => (
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
                    <p className="font-[Urania] text-[#868989] text-[14px] leading-[20px] md:text-[14px] md:leading-[24px] font-normal">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gap before footer */}
      <div className="h-24 md:h-32 bg-white" />

      <Footer />
    </div>
  );
};

export default IsJointWillRightForYou;
