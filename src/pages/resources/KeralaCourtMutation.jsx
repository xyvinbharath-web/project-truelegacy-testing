import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import KeralaCourtImg from "../../assets/img/resource/What-the-Kerala-High-Court’s-Mutation.webp";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";
import ShareIcon from "../../assets/icon/share-08.webp";
import NomineesImg from "../../assets/img/resource/Nominees.webp";
import JointWillImg from "../../assets/img/resource/Is-a-Joint-Will Right-for-You.webp";
import TrustMattersImg from "../../assets/img/resource/Why-Trust-Matters.webp";
import LegalHeirshipImg from "../../assets/img/resource/Understanding-Legal-Heirship-Certificate.webp";

const KeralaCourtMutation = () => {
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
  ].filter((a) => a.id !== 4);

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
                src={KeralaCourtImg}
                alt="What the Kerala High Court's Mutation Guidelines Mean for Succession Planning"
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
                What the Kerala High Court's Mutation Guidelines Mean for Succession Planning
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
              Babu R v. State of Kerala (2024)
            </h2>
            <p className="mb-4">
              Many people assume that once a Will is made or registered, property will pass smoothly to the beneficiary. The Kerala High Court's decision in Babu R v. State of Kerala (2024) shows why this assumption is flawed, by clarifying how property mutation must be handled when a Will is involved and why disputes often surface at this stage, even when a Will exists.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              When a Will Is Not Enough
            </h2>
            <p className="mb-4">
              For many families in India, making a Will is seen as the final step in succession planning. There is a common belief that once a Will is registered, the beneficiary can easily get the property transferred in their name. The Kerala High Court's decision in Babu R v. State of Kerala shows why this belief is often misplaced and why disputes around Wills frequently surface at the mutation stage.
            </p>
            <p className="mb-4">
              This judgment does not change how Wills are made or proved. What it does is explain, in clear terms, how government offices must deal with property records when a Will is involved, and what families should realistically expect.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What is Mutation of Property?
            </h2>
            <p className="mb-4">
              Mutation is the process by which government land records are updated to reflect the name of the person who succeeds to a property after sale, gift, or death. While mutation does not decide legal ownership, it is essential for paying land tax, obtaining building permits, selling property, and dealing with public authorities.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              The Issue in Simple Terms
            </h2>
            <p className="mb-4">
              After a person's death, property records need to be mutated. In Kerala, many people who inherited property through a Will applied for mutation, however, their applications were delayed or rejected because:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Other family members objected,</li>
              <li>A court case was filed (or threatened),</li>
              <li>Officials said they could not decide whether the Will was genuine.</li>
            </ul>
            <p className="mb-4">
              There were no clear rules on how such situations should be handled. Different offices followed different practices, which is why the High Court stepped in to bring clarity and consistency.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What the Court Said
            </h2>
            <p className="mb-4">
              The Court made three important points:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>
                <strong>Revenue officials cannot decide whether a Will is valid:</strong> Only civil courts can examine whether a Will is genuine or legally valid.
              </li>
              <li>
                <strong>Mutation can be done based on a Will, but only if there is no dispute:</strong> If someone objects to the Will, mutation cannot go ahead until a court decides the matter.
              </li>
              <li>
                <strong>Legal heirs must be informed:</strong> Since a Will changes the normal line of inheritance, family members who would otherwise inherit must be given a chance to object.
              </li>
            </ol>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Practical Guidelines
            </h2>
            <p className="mb-4">
              The most useful part of the judgment is the step-by-step guidelines issued for mutation based on a Will. These apply in Kerala, but they also reflect a broader trend in how authorities treat Wills across India.
            </p>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              1. What the applicant must submit: The person asking for mutation must give:
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>A copy of the Will, and</li>
              <li>Details of all legal heirs (through a certificate or a sworn statement).</li>
            </ul>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              2. Notice to family members: The authorities must then inform the legal heirs about the mutation request. In addition, a public notice must be displayed in local government offices, giving 30 days to raise objections.
            </h3>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              3. If no one objects: If no objections are received within the notice period, or if all heirs give written consent, mutation can be completed.
            </h3>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              4. If someone objects: If even one legal heir disputes the Will:
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>The revenue office must stop the mutation process.</li>
              <li>The parties must approach a civil court to settle the dispute.</li>
            </ul>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              5. Time limit for objectors: If someone objects, they must file a civil case within three months.
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>If no case is filed, mutation can proceed.</li>
              <li>If a case is filed, mutation must wait until the court gives a final decision.</li>
            </ul>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              6. If a case is already pending: If a court case about the Will or inheritance is already ongoing, mutation cannot be done until the case is decided.
            </h3>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What This Means in Real Life
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>A registered Will is not enough on its own.</strong> Many people assume that registration guarantees smooth transfer. This judgment makes it clear that registration does not prevent disputes or objections.
              </li>
              <li>
                <strong>Mutation is no longer a shortcut.</strong> Earlier, some beneficiaries used mutation entries to gain control over property even when disputes existed. The Court has closed this door.
              </li>
              <li>
                <strong>Disputes will move to Courts sooner.</strong> If family members do not agree, court involvement becomes unavoidable. Mutation offices will not act as decision-makers.
              </li>
              <li>
                <strong>Delays are likely in contested families.</strong> Even genuine beneficiaries may face long delays if objections are raised and litigation follows.
              </li>
            </ul>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What It Means for Wills and Estate Planning
            </h2>
            <p className="mb-4">
              The key lesson is simple: a Will alone does not guarantee a smooth transition.
            </p>
            <p className="mb-4">
              If a Will is likely to be challenged, families should be prepared for delays and legal proceedings. This is especially relevant in joint families, second marriages, or situations involving unequal distribution.
            </p>
            <p className="mb-4">
              Good estate planning now means:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Clear and well-drafted Wills,</li>
              <li>Open communication with family where possible,</li>
              <li>Considering alternatives like family trusts in sensitive situations.</li>
            </ul>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Conclusion
            </h2>
            <p className="mb-4">
              The Kerala High Court's decision brings fairness and clarity to mutation procedures. It protects family members from being sidelined and prevents misuse of property records. For individuals, the judgment underscores an important truth: a Will, even if registered, is not a guarantee of smooth succession. Where disagreements exist, court intervention is inevitable, and property records will reflect the court's decision, not private arrangements. This reminds property owners of an uncomfortable truth: succession planning does not end with signing a Will.
            </p>
            <p className="mb-4">
              This ruling pushes families to move beyond minimal planning and towards thoughtful, dispute-resistant succession planning that works not only on paper, but in practice.
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

export default KeralaCourtMutation;
