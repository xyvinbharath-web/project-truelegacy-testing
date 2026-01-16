import HeaderHome from "../../components/home/HeaderHome";
import HomeOurServices from "../../components/home/HomeOurServices";
import LegacySection from "../../components/home/LegacySection";
import OurPromise from "../../components/home/OurPromise";
import PlanYourLegacy from "../../components/home/PlanYourLegacy";
import BlogsAndArticleSection from "../../components/home/BlogsAndArticleSection";
import WhoweAreNew from "../../components/home/WhoweAreNew";
import TrueLegacyInstructions from "../../components/home/TrueLegacyInstructions";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Sections composed similar to old app, ready for redesign */}
    
      <HeaderHome />
      
      <PlanYourLegacy />
      <WhoweAreNew />
      <TrueLegacyInstructions />
     
    </main>
  );
};

export default HomePage;
