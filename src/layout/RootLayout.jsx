import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith("/services");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SmoothCursor and Toaster will be wired later during design phase */}
      {!isServicesPage && <Navbar />}
      <main className="flex-1 pb-32 md:pb-44 lg:pb-56">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
