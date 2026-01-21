import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith("/services");
  const isSuccessionFlow =
    location.pathname === "/signin" || location.pathname.startsWith("/succession");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SmoothCursor and Toaster will be wired later during design phase */}
      {!isServicesPage && !isSuccessionFlow && <Navbar />}
      <main className={isSuccessionFlow ? "flex-1" : "flex-1 pb-32 md:pb-44 lg:pb-56"}>
        <Outlet />
      </main>
      {!isSuccessionFlow && <Footer />}
    </div>
  );
};

export default RootLayout;
