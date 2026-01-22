import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import FooterFrame from "../assets/footerframe.jpg";
import MobileFooterFrame from "../assets/mobilefooterFrame .webp";
import LinkedinLogo from "../assets/linkedinlogo.webp";
import InstagramLogo from "../assets/instagramlogo.webp";
import FacebookLogo from "../assets/facebooklogo.webp";
import RequestDialog from "./home/RequestDialog";

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1CqpzdoLFZ/?mibextid=wwXIfr",
    icon: FacebookLogo,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/truelegacy_india/?igsh=OHJteGFoNHIwZWJ4",
    icon: InstagramLogo,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/true-legacy-india/",
    icon: LinkedinLogo,
  },
];

const Footer = ({ hideCta = false }) => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`mt-12 bg-[#0F2724] text-white footer-section ${
        isVisible ? "footer-section-visible" : ""
      }`}
    >
      {!hideCta && (
        <>
          {/* Overlapping yellow CTA block - mobile */}
          <div className="relative w-full mx-auto px-0 sm:px-8 md:hidden footer-cta-mobile">
            <div
              className="relative -top-10 sm:-top-12 bg-[#F4D57E] rounded-b-[16px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.3)] min-h-[390px] animate-fade-in footer-cta-card"
              style={{
                backgroundImage: `url(${MobileFooterFrame})`,
                backgroundSize: "67% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 28%",
              }}
            >
              <div className="px-6 py-8 flex flex-col justify-center h-full">
                <div className="max-w-[62%]">
                  <h2 className="text-[22px] leading-snug font-semibold text-[#132F2C] footer-cta-heading">
                    Still wondering how to
                    <br />
                    pass down your legacy?
                  </h2>
                  <p className="mt-4 text-[13px] text-[#132F2C] footer-cta-body">
                    Let our Experts Make it Simple for You. Succession
                    planning is not just about documents — it's about
                    securing your family's peace!
                  </p>
                </div>
                <div className="mt-9 flex flex-col items-center gap-4 w-full footer-cta-buttons">
                  <button
                    className="inline-flex w-[88%] max-w-[360px] items-center justify-center rounded-full bg-[#132F2C] px-6 py-3 text-[13px] font-[Urania] font-medium text-white whitespace-nowrap footer-cta-button"
                    onClick={() => setIsScheduleOpen(true)}
                  >
                    Schedule your expert session today
                  </button>
                  <button
                    className="inline-flex w-[88%] max-w-[360px] items-center justify-center rounded-full bg-[#132F2C] px-6 py-3 text-[13px] font-[Urania] font-medium text-white whitespace-nowrap"
                    onClick={() => setIsCallbackOpen(true)}
                  >
                    Request a Call Back
                  </button>
                </div>
              </div>
              <div className="shine-slow" />
            </div>
          </div>

          {/* Overlapping yellow CTA block - desktop */}
          <div className="relative max-w-[1920px] mx-auto px-4 sm:px-8 hidden md:block footer-cta-desktop">
            <div
              className="relative -top-10 sm:-top-12 md:-top-30 lg:-top-38 xl:-top-52 md:h-[380px] lg:h-[413px] bg-[#F4D57E] rounded?[16px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.3)] animate-fade-in footer-cta-card"
              style={{
                backgroundImage: `url(${FooterFrame})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "auto 100%",
              }}
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] gap-6 md:gap-0 items-center">
                {/* Left: text + buttons */}
                <div className="px-10 lg:px-16 xl:px-24 py-4 lg:py-4 flex flex-col justify-center">
                  <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] leading-snug font-semibold text-[#132F2C] footer-cta-heading">
                    Still wondering how to
                    <br />
                    pass down your legacy?
                  </h2>
                  <p className="mt-4 text-[13px] sm:text-[14px] text-[#132F2C] max-w-md footer-cta-body">
                    Let our Experts Make it Simple for You. Succession
                    planning is not just about documents — it's about
                    securing your family's peace!
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 footer-cta-buttons">
                    <button
                      className="inline-flex w-full sm:w-auto sm:min-w-[270px] items-center justify-center rounded-full bg-[#132F2C] px-6 sm:px-10 py-3 text-[13px] sm:text-[14px] font-[Urania] text-white whitespace-nowrap footer-cta-button"
                      onClick={() => setIsScheduleOpen(true)}
                    >
                      Schedule your expert session today
                    </button>
                    <button
                      className="inline-flex w-full sm:w-auto sm:min-w-[220px] items-center justify-center rounded-full bg-[#132F2C] px-6 sm:px-10 py-3 text-[13px] sm:text-[14px] font-[Urania] text-white whitespace-nowrap footer-cta-button"
                      onClick={() => setIsCallbackOpen(true)}
                    >
                      Request a Call Back
                    </button>
                  </div>
                </div>
              </div>
              <div className="shine-slow" />
            </div>
          </div>
        </>
      )}

      {/* Main footer content */}
      <div className="pt-3 pb-2 mt-[-20px] md:mt-[-60px] lg:mt-[-72px] footer-main">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-10 lg:px-10 footer-main-inner">
          {/* Mobile layout */}
          <div className="md:hidden text-[13px] footer-mobile-block">
            {/* Top row: Phone/Email/Follow Us + Quick Links */}
            <div className="flex gap-8 pb-5 border-b border-[#193C38]">
              <div className="flex-1">
                <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                  Phone
                </div>
                <div className="space-y-1 mb-4 text-[#F4D57E] footer-text-group animate-fade-in">
                  <div className="font-medium footer-text">+91 7592 912 300 (IN)</div>
                  <div className="font-medium footer-text">+971 58 929 148 (UAE)</div>
                </div>
                <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                  Email
                </div>
                <div className="text-[#F4D57E] text-[13px] mb-4 footer-text animate-fade-in">
                  info@truelegacy.in
                </div>
                <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                  Follow Us
                </div>
                <div className="flex items-center gap-3 footer-social animate-fade-in">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="inline-flex"
                    >
                      <img src={social.icon} alt={social.name} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                  Quick Links
                </div>
                <div className="space-y-1 text-[#A1A1A1] footer-links animate-fade-in">
                  <NavLink
                    to="/"
                    className="block hover:text-[#F4D57E] transition-colors"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/why-choose-us"
                    className="block hover:text-[#F4D57E] transition-colors"
                  >
                    Why Choose Us
                  </NavLink>
                  <NavLink
                    to="/services"
                    className="block hover:text-[#F4D57E] transition-colors"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/resources"
                    className="block hover:text-[#F4D57E] transition-colors"
                  >
                    Resources
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="block hover:text-[#F4D57E] transition-colors"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Address full width */}
            <div className="pt-5 pb-5 border-b border-[#193C38]">
              <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                Address
              </div>
              <p className="text-[13px] leading-relaxed text-[#A1A1A1] footer-text animate-fade-in">
                Wazeal Fintech Private Limited,
                <br />
                2nd Floor, Imperial Annex, NH Bypass,
                <br />
                Vyttila, Kochi, Kerala 682019, India
              </p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-0 text-[13px] sm:text-[14px] footer-desktop-grid">
            {/* Phone & Email */}
            <div className="pb-4 md:pb-6 border-b border-[#193C38] footer-col">
              <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                Phone
              </div>
              <div className="space-y-1 mb-4 text-[#F4D57E] footer-text-group animate-fade-in">
                <div className="font-medium footer-text">+91 7592 912 300 (IN)</div>
                <div className="font-medium footer-text">+971 58 929 148 (UAE)</div>
              </div>
              <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                Email
              </div>
              <div className="text-[#F4D57E] text-[13px] footer-text animate-fade-in">
                info@truelegacy.in
              </div>
            </div>

            {/* Address */}
            <div className="md:border-l md:border-[#1D3C36] md:pl-8 pb-4 md:pb-6 border-b border-[#193C38] footer-col">
              <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                Address
              </div>
              <p className="text-[13px] leading-relaxed text-[#A1A1A1] footer-text animate-fade-in">
                Wazeal Fintech Private Limited,
                <br />
                2nd Floor, Imperial Annex, NH Bypass,
                <br />
                Vyttila, Kochi, Kerala 682019, India
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:border-l md:border-[#1D3C36] md:pl-8 pb-4 md:pb-6 border-b border-[#193C38] footer-col">
              <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                Quick Links
              </div>
              <div className="space-y-1 text-[#A1A1A1] footer-links animate-fade-in">
                <NavLink
                  to="/"
                  className="block hover:text-[#F4D57E] transition-colors"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/why-choose-us"
                  className="block hover:text-[#F4D57E] transition-colors"
                >
                  Why Choose Us
                </NavLink>
                <NavLink
                  to="/services"
                  className="block hover:text-[#F4D57E] transition-colors"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/resources"
                  className="block hover:text-[#F4D57E] transition-colors"
                >
                  Resources
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block hover:text-[#F4D57E] transition-colors"
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Follow Us */}
            <div className="md:border-l md:border-[#1D3C36] md:pl-8 pb-4 md:pb-6 border-b border-[#193C38] footer-col">
              <div className="text-[12px] uppercase tracking-[0.12em] text-white mb-2 footer-label animate-fade-in">
                Follow Us
              </div>
              <div className="flex items-center gap-3 footer-social animate-fade-in">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex"
                  >
                    <img src={social.icon} alt={social.name} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Blurb (desktop only) */}
            <div className="md:border-l md:border-[#1D3C36] md:pl-8 pb-4 md:pb-6 border-b border-[#193C38] footer-col">
              <p className="text-[13px] leading-relaxed text-[#A1A1A1] footer-blurb animate-fade-in">
                Helping families plan, protect, and
                pass on their legacy with clarity and
                confidence.
              </p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-[#A3B4B0] footer-bottom">
            <div className="flex flex-wrap items-center gap-3">
              <span>Privacy Policy</span>
              <span className="w-1 h-1 rounded-full bg-[#A3B4B0]" />
              <span>Terms of Service</span>
            </div>
            <div className="text-[11px] sm:text-[12px]">
              ©2025 TRUE LEGACY. ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>

      {/* Request Dialogs */}
      <RequestDialog
        open={isScheduleOpen}
        title="Schedule a Callback"
        isSchedule={true}
        onClose={() => setIsScheduleOpen(false)}
      />

      <RequestDialog
        open={isCallbackOpen}
        title="Call Back Request"
        isSchedule={false}
        onClose={() => setIsCallbackOpen(false)}
      />
    </footer>
  );
};

export default Footer;
