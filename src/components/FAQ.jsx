import { useState, useRef } from "react";
import faqFrameImage from "../assets/img/Framefaq.webp";
import iconWrap from "../assets/icon/Icon wrap.webp";
import iconMinus from "../assets/icon/Icon-.webp";

const faqs = {
  will: [
    {
      question: "What is the concept of Will?",
      answer:
        "A Will is a legal document where a person (the testator) declares how their assets should be distributed after their death. It ensures that their wishes are followed and minimises disputes among heirs.",
    },
    {
      question: "How does inheritance work?",
      answer:
        "Inheritance is based on whether there is a Will. If there is one, assets are passed on as per its terms. Without a Will, assets are distributed among legal heirs based on personal succession laws tied to religion.",
    },
    {
      question: "What is the validity of a Will in India?",
      answer:
        "A Will is valid if the person writing is of sound mind, signs voluntarily, and is witnessed by two people. Registration is not mandatory but adds authenticity.",
    },
    {
      question: "Is a will important during Estate Planning?",
      answer:
        "Yes, a Will ensures your assets are protected and shared as per your wishes while reducing confusion among heirs.",
    },
    {
      question: "Can anyone challenge a valid Will?",
      answer:
        "Yes, but only on legal grounds like fraud, coercion, or mental incapacity.",
    },
  ],
  trust: [
    {
      question: "What is meant by Trust Management?",
      answer:
        "Trust Management involves handling financial accounts, tax filings, legal compliance and smooth operation of the assets placed in a Trust.",
    },
    {
      question: "Do I need a Trust?",
      answer:
        "Yes, a trust is necessary to safeguard and expertly manage your assets, preventing tax issues and family conflicts while providing them with proper care throughout your life.",
    },
    {
      question: "How do you ensure the Trust Deed is effective?",
      answer:
        "A Trust Deed is effective when it is clear, legally compliant and specifies your goals and circumstances to prevent future complications. We draft precise and legally compliant Trust Deeds tailored to your wishes.",
    },
    {
      question: "What is a Trusteeship?",
      answer:
        "Trusteeship is the responsibility of the Trust Management to execute the terms of the Trust Deed. Trustees act in the best interest of the Trust and beneficiaries, ensuring proper administration and legal compliance.",
    },
    {
      question: "How does Trust work?",
      answer:
        "A Trust works by managing your assets for the benefit of your chosen beneficiaries according to the terms mentioned in your Trust Deed. A Trustee ensures that all the terms are met to ensure smooth Trust Management.",
    },
    {
      question: "What is the role of a Trustee?",
      answer:
        "The role of a Trustee is to manage the trust assets responsibly, make decisions as per the trust terms, maintain transparency, file taxes, and protect the interests of the beneficiaries.",
    },
  ],
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("will");
  const [openQuestion, setOpenQuestion] = useState(0);

  const currentFaqs = activeTab === "will" ? faqs.will : faqs.trust;

  return (
    <section className="w-full bg-[#F6FFFF] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1300px] mx-auto px-4 md:px-9">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 items-start relative">
          {/* LEFT BLOCK (desktop only) */}
          <div className="hidden lg:block w-[420px] relative">
            <h1 className="font-[Urania] font-bold text-[42px] leading-[49px] text-[#132F2C] mb-0">
              FAQ'S
            </h1>

            {/* IMAGE */}
            <div className="relative overflow-hidden -mt-4">
              <img
                src={faqFrameImage}
                alt="FAQ visual"
                className="w-full h-[550px] object-cover rounded-[10px]"
              />
            </div>

            {/* OVERLAY CARD (desktop) */}
            <div className="absolute right-[190px] bottom-[32px] w-[280px] rounded-[10px] bg-white/75 backdrop-blur shadow-[0_20px_40px_rgba(10,47,36,0.18)] px-6 py-5">
              <h3 className="font-[Urania] font-medium text-[24px] leading-[32px] text-[#132F2C] mb-3">
                Still wondering about something?
              </h3>
              <p className="font-[Urania] text-[16px] leading-[25px] text-[#132F2C]">
                We ensure your family's future is handled with clarity and care. Explore our
                FAQs to understand the process better.
              </p>
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="flex-1 w-full lg:max-w-[700px] mt-6 lg:mt-0">
            {/* MOBILE HEADING */}
            <h1 className="lg:hidden font-[Urania] font-bold text-[32px] leading-[36px] text-[#132F2C] mb-4">
              FAQ'S
            </h1>

            {/* TABS */}
            <div className="flex gap-8 border-b border-[#E1E6E4] mb-6">
              <button
                onClick={() => setActiveTab("will")}
                className={`pb-2 font-[Urania] text-[18px] md:text-[20px] font-bold border-b-2 ${
                  activeTab === "will"
                    ? "border-[#F4D57E] text-[#F4D57E]"
                    : "border-transparent text-[#717171]"
                }`}
              >
                Will and Inheritance
              </button>

              <button
                onClick={() => setActiveTab("trust")}
                className={`pb-2 font-[Urania] text-[18px] md:text-[20px] border-b-2 ${
                  activeTab === "trust"
                    ? "border-[#F4D57E] text-[#F4D57E] font-bold"
                    : "border-transparent text-[#717171]"
                }`}
              >
                Trust Formation &amp; Management
              </button>
            </div>

            {/* FAQ LIST */}
            <div className="space-y-2">
              {currentFaqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  openQuestion={openQuestion}
                  setOpenQuestion={setOpenQuestion}
                />
              ))}
            </div>

            {/* MOBILE IMAGE + OVERLAY CARD (bottom) */}
            <div className="mt-10 lg:hidden relative max-w-[400px] mx-auto">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src={faqFrameImage}
                  alt="FAQ visual"
                  className="w-full h-[260px] object-cover"
                />
              </div>

              <div className="absolute left-1/3 -translate-x-1/2 bottom-[-140px] w-[250px] rounded-[10px] bg-white/80 backdrop-blur shadow-[0_20px_40px_rgba(10,47,36,0.18)] px-5 py-4">
                <h3 className="font-[Urania] font-medium text-[24px] leading-[28px] text-[#132F2C] mb-2">
                  Still wondering about something?
                </h3>
                <p className="font-[Urania] text-[16px] leading-[25px] text-[#132F2C]">
                  We ensure your family's future is handled with clarity and care. Explore our
                  FAQs to understand the process better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function FAQItem({ faq, index, openQuestion, setOpenQuestion }) {
  const isOpen = openQuestion === index;

  return (
    <div className="border-b border-[#E1E6E4] bg-transparent">
      <button
        onClick={() => setOpenQuestion(isOpen ? null : index)}
        className="w-full px-3 lg:px-4 py-3 flex justify-between items-center text-left hover:bg-[#F5FAF7] transition-colors"
      >
        <span className="font-[Urania] text-[#132F2C] text-[18px]">
          {faq.question}
        </span>
        <span className="ml-3 flex-shrink-0">
          <span className="relative inline-flex items-center justify-center w-6 h-6">
            <img
              src={isOpen ? iconMinus : iconWrap}
              alt={isOpen ? "Collapse" : "Expand"}
              className="w-full h-full"
            />
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="px-3 lg:px-4 pb-4 text-[#4C6B63] text-[15px] leading-[22px]">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default FAQ;
