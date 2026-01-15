import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/truelagacylogo.webp";
import MobileLogo from "../assets/logomobile.webp";
import MenuBg from "../assets/Menubackround.webp";
import MenuIcon from "../assets/Frame 2147224799.webp";
import CloseIcon from "../assets/cancel-01.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isServicesRoute = location.pathname.startsWith("/services");

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-40
        bg-white
        rounded-b-[15px]
        shadow-[0_0_36px_rgba(0,0,0,0.06)]
      "
    >
      <div
        className="
          w-full
          h-[80px]
          flex items-center
          justify-between md:justify-start
          px-4 sm:px-6 lg:px-10
        "
      >
        {/* Left: logo */}
        <div className="flex-none flex items-center">
          <img src={Logo} alt="Truelegacy" className="h-8" />
        </div>

        {/* Center: nav links */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-10 text-[14px] font-[Urania]">
          <NavLink to="/" className="relative">
            {({ isActive }) => (
              <span className="relative inline-flex items-center justify-center">
                <span
                  className={`text-[14px] font-semibold ${
                    isActive ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  Home
                </span>
                {isActive && (
                  <span className="absolute left-1/2 top-full mt-[4px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-800" />
                )}
              </span>
            )}
          </NavLink>

          <div className="relative">
            <button
              className="relative inline-flex items-center justify-center gap-1"
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              <span
                className={`text-[14px] ${
                  isServicesOpen || isServicesRoute
                    ? "text-slate-900"
                    : "text-slate-400"
                }`}
              >
                Services
              </span>
              <span
                className={`text-[10px] ${
                  isServicesOpen || isServicesRoute
                    ? "text-slate-900"
                    : "text-slate-400"
                }`}
              >
                {isServicesOpen ? "▲" : "▼"}
              </span>
              {(isServicesOpen || isServicesRoute) && (
                <span className="absolute left-1/2 top-full mt-[4px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-800" />
              )}
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md p-4 w-48">
                <div>Will</div>
                <div>Trust</div>
                <div>Family Office</div>
              </div>
            )}
          </div>

          <NavLink to="/why-choose-us" className="relative">
            {({ isActive }) => (
              <span className="relative inline-flex items-center justify-center">
                <span
                  className={`text-[14px] ${
                    isActive ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  Why Choose Us
                </span>
                {isActive && (
                  <span className="absolute left-1/2 top-full mt-[4px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-800" />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/resources" className="relative">
            {({ isActive }) => (
              <span className="relative inline-flex items-center justify-center">
                <span
                  className={`text-[14px] ${
                    isActive ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  Resources
                </span>
                {isActive && (
                  <span className="absolute left-1/2 top-full mt-[4px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-800" />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/contact" className="relative">
            {({ isActive }) => (
              <span className="relative inline-flex items-center justify-center">
                <span
                  className={`text-[14px] ${
                    isActive ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  Contact Us
                </span>
                {isActive && (
                  <span className="absolute left-1/2 top-full mt-[4px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-800" />
                )}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Right: actions (desktop login pill, mobile menu icon) */}
        <div className="flex-none flex items-center justify-end gap-3">
          {/* Desktop / tablet: login pill */}
          <button
            className="hidden md:inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#132F2C] text-white text-[13px] font-[Urania]"
            onClick={() => navigate("/signin")}
          >
            Login Account
          </button>

          {/* Mobile: menu icon image toggling overlay */}
          <button
            className="inline-flex md:hidden items-center justify-center ml-auto"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img
              src={MenuIcon}
              alt="Open menu"
              className="h-12 w-12"
            />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#132F2C] text-white md:hidden">
          <div
            className="relative flex h-full w-full flex-col"
            style={{
              backgroundImage: `url(${MenuBg})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            {/* Top bar inside menu */}
            <div className="flex items-center justify-between px-6 pt-16 pb-4">
              <img src={MobileLogo} alt="Truelegacy" className="h-7" />
              <button
                className="inline-flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src={CloseIcon}
                  alt="Close menu"
                  className="h-8 w-8"
                />
              </button>
            </div>

            {/* Nav links column */}
            <div className="mt-20 flex-1 px-6 space-y-8 text-[15px] font-[Urania]">
              {/* Home */}
              <NavLink
                to="/"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#FFFFFF]"}>
                    Home
                  </span>
                )}
              </NavLink>

              {/* Services with mobile dropdown */}
              <div className="space-y-2">
                <button
                  className="flex items-center gap-2 text-left w-full"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                >
                  <span
                    className={
                      isServicesOpen || isServicesRoute
                        ? "text-[#F4D57E]"
                        : "text-[#FFFFFF]"
                    }
                  >
                    Services
                  </span>
                  <span className="text-[#F4D57E] text-xs">
                    {isServicesOpen ? "▲" : "▼"}
                  </span>
                </button>
                {isServicesOpen && (
                  <div className="ml-4 space-y-1 text-[14px] text-[#FFFFFF]">
                    <div>Will</div>
                    <div>Trust</div>
                    <div>Family Office</div>
                  </div>
                )}
              </div>

              {/* Why Choose Us */}
              <NavLink
                to="/why-choose-us"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#FFFFFF]"}>
                    Why Choose Us
                  </span>
                )}
              </NavLink>

              {/* Resources */}
              <NavLink
                to="/resources"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#FFFFFF]"}>
                    Resources
                  </span>
                )}
              </NavLink>

              {/* Contact Us */}
              <NavLink
                to="/contact"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#FFFFFF]"}>
                    Contact Us
                  </span>
                )}
              </NavLink>

              {/* Login button */}
              <button
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F4D57E] px-8 py-3 text-[14px] font-[Urania] text-[#132F2C]"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/signin");
                }}
              >
                Login Account
              </button>

              <div className="mt-8 pt-4 border-t border-white/10 text-[12px] text-white/80">
                <div className="mb-1">General Inquiries</div>
                <div>info@truelegacy.in</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;