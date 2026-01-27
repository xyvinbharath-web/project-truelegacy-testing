import { useState, useEffect, useRef, lazy, Suspense } from "react";
import willframe1 from "../../assets/img/service/willframe1.webp";
import willframe2 from "../../assets/img/service/willframe2.webp";
import willframe3 from "../../assets/img/service/willframe3.webp";
import willframe4 from "../../assets/img/service/willframe4.webp";
import willframe5 from "../../assets/img/service/willframe5.webp";
import trustframe1 from "../../assets/img/service/trustframe1.webp";
import trustframe2 from "../../assets/img/service/trustframe2.webp";
import trustframe3 from "../../assets/img/service/trustframe3.webp";
import trustframe4 from "../../assets/img/service/trustframe4.webp";
import trustframe5 from "../../assets/img/service/trustframe5.webp";
import CardBackground from "../../assets/img/service/Card.webp";
const ServiceModal = lazy(() => import("./ServiceModal"));

const willServices = [
  {
    key: "will-drafting",
    title: "Will Drafting",
    subtitle: "Don't Let Your Legacy Fall Into The Wrong Hands.",
    description:
      "You've worked hard to build a life for your loved ones. But without a Will, your assets could end up in the wrong hands or worse. We help you create a clear, legally binding Will that reflects your wishes.",
    cta: "Draft a Will",
    image: willframe1,
  },
  {
    key: "estate-planning",
    title: "Estate Planning",
    subtitle: "Protect What You Have Built",
    description:
      "What you have built cannot be lost to disputes, taxes and legal complications. A solid estate plan ensures your assets are protected as well as your loved ones. We assist you in making one.",
    cta: "Start Estate Planning",
    image: willframe2,
  },
  {
    key: "cross-border-wills",
    title: "Cross-Border Wills",
    subtitle: "One World, Many Laws. Plan Accordingly",
    description:
      "A single Will isn’t enough when you have assets, investments or businesses across countries. Our experts ensure tax and legal compliance in every jurisdiction.",
    cta: "Make Cross-Border Wills",
    image: willframe3,
  },
  {
    key: "executorship-services",
    title: "Executorship Services",
    subtitle: "Choose a Trusted Executor. A Wrong Executor, A Lost Legacy.",
    description:
      "When your own blood turns against you, trusting becomes hard. We don’t just draft your Will—we make sure it's carried out exactly as you intended, no matter who challenges it.",
    cta: "Appoint an Executor",
    image: willframe4,
  },
  {
    key: "will-review-update",
    title: "Will Review & Update",
    subtitle: "Keep your Will current with life changes.",
    description:
      "Family, assets, even law changes. An outdated Will may fall under the new laws as well as your life circumstances. We monitor and update your Will with current changes in law and life.",
    cta: "Review Your Wills",
    image: willframe5,
  },
];

const trustServices = [
  {
    key: "trust-deed-drafting",
    title: "Trust Deed Drafting",
    subtitle: "Lay the Foundation for Generational Stewardship.",
    description:
      "Custom trust deeds that reflect your family's governance and succession goals, drafted to stand the test of time and scrutiny.",
    cta: "Draft Trust Deed",
    image: trustframe1,
  },
  {
    key: "trusteeship",
    title: "Trusteeship",
    subtitle: "Independent Trustees. Balanced Decisions.",
    description:
      "Professional trusteeship services to steward assets for future generations while maintaining neutrality and discipline.",
    cta: "Explore Trusteeship",
    image: trustframe2,
  },
  {
    key: "trust-administration",
    title: "Trust Administration",
    subtitle: "Smooth Day-to-Day Trust Management.",
    description:
      "End-to-end administration of trusts, from records to distributions, compliance and reporting.",
    cta: "Manage a Trust",
    image: trustframe3,
  },
  {
    key: "protector-services",
    title: "Protector Services",
    subtitle: "Add an Extra Layer of Oversight.",
    description:
      "Independent protector services to oversee trustees, prevent misuse and ensure your intent is honoured.",
    cta: "Add a Protector",
    image: trustframe4,
  },
  {
    key: "trust-review-amendment",
    title: "Trust Review & Amendment",
    subtitle: "Keep Your Trusts Relevant.",
    description:
      "Review existing trusts and implement amendments as family needs, laws and asset structures evolve.",
    cta: "Review My Trust",
    image: trustframe5,
  },
];

// Form fields configuration for different service types
const formFields = {
  default: [
    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Enter your full name" },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "Enter your email address" },
    { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "Enter your phone number" },
    { name: "message", label: "Additional Details", type: "textarea", required: false, placeholder: "Tell us more about your requirements...", rows: 3 }
  ]
};

const OurServices = ({ initialTab = "will" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tabKey, setTabKey] = useState(initialTab);
  const sectionRef = useRef(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // On-load entrance animation (no scroll)
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Trigger tab animation
  useEffect(() => {
    setTabKey(activeTab);
  }, [activeTab]);

  // Idle-time prefetch of the ServiceModal chunk so the first open is instant
  useEffect(() => {
    const prefetch = () => {
      import("./ServiceModal");
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2000 });
      return () => window.cancelIdleCallback && window.cancelIdleCallback(id);
    } else {
      const t = setTimeout(prefetch, 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const services = activeTab === "trust" ? trustServices : willServices;

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section
      ref={sectionRef}
      className={`py-16 pb-8 px-4 sm:px-6 lg:px-10 bg-[#E5F3EF] services-section ${
        isVisible ? "services-section-visible" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto -mt-4 md:mt-0">
        

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-15 services-tabs-wrap">
          <div className="inline-flex rounded-full bg-white px-3 py-1.5 shadow-[0_8px_24px_rgba(10,47,36,0.08)] border border-[#132F2C]/500 services-tabs min-w-[350px] md:min-w-[500px] lg:min-w-[600px]">
            <button
              className={`flex-1 px-4 py-1.5 rounded-full text-[14px] md:text-[18px] font-[Urania] services-tab transition-all duration-500 ease-out md:flex-1 md:py-3 ${
                activeTab === "will"
                  ? "bg-[#132F2C] text-white services-tab-active"
                  : "text-[#4C6B63]"
              }`}
              onClick={() => setActiveTab("will")}
            >
              <span className="md:inline block text-center">Will and</span>
              <span className="md:inline block text-center"> Inheritance</span>
            </button>
            <button
              className={`flex-1 px-1 py-1.5 rounded-full font-[Urania] text-[14px] md:text-[18px] text-[#132F2C] services-tab transition-all duration-500 ease-out md:flex-2 md:py-4 ${
                activeTab === "trust"
                  ? "bg-[#132F2C] text-white services-tab-active"
                  : "text-[#4C6B63]"
              }`}
              onClick={() => setActiveTab("trust")}
            >
              <span className="md:inline block text-center">Trust Formation</span>
              <span className="md:inline block text-center"> & Management</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          key={tabKey}
          className="grid gap-4 sm:gap-6 lg:gap-4 mt-1 mb-9 sm:grid-cols-2 lg:grid-cols-3 justify-items-center services-cards-grid services-tab-enter -mx-4 sm:mx-0 sm:mt-5 relative z-10"
        >
          {services.map((service) => (
            <div
              key={service.key}
              className="
                relative
                w-full
                max-w-[367px]
                h-[429px]
                sm:max-w-[360px]
                sm:h-[440px]
                lg:max-w-[414px]
                lg:h-[528px]
                rounded-[6px]
                overflow-hidden
                service-card

                /* ✅ DESKTOP FIX */
                lg:!w-[414px]
                lg:!max-w-[414px]
              "
              style={{
                width: 'calc(100vw - 16px)',
                maxWidth: 'calc(100vw - 16px)',
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              
              {/* Transparent inner card */}
              <div className="relative flex items-end h-full px-4 pb-4 lg:px-0 lg:pb-0">
                <div
                  className="w-full max-w-[374px] min-h-[327px] mx-auto rounded-[6px]
                  border border-white/20
                  px-5 pt-5 pb-5 text-white flex flex-col justify-between service-card-inner
                  lg:absolute lg:max-w-[374px] lg:min-h-[327px] lg:top-[181px] lg:left-[20px]"
                  style={{
                    width: 'calc(100% - 32px)',
                    maxWidth: 'calc(100% - 32px)',
                    backgroundImage: `url(${CardBackground})`,
                    backgroundSize: "120% 130%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: 'rgba(19, 47, 44, 0.71)',
                    backdropFilter: 'blur(1px)'
                  }}
                >

                  <div>
                    <h3 className="font-[Urania] text-[24px] leading-[24px] font-bold mb-2 service-card-title">
                      {service.title}
                    </h3>

                    <p className="font-[Urania] text-[16px] leading-[20px] font-medium mb-3 service-card-subtitle">
                      {service.subtitle}
                    </p>

                    <p className="font-[Urania] text-[16px] leading-[22px] font-regular service-card-body">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <button 
                      onClick={() => openModal(service)}
                      className="rounded-[66px] bg-[#F4D57E] w-[280px] h-[52px] font-[Urania] text-[18px] font-bold text-[#132F2C] hover:bg-[#F7E18F] transition"
                    >
                      {service.cta}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Service Modal (lazy, only when open) */}
      <Suspense fallback={null}>
        {modalOpen && (
          <ServiceModal
            isOpen={modalOpen}
            onClose={closeModal}
            serviceTitle={selectedService?.title || ""}
            fields={formFields.default}
          />
        )}
      </Suspense>
    </section>
  );
};

export default OurServices;
