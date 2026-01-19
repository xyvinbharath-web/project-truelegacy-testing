import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Description from "../components/whychooseus/Description";
import WhyChoose from "../components/whychooseus/WhyChoose";
import OurPromise from "../components/whychooseus/OurPromise";

const WhyChooseUs = () => {
  return (
    <div
      className="relative"
      style={{
        background: "linear-gradient(264.41deg, #132F2C 4.24%, #132F2C 98.47%)",
      }}
    >
      {/* Fixed navbar for Why Choose Us page */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#132F2C]">
        <Navbar />
      </div>

      {/* Spacer to avoid content overlap */}
      <div className="h-[64px] md:h-[72px]" />

      <Header
        title="Why Choose Us"
        subtitle="Discover why families trust True Legacy for their succession planning needs."
      />
      
      <main className="flex-grow bg-white text-black">
        <Description />
        <WhyChoose />
        <OurPromise />
      </main>
      
      
    </div>
  );
};

export default WhyChooseUs;
