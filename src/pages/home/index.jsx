import { lazy, Suspense, useEffect } from "react";
import HeaderHome from "../../components/home/HeaderHome";
import HomeOurServices from "../../components/home/HomeOurServices";
import LegacySection from "../../components/home/LegacySection";
const OurPromise = lazy(() => import("../../components/whychooseus/OurPromise"));
const PlanYourLegacy = lazy(() => import("../../components/home/PlanYourLegacy"));
const BlogsAndArticleSection = lazy(() => import("../../components/home/BlogsAndArticleSection"));
const WhoweAreNew = lazy(() => import("../../components/home/WhoweAreNew"));
const TrueLegacyInstructions = lazy(() => import("../../components/home/TrueLegacyInstructions"));
const QuoteComponent = lazy(() => import("../../components/home/QuoteComponent"));
const FAQ = lazy(() => import("../../components/FAQ"));

const HomePage = () => {
  useEffect(() => {
    // Reset scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    const prefetch = () => {
      import("../../components/home/PlanYourLegacy");
      import("../../components/home/WhoweAreNew");
      import("../../components/home/TrueLegacyInstructions");
      import("../../components/home/QuoteComponent");
      import("../../components/FAQ");
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
    <main className="min-h-screen">
      {/* Sections composed similar to old app, ready for redesign */}
    
      <HeaderHome />
      <Suspense fallback={null}>
        <PlanYourLegacy />
      </Suspense>
      <Suspense fallback={null}>
        <WhoweAreNew />
      </Suspense>
      <Suspense fallback={null}>
        <TrueLegacyInstructions />
      </Suspense>
      <Suspense fallback={null}>
        <QuoteComponent />
      </Suspense>
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
    </main>
  );
};

export default HomePage;
