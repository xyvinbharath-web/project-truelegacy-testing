import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NomineesImg from "../../assets/img/resource/Nominees.webp";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";
import ShareIcon from "../../assets/icon/share-08.webp";
import JointWillImg from "../../assets/img/resource/Is-a-Joint-Will Right-for-You.webp";
import TrustMattersImg from "../../assets/img/resource/Why-Trust-Matters.webp";
import KeralaCourtImg from "../../assets/img/resource/What-the-Kerala-High-Court’s-Mutation.webp";
import LegalHeirshipImg from "../../assets/img/resource/Understanding-Legal-Heirship-Certificate.webp";

const NomineesAreNotLegalHeirs = () => {
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
  ].filter((a) => a.id !== 1);

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
                src={NomineesImg}
                alt="Nominees are NOT Your Legal Heirs!"
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
                Nominees are NOT Your Legal Heirs!
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
              Nominees vs Legal Heirs
            </h2>
            <p className="mb-4">
              It is common for individuals to list their loved ones as nominees, hoping they will inherit the assets in the event of their absence. However, many fail to understand how the transfer of assets to a nominee functions in the context of inheritance and succession.
            </p>
            <p className="mb-4">
              When it comes to the inheritance and succession of assets it is crucial to understand the difference between the legal heirs and nominees, as the distinction between the two has significant implications on the distribution of assets upon the death of a person.
            </p>
            <p className="mb-4">
              A person often invests in assets such as the stock market, bank savings, fixed deposits, and insurance policies. Many assume that by nominating a beneficiary for these assets, the issue of inheritance is resolved upon their death. In some cases, individuals create a Will to specify how their assets should be distributed after their passing, without addressing the existing nominations, believing that the rights of the nominees over the assets will remain unaffected. However, this can lead to conflicts between the nominees and legal heirs over the rightful ownership of the assets.
            </p>
            <p className="mb-4">
              This is because the primary role of a Nominee is to act as the trustee of the assets upon the death of the holder of the assets. They are entitled to temporarily hold the assets, which should then be distributed to the legal heirs or to the person(s) named in the Will. On the other hand, Legal Heirs are those recognized under relevant inheritance laws as entitled to inherit the deceased's assets, or the individuals named in the deceased's Will. Only Legal Heirs have the legal right to claim the assets of the deceased.
            </p>
            <p className="mb-4">
              For instance, A designates his brother B as the nominee for his insurance policies, intending to transfer ownership and rights to the assets to B after his death. However, if A leaves a Will instructing that all his assets, whether movable or immovable, be divided among his wife and children, he might believe that B, as the nominee, would naturally inherit the assets. In reality, since B is only the "nominee" of the assets, he is legally obligated to pass them on to A's wife and children, who are A's legal heirs according to A's Will. B will not have ownership rights over the assets nominated in his name by A.
            </p>
            <p className="mb-4">
              In the absence of a Will, the legal heirs and the distribution of assets will be determined according to the applicable succession laws in India, which vary depending on the religion of the deceased. For Hindus, the distribution will follow the Hindu Succession Act, 1956; for Christians, it will be governed by the Indian Succession Act, 1925; and for Muslims, it will be based on Muslim Personal Laws.
            </p>
            <p className="mb-4">
              In the above example, if A died without leaving any Will, the transfer of his assets will take place as per the succession laws in India based on the religion of A. B will have to share or transfer the assets to the legal heirs identified under A's relevant succession law.
            </p>
            <p className="mb-4">
              The rights of nominees and legal heirs regarding the distribution of shares has long been a topic of debate, even though the law clearly establishes the legal heir as the rightful owner of the property. The issue was also recently raised in the Supreme Court in the case of Shakti Yezdani & Anr. v. Jayanand Jayant Salgaonkar & Ors. The dispute in this case centred on the distribution of certain assets of Jayant Shivram Salgaonkar who had executed a Will making provisions for the devolution of his estates by nominating successors. The nominee to his shares / securities claimed that securities shall vest in their favour as per the provisions of the Companies Act. The Supreme Court finally ruled that being a nominee in a share/security does not entitle the person to inherit it by default and ruled that nomination provisions under the Companies Act and the Depositories Act cannot override succession laws under the Indian Succession Act, 1925, or the personal laws of succession applicable to the deceased shareholder. Hence, one's personal succession laws shall always prevail in the matter of distribution of assets.
            </p>
            <p className="mb-4">
              Since nominees do not hold ultimate legal ownership of the assets, it is crucial to understand the distinction between nominees and legal heirs for the proper distribution of assets. It is important to remember that nominees are not the same as legal heirs, and naming a nominee does not imply naming a legal heir.
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
                    <p className="font-[Urania] text-[#132F2C] text-[14px] leading-[20px] md:text-[14px] md:leading-[24px] font-normal">
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

export default NomineesAreNotLegalHeirs;
