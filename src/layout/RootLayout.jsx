import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const scrollToTopSmooth = () => {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  )?.matches;
  if (prefersReducedMotion) {
    window.scrollTo(0, 0);
    return;
  }

  const startY = window.scrollY || window.pageYOffset || 0;
  if (startY <= 0) return;

  const duration = 800;
  const startTime = performance.now();
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const tick = (now) => {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, Math.round(startY * (1 - eased)));
    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const RootLayout = () => {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith("/services");
  const isSuccessionFlow =
    location.pathname === "/signin" || location.pathname.startsWith("/succession");

  // Scroll-to-top on route changes (skip hash navigation)
  // Note: Page refresh will use browser default behavior.
  // If URL contains #anchor, let the browser handle in-page scrolling.
  useEffect(() => {
    if (location.hash) return;
    scrollToTopSmooth();
  }, [location.pathname]);

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
