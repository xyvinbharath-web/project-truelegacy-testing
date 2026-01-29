import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TrustMattersImg from "../../assets/img/resource/Why-Trust-Matters.webp";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";
import ShareIcon from "../../assets/icon/share-08.webp";
import NomineesImg from "../../assets/img/resource/Nominees.webp";
import JointWillImg from "../../assets/img/resource/Is-a-Joint-Will Right-for-You.webp";
import KeralaCourtImg from "../../assets/img/resource/What-the-Kerala-High-Court’s-Mutation.webp";
import LegalHeirshipImg from "../../assets/img/resource/Understanding-Legal-Heirship-Certificate.webp";

const WhyTrustMatters = () => {
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
  ].filter((a) => a.id !== 3);

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
                src={TrustMattersImg}
                alt='Why "Trust" Matters When Creating a Private Trust for Succession Planning'
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
                Why "Trust" Matters When Creating a Private Trust for Succession Planning
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
      <main className="flex-grow bg-[#F6FFFF] text-black">
        <div
          ref={sectionRef}
          className={`px-4 md:px-16 pt-6 pb-12 md:pt-8 md:pb-16 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="prose prose-lg max-w-none font-[Urania] text-[#132F2C] leading-[28px] md:leading-[32px]">
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Private Trusts Work on Confidence, Not Just Documents
            </h2>
            <p className="mb-4">
              A private trust is a powerful succession-planning tool, but its success depends on more than legal compliance. It rests on two foundations: trust in the individuals who administer it and trust in the structure that protects the family's interests.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Introduction
            </h2>
            <p className="mb-4">
              When we talk about succession planning, in reality we are talking about what happens to our family, our values, and our hard-earned assets when we are no longer around to guide them. Wealth is only one part of the conversation, the bigger part is about care, responsibility, and peace within the family.
            </p>
            <p className="mb-4">
              A private trust is one of the most effective tools to protect family wealth and provide for loved ones. It helps ensure that minors, elderly parents, or financially inexperienced family members are taken care of, and that important assets such as homes or family businesses are handled with stability and continuity.
            </p>
            <p className="mb-4">
              But for a private trust to work well, there are two kinds of trust that matter.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              1. Trust in the People Chosen to Manage it
            </h2>
            <p className="mb-4">
              A private trust has a clear legal structure - settlor, trustee, beneficiaries, and assets. Yet, its real strength lies in something deeper. When a person sets up a trust, they are placing confidence in someone to carry out their wishes fairly and responsibly long after they are gone.
            </p>
            <p className="mb-4">
              This requires trust at a human level: trust that the trustee understands the family, respects the relationships involved, and will make decisions that balance both legal duties and emotional realities.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              2. Trust in the Trust Structure
            </h2>
            <p className="mb-4">
              The idea of "trust" does not end with people. There is a second, quieter kind that matters just as much: trust in the structure itself. When a family chooses to create a private trust, they are also placing confidence in the instrument to actually work.
            </p>
            <p className="mb-4">
              This requires trust at a structural level: trust that the trust mechanism will protect the family and uphold intentions with consistency and discipline.
            </p>
            <p className="mb-4">
              Many families assume that harmony will naturally continue, but experience shows that transitions are delicate moments. The absence of clear planning has led to disputes and strained relationships even in the closest families.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              How Trusts Protect Families from Disputes
            </h2>
            <p className="mb-4">
              Without clear planning, even close families can face disagreements. These disputes rarely arise from greed alone. Most arise from confusion, assumptions, and differing expectations.
            </p>
            <p className="mb-4">
              Private trusts help prevent this by creating structure. They:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Clarify who is entitled to what, and when</li>
              <li>Protect assets of minors and dependents</li>
              <li>Separate ownership from benefit</li>
              <li>Reduce chances of litigation</li>
              <li>Keep family matters private</li>
              <li>Preserve continuity for businesses or homes</li>
            </ul>
            <p className="mb-4">
              However, this structure works smoothly when the beneficiaries trust that the trustee will follow the settlor's intent fairly and consistently.
            </p>
            <p className="mb-4">
              Succession is not only a financial process, it is an emotional journey for the family. A trust allows a person to make sure their family continues to receive support, stability, and guidance, especially during difficult times.
            </p>
            <p className="mb-4">
              In this sense, a private trust is not just a legal tool. It is a promise to the next generation that they will be taken care of with clarity and dignity.
            </p>
            <p className="mb-4">
              A private trust gives families more order, protection, and peace in succession planning. But for it to truly serve its purpose, two kinds of trust must exist: the family's trusts in the trustee and the family's trust in the trust itself. Both together allow a legacy to be preserved responsibly and thoughtfully.
            </p>
            <p className="mb-4">
              When there is trust in the plan and trust in the instrument, succession becomes not just a transfer of assets, but a transfer of purpose, values, and care.
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

export default WhyTrustMatters;
