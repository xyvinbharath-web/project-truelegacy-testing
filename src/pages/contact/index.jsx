import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { lazy, Suspense, useEffect } from "react";
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
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Spacer for fixed navbar height */}
      <div className="h-[80px] md:h-[96px]" />

      {/* Header section reused from other pages */}
      <Header
        title="Contact Us"
        subtitle="Have a question? Reach out to our team."
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
