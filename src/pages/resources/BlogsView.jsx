import Navbar from "../../components/Navbar";
import { lazy, Suspense, useEffect } from "react";
const ResourcesSection = lazy(() => import("../../components/resources/ResourcesSection"));

const BlogsView = () => {
  useEffect(() => {
    const prefetch = () => {
      import("../../components/resources/ResourcesSection");
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
      {/* Fixed navbar for blog detail page */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#132F2C]">
        <Navbar />
      </div>

      {/* Spacer to avoid content overlap */}
      <div className="h-[64px] md:h-[72px]" />

      <main className="flex-grow bg-white text-black">
        <Suspense fallback={null}>
          <ResourcesSection />
        </Suspense>
      </main>
    </div>
  );
};

export default BlogsView;
