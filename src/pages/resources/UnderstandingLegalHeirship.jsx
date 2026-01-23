import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LegalHeirshipImg from "../../assets/img/resource/Understanding-Legal-Heirship-Certificate.webp";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";
import ShareIcon from "../../assets/icon/share-08.webp";
import NomineesImg from "../../assets/img/resource/Nominees.webp";
import JointWillImg from "../../assets/img/resource/Is-a-Joint-Will Right-for-You.webp";
import TrustMattersImg from "../../assets/img/resource/Why-Trust-Matters.webp";

const UnderstandingLegalHeirship = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Related articles data
  const relatedArticles = [
    {
      id: 1,
      image: NomineesImg,
      title: "Nominees are NOT Your Legal Heirs!",
    },
    {
      id: 2,
      image: JointWillImg,
      title: "Is a Joint Will Right for You?",
    },
    {
      id: 3,
      image: TrustMattersImg,
      title: 'Why "Trust" Matters When Creating a Private Trust for Succession Planning',
    },
  ];

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
          <div className="relative mb-20 md:mb-24">

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
                src={LegalHeirshipImg}
                alt="Understanding Legal Heirship Certificate and Succession Certificate"
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
                Understanding Legal Heirship Certificate and Succession Certificate
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div className="bg-white px-4 md:px-16 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[#132F2C]/80 hover:text-[#132F2C] transition-colors font-[Urania] text-sm underline"
        >
          ← Back to Resources
        </button>
      </div>

      {/* Content */}
      <main className="flex-grow bg-white text-black">
        <div
          ref={sectionRef}
          className={`px-4 md:px-16 py-12 md:py-16 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="prose prose-lg max-w-none font-[Urania] text-[#132F2C] leading-[28px] md:leading-[32px]">
            <p className="mb-4">
              Without proper documentation, the process of inheriting property and assets after the death of a loved one can be complex and intimidating. Legal heirship and succession certificates play a crucial role in establishing one's entitlement to the assets of a deceased person. These certificates are crucial in recognizing rightful heirs and empowering successors.
            </p>
            <p className="mb-4">
              The Indian Succession Act, 1925, establishes the legal heirship and succession certificates for the purpose of transferring the assets of a deceased person, whether they are movable or immovable, to the concerned legal heirs.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What is a legal heirship certificate?
            </h2>
            <p className="mb-4">
              A legal heirship certificate is a document issued to identify the surviving family members or heirs of a deceased person. An heirship certificate is used to claim the assets and other resources of a deceased person.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              What is a succession certificate?
            </h2>
            <p className="mb-4">
              A succession certificate is a document granted to the heirs of a deceased person who dies without a Will, providing them the rights to inherit the assets and other resources.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Key differences: Legal Heirship Certificate Vs Succession Certificate
            </h2>
            <p className="mb-4">
              The main difference between these two certificates is that the heirship certificate covers both movable and immovable properties and utilities, whereas a succession certificate is limited to movable assets. The other notable differences between inheritance and succession certificates are given below:
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              How to apply for a succession or heirship certificate?
            </h2>
            <p className="mb-4">
              Succession certificates are issued by the court. Hence, a petition must be written and filed with the respective district court along with the succession certificate form where the deceased person resided at the time of death to obtain the succession certificate.
            </p>
            <p className="mb-4">
              Meanwhile, to obtain an heirship certificate, you can visit the nearest district court and apply for the same. For example, to obtain a legal heirship certificate in Kerala, one must approach the respective authority in Kerala. All procedures must be followed when submitting in order to prevent issues later on.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Which is easier to get?
            </h2>
            <p className="mb-4">
              A legal heirship certificate can be applied for by spouses/parents/children of the deceased as soon as the death certificate is received.
            </p>
            <p className="mb-4">
              The person applying for the legal heirship certificate adds the names of other heirs to be considered as the legal heirs of the deceased. The certificate mentions mere ownership of the property and not the percentage share of the assets entitled by the legal heirs.
            </p>
            <p className="mb-4">
              It has a narrower purpose when compared to the succession certificate and is much easier to get. The ambit of the succession deed is wide, with extensive jurisdiction over the estate of the deceased.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              Conclusion
            </h2>
            <p className="mb-4">
              Losing a loved one can be difficult, and dealing with the legal process can be exhausting. However, it is crucial to protect the assets and resources of the deceased and ensure they are transferred in accordance with the will or, in its absence, to the rightful heir.
            </p>
            <p className="mb-4">
              Before applying, it's crucial to check whether there is a will or not. Applying for a succession certificate when there is a Will can be a waste of time and money.
            </p>
            <p className="mb-4">
              As mentioned above, an heirship certificate is a quicker and low-cost document that can be accessed by approaching the local authorities to identify the rightful heir.
            </p>
            <p className="mb-4">
              On the other hand, a succession certificate is a court-issued document, which can be time-consuming and expensive. A succession certificate is only necessary when there is no valid will or nominee and is primarily required to claim movable assets (like bank deposits or investments).
            </p>
            <p className="mb-4">
              Understanding both the certificates and ensuring the status of the will is crucial while applying for either of these certificates.
            </p>
            
            <h2 className="font-[Urania] font-bold text-[#132F2C] text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] mb-4">
              FAQs
            </h2>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              Who is a legal heir?
            </h3>
            <p className="mb-4">
              Legal heir is a direct descendant of the deceased person who is legally entitled to inherit the assets and resources of the deceased individual.
            </p>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              What is the alternative to a succession certificate?
            </h3>
            <p className="mb-4">
              An alternative to a succession certificate is a legal heir certificate, which establishes the rightful successors of a deceased person's property, while a succession certificate is primarily used for managing debts and securities.
            </p>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              Can we get a legal heir certificate online?
            </h3>
            <p className="mb-4">
              Yes, you can get a legal heir certificate both online and offline. The legal heir certificate application is submitted online through the district court e-portal or Akshaya centres.
            </p>
            
            <h3 className="font-[Urania] font-bold text-[#132F2C] text-[20px] leading-[24px] md:text-[22px] md:leading-[26px] mb-3">
              How do I download a succession certificate?
            </h3>
            <p className="mb-4">
              Unlike a legal heir certificate, you cannot obtain a succession certificate online. You must file a petition along with the necessary documents with the concerned district court to get issued the succession certificate from the courts.
            </p>
          </div>
        </div>
      </main>

      {/* ================= RELATED ARTICLES SECTION ================= */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16 py-16">
          <h3 className="font-[Urania] text-[#132F2C] text-[28px] md:text-[32px] font-semibold mb-8">
            Related articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => navigate(`/resources/${article.id}`)}
              >
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-[Urania] text-[#132F2C] text-[16px] leading-[22px] font-medium">
                    {article.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gap before footer */}
      <div className="h-16 md:h-24 bg-white" />

      <Footer />
    </div>
  );
};

export default UnderstandingLegalHeirship;
