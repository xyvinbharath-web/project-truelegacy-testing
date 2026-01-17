import Footer from "../../components/Footer";
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
      <Navbar />
      <Header
        title="Services"
        subtitle="Understand succession laws and secure your estate with clarity and confidence."
      />
      <main className="flex-grow relative z-100 bg-white text-black">
        <OurServices initialTab={initialTab} />
        <div className="pb-12 md:pb-16 lg:pb-20">
          <FAQComponent />
        </div>
        <Footer hideCta />
      </main>
    </div>
  );
}

export default Services;