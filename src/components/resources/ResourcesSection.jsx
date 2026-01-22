import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BlogMain from "../../assets/img/resource/Blog1 1.webp";
import Blog2 from "../../assets/img/resource/blog2.webp";
import Blog3 from "../../assets/img/resource/blog3.webp";
import Blog4 from "../../assets/img/resource/blog4.webp";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";
import ShareIcon from "../../assets/icon/share-08.webp";

const relatedTopics = [
  {
    id: 1,
    image: Blog2,
    title:
      "Understanding Legal Heirship Certificate and Succession Certificate",
  },
  {
    id: 2,
    image: Blog3,
    title:
      "Securing Your Legacy: How to Protect Your Assets in the Event of Your Unexpected Demise",
  },
  {
    id: 3,
    image: Blog4,
    title: "Muslim Succession Laws",
  },
];

const mainContentData = {
  intro1:
    "The succession laws prevailing in India often involve severe complexities surrounding inheritance and personal laws. It creates inequality and an unfair distribution of assets. The succession laws prevailing in India often involve severe complexities surrounding inheritance and personal laws. It creates inequality and an unfair distribution of assets among the legal heirs and may also result in the assets of the deceased reaching the wrong hands.",
  intro2:
    "Sadly, people who work round the clock to create wealth forget or remain unaware about the need to safeguard their hard-earned assets or the need for succession planning. To ensure that your chosen legal heirs inherit your assets upon your death, it is essential to prepare and register a Will declaring the pattern of succession. Will in India is defined under section 2(h) of the Indian Succession Act, 1925, as a legal document that outlines a person's wishes regarding the distribution of their assets and properties after their death. The document ensures clarity on how and to whom the deceased's assets are distributed, thereby avoiding conflicts among heirs. A Will provides an option for a person to exclude his nearest relations and bequeath his assets to any other person outside of his blood relations. A Will may also contain the details on who will administer and distribute the assets after the death of the person and is applicable to all communities in India except Muslims. among the legal heirs and may also result in the assets of the deceased reaching the wrong hands.",
  sections: [
    {
      title: "Parties to a Will",
      description: "The key components of a Will are as follows:",
      listItems: [
        "Declaration and introduction: While drafting a Will it is essential to provide the complete background of the testator, including his personal details. It is also necessary to declare that it is the last Will and testament to rule out contesting any other similar documents in future.",
        "Beneficiaries and their details: The details of all the individuals that the testator wishes to make as his legal heirs should be mentioned. A beneficiary of a Will can be a family member, friends, or charitable bodies.",
        "Assets description: A complete list of the assets of a testator must be noted down. This includes immovable assets such as land, building etc., movable assets such as cash, jewellery, automobiles, artifacts, books, etc, and intangible assets such as intellectual property rights. The testator could also include the pets they own in their asset list to ensure their well-being in the absence of testator.",
        "Bequest pattern: The pattern of distribution of assets must be clearly mentioned in order to provide clarity on who receives what.",
        "Appointment of Executor: An executor must be a person that the testator trusts to carry out the provisions of the Will of the testator after his passing. The executor ensures that the assets are distributed as per the instructions laid out in the Will.",
        "Witnesses and Signatures: The testator and the witnesses should sign the Will in the presence of each other. There should be two witnesses to attest the Will. The witnesses should be competent individuals, capable to testify before the court if needed, and should not be beneficiaries of the Will.",
        "Registration: The registration of a Will is not mandatory under the Act. But it is always advised to register the Will as it helps in proving the genuineness of the Will and prevents tampering, mutation, or destruction of the Will.",
      ],
    },
    {
      title: "Components of a Will",
      description: "The key components of a Will are as follows:",
      listItems: [
        "Declaration and introduction: While drafting a Will it is essential to provide the complete background of the testator, including his personal details. It is also necessary to declare that it is the last Will and testament to rule out contesting any other similar documents in future.",
        "Beneficiaries and their details: The details of all the individuals that the testator wishes to make as his legal heirs should be mentioned. A beneficiary of a Will can be a family member, friends, or charitable bodies.",
        "Assets description: A complete list of the assets of a testator must be noted down. This includes immovable assets such as land, building etc., movable assets such as cash, jewellery, automobiles, artifacts, books, etc, and intangible assets such as intellectual property rights. The testator could also include the pets they own in their asset list to ensure their well-being in the absence of testator.",
        "Bequest pattern: The pattern of distribution of assets must be clearly mentioned in order to provide clarity on who receives what.",
        "Appointment of Executor: An executor must be a person that the testator trusts to carry out the provisions of the Will of the testator after his passing. The executor ensures that the assets are distributed as per the instructions laid out in the Will.",
        "Witnesses and Signatures: The testator and the witnesses should sign the Will in the presence of each other. There should be two witnesses to attest the Will. The witnesses should be competent individuals, capable to testify before the court if needed, and should not be beneficiaries of the Will.",
        "Registration: The registration of a Will is not mandatory under the Act. But it is always advised to register the Will as it helps in proving the genuineness of the Will and prevents tampering, mutation, or destruction of the Will.",
      ],
    },
    {
      title: "Points to Keep in Mind",
      description:
        "Despite its importance, drafting a Will can be a complex process, especially when dealing with intricate family dynamics or substantial assets and it is crucial to keep in mind the following:",
      listItems: [
        "Proper legal advice: Seeking legal advice from a qualified professional can help to ensure that the Will is drafted in accordance with the relevant laws and addresses all the potential risks and contingencies.",
        "Nomination of guardians: In case the testator has a minor child, they should nominate a guardian for the child to take care of them in the event of the testator passing.",
        "Will updation: In the event of a significant life event such as marriage, divorce, purchase or disposal of an asset, birth or death of children or grandchildren etc.",
      ],
    },
  ],
};

const ResourcesSection = () => {
  const location = useLocation();
  const { id } = useParams();

  const selectedId = Number(id) || 1;

  const fallbackById = {
    1: { image: BlogMain },
    2: { image: Blog2 },
    3: { image: Blog3 },
    4: { image: Blog4 },
  };

  const state = location.state || {};
  const heroTitle = state.title || "Everything you need to know about wills";
  const heroImage = state.image || fallbackById[selectedId]?.image || BlogMain;
  const heroMeta = state.meta || "Blog • 3 min read";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Simple on-load entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
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
      src={heroImage}
      alt={heroTitle}
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
      {heroTitle}
    </h1>
  </div>
</div>


        {/* ================= MAIN ARTICLE CONTENT ================= */}
        <article className={`max-w-[820px] mx-auto text-[#132F2C] font-[Urania] ${
          isVisible ? "animate-fade-in" : ""
        }`}
        style={{ animationDelay: '600ms' }}>
          <p className="text-[24px] leading-[33px] font-medium mb-6">
            {mainContentData.intro1}
          </p>

          <p className="text-[16px] leading-[26px] font-normal mb-6">
            {mainContentData.intro2}
          </p>

          {mainContentData.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-[24px] leading-[24px] font-medium mb-3">
                {section.title}
              </h2>

              <p className="text-[18px] leading-[18px] font-medium mb-3">
                {section.description}
              </p>

              <ul className="list-disc list-inside space-y-2 text-[16px] leading-[26px] font-normal">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        {/* ================= RELATED ARTICLES SECTION ================= */}
        <section className="bg-white mt-16">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10">
            <h3 className="font-[Urania] text-[#132F2C] text-[28px] md:text-[32px] font-semibold mb-8">
              Related articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTopics.map((topic) => (
                <article
                  key={topic.id}
                  className="bg-white rounded-md overflow-hidden"
                >
                  <div className="w-full h-[180px] md:h-[200px] overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="pt-4">
                    <p className="font-[Urania] text-[14px] leading-[14px] text-[#868989] mb-2">
                      Blog • Published: 01 Oct 2024
                    </p>

                    <h4 className="font-[Urania] text-[#132F2C] text-[18px] md:text-[20px] font-medium mb-2">
                      {topic.title}
                    </h4>

                    <p className="font-[Urania] text-[14px] leading-[20px] text-[#868989] max-w-[320px]">
                      The succession laws prevailing in India often involve severe complexities
                      surrounding inheritance and personal laws. It creates inequality and an
                      unfair distribution of assets.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ResourcesSection;
