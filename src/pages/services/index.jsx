import OurServices from "../../components/services/OurServices";
import FAQComponent from "../../components/FAQ";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";

function Services() {
  const location = useLocation();
  const initialTab = location.state?.activeTab || "will";
  return (
    <div
      className="relative"
      style={{
        background: "linear-gradient(264.41deg, #132F2C 4.24%, #132F2C 98.47%)",
      }}
    >
      {/* Fixed navbar for Services page */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#132F2C]">
        <Navbar />
      </div>

      {/* Spacer to avoid content overlap */}
      <div className="h-[64px] md:h-[72px]" />

      <Header
        title="Services"
        subtitle="Understand succession laws and secure your estate with clarity and confidence."
      />
      <main className="flex-grow bg-white text-black">
        <OurServices initialTab={initialTab} />
        <div className="pb-12 md:pb-16 lg:pb-20">
          <FAQComponent />
        </div>
      </main>
    </div>
  );
}

export default Services;