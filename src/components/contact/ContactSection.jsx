import { useEffect, useRef, useState } from "react";
import { createEnquiry } from "../../api/enquiryApi";
import ContactImage from "../../assets/img/contac_form 1.webp";
import MailIcon from "../../assets/icon/mail-edit-01.webp";
import PhoneIcon from "../../assets/icon/calling.webp";
import LocationIcon from "../../assets/icon/location-03.webp";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.target;

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
      type: "contact",
      source: "website",
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      await createEnquiry(payload);
      setSuccessMessage("Thank you! Your message has been sent.");
      form.reset();
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
      // Optional: log real error for debugging
      // console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative pt-6 md:pt-10 pb-34 md:pb-35 bg-[#ffffff] contact-section ${
        isVisible ? "contact-section-visible" : ""
      }`}
    >
      <div
        className="absolute top-122 left-1/2 w-screen h-[870px] -translate-x-1/2 hidden md:block"
        style={{
          background: "#F6FFFF",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Top heading */}
        <div className="text-center mb-10 md:mb-12 contact-heading max-w-[1600px] mx-auto">
          <h2 className="font-[Urania] text-[#132F2C] font-bold
                         text-[32px] md:text-[36px] leading-[32px] md:leading-[40px] mb-3">
            Let's Connect
          </h2>
          <p className="font-[Urania] text-[#132F2C]
                         text-[16px] md:text-[16px]
                         leading-[22px] md:leading-[22px]
                         max-w-[260px] mx-auto md:max-w-none">
            We look forward to learning about your financial goals.
          </p>
        </div>

        {/* Contact info row */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_0.8fr_1.1fr] gap-4 md:gap-0 mb-8 md:mb-12 contact-info md:px-0">
          {/* Email */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-3 contact-item">
            <div className="w-[67px] h-[67px] md:w-[79px] md:h-[79px] rounded-full bg-[#F4D57E] flex-none flex items-center justify-center">
              <img src={MailIcon} alt="Email" className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
            </div>
            <div className="text-center md:text-left mt-1 md:mt-0">
              <p className="font-[Urania] text-[14px] leading-[16px] text-[#868989] mb-1">
                Email
              </p>
              <p className="font-[Urania] text-[16px] md:text-[16px] leading-[28px] text-[#132F2C]">
                info@truelegacy.in
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 contact-item">
            <div className="w-[67px] h-[67px] md:w-[79px] md:h-[79px] rounded-full bg-[#F4D57E] flex-none flex items-center justify-center">
              <img src={PhoneIcon} alt="Phone" className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
            </div>
            <div className="text-center md:text-left mt-1 md:mt-0">
              <p className="font-[Urania] text-[14px] leading-[16px] text-[#868989] mb-1">
                Phone
              </p>
              <p className="font-[Urania] text-[16px] md:text-[18px] leading-[28px] text-[#132F2C]">
                +91 7592 912 300 (IN)
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 contact-item">
            <div className="w-[67px] h-[67px] md:w-[79px] md:h-[79px] rounded-full bg-[#F4D57E] flex-none flex items-center justify-center">
              <img src={LocationIcon} alt="Location" className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
            </div>
            <div className="text-center md:text-left mt-1 md:mt-0">
              <p className="font-[Urania] text-[14px] leading-[16px] text-[#868989] mb-2 mdmb-3">
                Address
              </p>
              <p className="font-[Urania] text-[14px] md:text-[18px] leading-[24px] md:leading-[18px] text-[#132F2C] max-w-[220px] md:max-w-none">
                Wavxseal Fintech Private Limited, 2nd Floor, Imperial Amity, NH Bypass,
                Vyttila, Kochi, Kerala – 682019, India
              </p>
            </div>
          </div>
        </div>

        {/* Main contact card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm contact-form max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)]">
            {/* Form side */}
            <div className="bg-[#132F2C] text-white px-6 md:px-10 py-8 md:py-10">
              <h3 className="font-[Urania] font-bold text-white
                             text-[28px] md:text-[36px] lg:text-[42px]
                             leading-[34px] md:leading-[42px] lg:leading-[49px] mb-3">
                Get in Touch
              </h3>
              <p className="font-[Urania] font-normal
                             text-[14px] md:text-[18px]
                             leading-[20px] md:leading-[24px]
                             text-[#5A7371] mb-8 max-w-md">
                Have a question or feedback? Fill out the form below, and we'll respond promptly!
              </p>

              {successMessage && (
                <p className="mb-4 text-sm text-green-300">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="mb-4 text-sm text-red-300">{errorMessage}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-[Urania] text-[16px] leading-[22px] mb-1 text-white">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full h-11 rounded-md bg-[#213D3A] border border-[#2B4A46] px-3
                               text-[16px] leading-[22px] font-[Urania] text-white
                               placeholder:text-[#5A7371] focus:outline-none focus:ring-1 focus:ring-[#F4D57E]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block font-[Urania] text-[16px] leading-[22px] mb-1 text-white">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full h-11 rounded-md bg-[#213D3A] border border-[#2B4A46] px-3
                               text-[16px] leading-[22px] font-[Urania] text-white
                               placeholder:text-[#5A7371] focus:outline-none focus:ring-1 focus:ring-[#F4D57E]"
                    placeholder="john@test.com"
                  />
                </div>

                <div>
                  <label className="block font-[Urania] text-[16px] leading-[22px] mb-1 text-white">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full h-11 rounded-md bg-[#213D3A] border border-[#2B4A46] px-3
                               text-[16px] leading-[22px] font-[Urania] text-white
                               placeholder:text-[#5A7371] focus:outline-none focus:ring-1 focus:ring-[#F4D57E]"
                    placeholder="+91 123456789"
                  />
                </div>

                <div>
                  <label className="block font-[Urania] text-[16px] leading-[22px] mb-1 text-white">
                    Additional Notes 
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full rounded-md bg-[#1F3C39] border border-[#2B4A46] px-3 py-2
                               text-[16px] leading-[22px] font-[Urania] text-white
                               placeholder:text-[#5A7371] resize-none focus:outline-none focus:ring-1 focus:ring-[#F4D57E]"
                    placeholder="Please provide any additional details about your request..."
                  />
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-[180px] h-11 rounded-full bg-[#FFFFFF]
                               text-[#132F2C] font-[Urania] text-[16px] leading-[20px] font-medium
                               flex items-center justify-center hover:bg-[#f7e291]
                               disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

            {/* Image side (hidden on mobile) */}
            <div className="relative hidden md:block md:h-full">
              <img
                src={ContactImage}
                alt="Contact illustration"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#132F2C]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
