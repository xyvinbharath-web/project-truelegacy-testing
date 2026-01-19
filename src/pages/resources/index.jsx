import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import AllResources from "../../components/resources/AllResources";

const Resources = () => {
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
      <div className="h-[64px] md:h-[72px]" />

      <Header
        title="Resources"
        subtitle="Explore guides, articles, and tools to understand succession laws and estate planning."
      />

      <main className="flex-grow bg-white text-black">
        <AllResources />
      </main>
    </div>
  );
};

export default Resources;
