import { useLocation, useParams } from "react-router-dom";
import BlogMain from "../../assets/img/resource/Blog1 1.webp";
import Blog2 from "../../assets/img/resource/blog2.webp";
import Blog3 from "../../assets/img/resource/blog3.webp";
import Blog4 from "../../assets/img/resource/blog4.webp";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";

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
    "The succession laws prevailing in India often involve severe complexities surrounding inheritance and personal laws. It creates inequality and an unfair distribution of assets.",
  intro2:
    "Sadly, people who work round the clock to create wealth forget or remain unaware about the need to safeguard their hard-earned assets or the need for succession planning. To ensure that your chosen legal heirs inherit your assets upon your death, it is essential to prepare and register a Will declaring the pattern of succession.",
  sections: [
    {
      title: "Parties to a Will",
      description: "The key components of a Will are as follows:",
      listItems: [
        "Declaration and introduction: While drafting a Will it is essential to provide the complete background of the testator, including his personal details.",
        "Beneficiaries and their details: The details of all the individuals that the testator wishes to make as his legal heirs should be mentioned.",
        "Assets description: A complete list of the assets of a testator must be noted down, including immovable and movable assets.",
        "Bequest pattern: The pattern of distribution of assets must be clearly mentioned in order to provide clarity on who receives what.",
        "Appointment of Executor: An executor must be a person that the testator trusts to carry out the provisions of the Will of the testator after his passing.",
        "Witnesses and Signatures: The testator and the witnesses should sign the Will in the presence of each other.",
        "Registration: The registration of a Will is not mandatory under the Act but is always advised to prove genuineness and prevent tampering.",
      ],
    },
    {
      title: "Components of a Will",
      description: "The key components of a Will are as follows:",
      listItems: [
        "Declaration and introduction: While drafting a Will it is essential to provide the complete background of the testator, including his personal details.",
        "Beneficiaries and their details: The details of all the individuals that the testator wishes to make as his legal heirs should be mentioned.",
        "Assets description: A complete list of the assets of a testator must be noted down, including immovable and movable assets.",
        "Bequest pattern: The pattern of distribution of assets must be clearly mentioned in order to provide clarity on who receives what.",
        "Appointment of Executor: An executor must be a person that the testator trusts to carry out the provisions of the Will of the testator after his passing.",
        "Witnesses and Signatures: The testator and the witnesses should sign the Will in the presence of each other.",
        "Registration: The registration of a Will is not mandatory under the Act but is always advised to prove genuineness and prevent tampering.",
      ],
    },
    {
      title: "Points to Keep in Mind",
      description:
        "Despite its importance, drafting a Will can be a complex process, especially when dealing with intricate family dynamics or substantial assets.",
      listItems: [
        "Proper legal advice: Seeking legal advice from a qualified professional can help to ensure that the Will is drafted in accordance with the relevant laws.",
        "Nomination of guardians: In case the testator has a minor child, they should nominate a guardian for the child.",
        "Will updation: In the event of a significant life event such as marriage, divorce, or purchase or disposal of an asset, the Will should be reviewed and updated.",
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

  return (
    <section className="bg-[#F6FFFF] py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">

        {/* ================= HERO SECTION (CORRECT OVERLAP) ================= */}
<div className="relative mb-14">

  {/* Yellow card */}
 <div
  className="
    absolute
    bg-[#F4D57E]
    text-[#132F2C]
    rounded-[6px]
    w-[566px] h-[243px]
    top-[117px]
    left-[-175px]
    px-[69px] py-[66px]
    z-20
  "
>
  {/* Meta */}
  <p
    className="
      font-[Urania]
      font-normal
      text-[14px]
      leading-[14px]
      mb-[16px]
    "
  >
   Blog • 2 min reads • Share
  </p>
    <h1 className="font-[Urania] font-bold text-[46px] leading-[46px]">
      {heroTitle}
    </h1>
  </div>

  {/* Image wrapper aligned further to the right */}
  <div className="relative w-[968px] h-[540px] rounded-xl overflow-hidden ml-auto mr-[-180px]">
    <img
      src={heroImage}
      alt={heroTitle}
      className="w-full h-full object-cover"
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
</div>


        {/* ================= MAIN ARTICLE CONTENT ================= */}
        <article className="max-w-[820px] mx-auto text-[#132F2C] font-[Urania]">
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

              <ol className="list-decimal list-inside space-y-2 text-[16px] leading-[26px] font-normal">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
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
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="pt-4">
                    <p className="font-[Urania] text-[14px] leading-[14px] text-[#868989] mb-2">
                      Blog  b Published: 01 Oct 2024
                    </p>

                    <h4 className="font-[Urania] text-[#132F2C] text-[18px] md:text-[20px] font-medium mb-2">
                      Everything You Need to Know About Wills
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
