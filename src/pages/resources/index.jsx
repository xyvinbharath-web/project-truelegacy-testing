import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { lazy, Suspense, useEffect } from "react";
import ResourcesImage from "../../assets/img/resource/Frame resource.webp";
import ResourcesMobileImage from "../../assets/img/resource/Frame resourcemobile.webp";
const AllResources = lazy(() => import("../../components/resources/AllResources"));

const Resources = () => {
  useEffect(() => {
    const prefetch = () => {
      import("../../components/resources/AllResources");
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
    <div
      className="relative"
      style={{
        background: "linear-gradient(264.41deg, #132F2C 4.24%, #132F2C 98.47%)",
      }}
    >
      {/* Fixed navbar for Resources page */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#132F2C]">
        <Navbar />
      </div>

      {/* Spacer to avoid content overlap */}
      <div className="h-[64px] md:h-[80px]" />

      <Header
        title="Resources"
        subtitle="Explore guides, articles, and tools to understand succession laws and estate planning."
        mobileImage={ResourcesMobileImage}
        desktopImage={ResourcesImage}
      />

      <main className="flex-grow bg-white text-black">
        <Suspense fallback={null}>
          <AllResources />
        </Suspense>
      </main>
    </div>
  );
};

export default Resources;
