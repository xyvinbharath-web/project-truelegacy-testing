import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { lazy, Suspense, useEffect } from "react";
import ContactImage from "../../assets/img/resource/Frame contactus.webp";
import ContactMobileImage from "../../assets/img/Frame contactusmobile.webp";
const ContactSection = lazy(() => import("../../components/contact/ContactSection"));

const ContactPage = () => {
  // Idle prefetch to reduce chance of waterfalls
  useEffect(() => {
    const prefetch = () => {
      import("../../components/contact/ContactSection");
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2000 });
      return () => window.cancelIdleCallback && window.cancelIdleCallback(id);
    } else {
      const t = setTimeout(prefetch, 2000);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#F6FFFF]">
      {/* Fixed navbar */}  {/* Fixed navbar for Resources page */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#132F2C]">
        <Navbar />
      </div>

      {/* Spacer to avoid content overlap */}
      <div className="h-[64px] md:h-[72px]" />

      {/* Header section reused from other pages */}
      <Header
        title="Contact Us"
        subtitle="Have a question? Reach out to our team."
        mobileImage={ContactMobileImage}
        desktopImage={ContactImage}
      />

      {/* Main contact content */}
      <main className="max-w-[1200px] mx-auto px-0 md:px-10 pt-10 pb-0 md:pb-0 -mb-35 md:mb-0">
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
};

export default ContactPage;
