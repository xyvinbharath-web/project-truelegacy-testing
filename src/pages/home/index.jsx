import HeaderHome from "../../components/home/HeaderHome";
import HomeOurServices from "../../components/home/HomeOurServices";
import LegacySection from "../../components/home/LegacySection";
import OurPromise from "../../components/home/OurPromise";
import PlanYourLegacy from "../../components/home/PlanYourLegacy";
import BlogsAndArticleSection from "../../components/home/BlogsAndArticleSection";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Sections composed similar to old app, ready for redesign */}
    
      <HeaderHome />
      <HomeOurServices />
      <LegacySection />
      <OurPromise />
      <PlanYourLegacy />
      <BlogsAndArticleSection />
    </main>
  );
};

export default HomePage;
