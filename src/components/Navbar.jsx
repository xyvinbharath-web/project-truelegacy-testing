import { useState } from "react";

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/truelagacylogo.webp";
import MobileLogo from "../assets/logomobile.webp";
import MenuBg from "../assets/Menubackround.webp";
import MenuIcon from "../assets/Frame 2147224799.webp";
import CloseIcon from "../assets/cancel-01.webp";
import StyledButton from "../ui/StyledButton";
import ArrowDownIcon from "../assets/icon/arrow-down-01-sharp.webp";
import FaviconIcon from "../assets/icon/favicon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // desktop services dropdown
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // mobile services dropdown

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
        className={`
          w-full
          h-[80px]
          flex items-center
          justify-between md:justify-start
          px-4 sm:px-6 lg:px-10
          ${isMenuOpen ? "hidden md:flex" : ""}
        `}
      >
        {/* Left: logo */}
        <div className="flex-none flex items-center">
          <img src={Logo} alt="Truelegacy" className="h-8" />
        </div>

        {/* Center: nav links */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8 xl:gap-10 text-[14px] md:text-[15px] lg:text-[16px] font-[Urania] tl-nav">

          <NavLink to="/" className="relative">
            {({ isActive }) => (
              <span className="relative inline-flex items-center justify-center">
                <span
                  className={`
                    hidden lg:block
                    ${isActive ? "text-slate-900" : "text-[#B5B5B5]"}
                  `}
                  style={{fontFamily: 'Urania', fontWeight: isActive ? '500' : '400', fontStyle: isActive ? 'Regular' : 'Medium', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%'}}
                >
                  Home
                </span>
                <span className={`block lg:hidden text-[14px] md:text-[15px] lg:text-[16px] font-semibold ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                  Home
                </span>
                {isActive && (
                  <span className="absolute left-1/2 top-full mt-[4px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-800" />
                )}
              </span>
            )}
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="relative inline-flex items-center justify-center gap-1 cursor-pointer"
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              <span
                className={`hidden lg:block ${
                  isServicesOpen || isServicesRoute
                    ? "text-slate-900"
                    : "text-[#B5B5B5]"
                }`}
                style={{fontFamily: 'Urania', fontWeight: (isServicesOpen || isServicesRoute) ? '500' : '400', fontStyle: (isServicesOpen || isServicesRoute) ? 'Medium' : 'Regular', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%'}}
              >
                Services
              </span>
              <span className={`block lg:hidden text-[14px] md:text-[15px] lg:text-[16px] ${
                  isServicesOpen || isServicesRoute
                    ? "text-slate-900"
                    : "text-slate-400"
                }`}>
                Services
              </span>
              <span className="inline-flex items-center justify-center ml-1">
                <img
                  src={ArrowDownIcon}
                  alt="Toggle services menu"
                  className={`h-3 w-3 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : "rotate-0"
                  } ${
                    isServicesOpen || isServicesRoute
                      ? "filter-none"
                      : "opacity-60"
                  }`}
                />
              </span>
              {(isServicesOpen || isServicesRoute) && (
                <span className="absolute left-1/2 top-full mt-[4px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-800" />
              )}
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md p-4 w-48 space-y-2 text-[14px] text-slate-800 services-dropdown-smooth">
                <button
                  type="button"
                  className="block w-full text-left hover:text-emerald-800 cursor-pointer"
                  onClick={() => {
                    setIsServicesOpen(false);
                    navigate("/services", { state: { activeTab: "will" } });
                  }}
                >
                  Will
                </button>
                <button
                  type="button"
                  className="block w-full text-left hover:text-emerald-800 cursor-pointer"
                  onClick={() => {
                    setIsServicesOpen(false);
                    navigate("/services", { state: { activeTab: "trust" } });
                  }}
                >
                  Trust
                </button>
                <button
                  type="button"
                  className="block w-full text-left hover:text-emerald-800 cursor-pointer"
                  onClick={() => {
                    setIsServicesOpen(false);
                    navigate("/services");
                  }}
                >
                  Family Office
                </button>
              </div>
            )}
          </div>

          <NavLink to="/why-choose-us" className="relative">
            {({ isActive }) => (
              <span className="relative inline-flex items-center justify-center">
                <span
                  className={`
                    hidden lg:block
                    ${isActive ? "text-slate-900" : "text-[#B5B5B5]"}
                  `}
                  style={{fontFamily: 'Urania', fontWeight: isActive ? '500' : '400', fontStyle: isActive ? 'Regular' : 'Medium', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%'}}
                >
                  Why Choose Us
                </span>
                <span className={`block lg:hidden text-[14px] md:text-[15px] lg:text-[16px] ${isActive ? "text-slate-900" : "text-slate-400"}`}>
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
                  className={`
                    hidden lg:block
                    ${isActive ? "text-slate-900" : "text-[#B5B5B5]"}
                  `}
                  style={{fontFamily: 'Urania', fontWeight: isActive ? '500' : '400', fontStyle: isActive ? 'Regular' : 'Medium', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%'}}
                >
                  Resources
                </span>
                <span className={`block lg:hidden text-[14px] md:text-[15px] lg:text-[16px] ${isActive ? "text-slate-900" : "text-slate-400"}`}>
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
                  className={`
                    hidden lg:block
                    ${isActive ? "text-slate-900" : "text-[#B5B5B5]"}
                  `}
                  style={{fontFamily: 'Urania', fontWeight: isActive ? '500' : '400', fontStyle: isActive ? 'Regular' : 'Medium', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%'}}
                >
                  Contact Us
                </span>
                <span className={`block lg:hidden text-[14px] md:text-[15px] lg:text-[16px] ${isActive ? "text-slate-900" : "text-slate-400"}`}>
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
          <div className="hidden md:inline-flex lg:hidden">
            <StyledButton
              name="Login"
              onClick={() => navigate("/signin")}
              variant="primary"
              minWidth="auto"
              className="items-center justify-center h-10 px-4 rounded-full !bg-[#132F2C] !text-white text-[12px] font-[Urania]"
            />
          </div>

          {/* Desktop: login pill */}
          <div className="hidden lg:inline-flex">
            <StyledButton
              name="Login Account"
              onClick={() => navigate("/signin")}
              variant="primary"
              minWidth="auto"
              className="items-center justify-center rounded-full !bg-[#132F2C] !text-white"
              style={{
                width: '171px',
                height: '52px',
                borderRadius: '66px',
                paddingTop: '14px',
                paddingRight: '32px',
                paddingBottom: '14px',
                paddingLeft: '32px',
                gap: '10px',
                fontFamily: 'Urania',
                fontWeight: '700',
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            />
          </div>

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
        <div className="relative inset-0 z-50 bg-[#132F2C] text-white md:hidden animate-fade-in-fast min-h-screen">
          <div
            className="relative flex h-full w-full flex-col"
            style={{
              backgroundImage: `url(${MenuBg})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          >
            {/* Top bar inside menu */}
            <div className="flex items-center justify-between px-5 pt-11 pb-4">
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
            <div className="mt-15 flex-1 px-4 space-y-6 text-[21px] font-[Urania] animate-fade-up menu-slide-in">

              {/* Home */}
              <NavLink
                to="/"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#899795]"}>
                    Home
                  </span>
                )}
              </NavLink>

              {/* Services with mobile dropdown */}
              <div className="space-y-2">
                <button
                  className="flex items-center gap-2 text-left w-full cursor-pointer"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                >
                  <span
                    className={
                      isMobileServicesOpen || isServicesRoute
                        ? "text-[#F4D57E]"
                        : "text-[#899795]"
                    }
                  >
                    Services
                  </span>
                  <span className="inline-flex items-center justify-center">
                    <img
                      src={ArrowDownIcon}
                      alt="Toggle services menu"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </span>
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 space-y-2 text-[21px] text-[#899795] services-dropdown-smooth">
                    <button
                      type="button"
                      className="block text-left w-full hover:text-[#F4D57E]"
                      onClick={() => {
                        setIsMobileServicesOpen(false);
                        navigate("/services", { state: { activeTab: "will" } });
                      }}
                    >
                      Will
                    </button>
                    <button
                      type="button"
                      className="block text-left w-full hover:text-[#F4D57E]"
                      onClick={() => {
                        setIsMobileServicesOpen(false);
                        navigate("/services", { state: { activeTab: "trust" } });
                      }}
                    >
                      Trust
                    </button>
                    <button
                      type="button"
                      className="block text-left w-full hover:text-[#F4D57E]"
                      onClick={() => {
                        setIsMobileServicesOpen(false);
                        navigate("/services");
                      }}
                    >
                      Family Office
                    </button>
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
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#899795]"}>
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
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#899795]"}>
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
                  <span className={isActive ? "text-[#F4D57E]" : "text-[#899795]"}>
                    Contact Us
                  </span>
                )}
              </NavLink>

              {/* Login button */}
              <button
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#F4D57E] text-[#132F2C]"
                style={{
                  width: '171px',
                  height: '52px',
                  borderRadius: '66px',
                  paddingTop: '14px',
                  paddingRight: '32px',
                  paddingBottom: '14px',
                  paddingLeft: '32px',
                  gap: '10px',
                  fontFamily: 'Urania',
                  fontWeight: '700',
                  fontStyle: 'normal',
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/signin");
                }}
              >
                Login Account
              </button>

              <div className="mt-4 pt-8 border-t border-white/10 text-[#FFFFFF]">
                <div className="mb-0" style={{fontFamily: 'Urania', fontWeight: '300', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', color: '#899795'}}>General Inquiries</div>
                <div className="flex items-center justify-between" style={{fontFamily: 'Urania', fontWeight: '400', fontStyle: 'normal', fontSize: '18px', lineHeight: '100%', letterSpacing: '0%'}}>
                  <span>info@truelegacy.in</span>
                  <img src={FaviconIcon} alt="Email" className="w-8 h-8" />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;