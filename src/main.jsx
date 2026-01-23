import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import { SuccessionProvider } from "./context/SuccessionContext";

// Global scroll reset component
const ScrollReset = () => {
  useEffect(() => {
    // Reset scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Also reset scroll history
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);
  
  return null;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SuccessionProvider>
      <ScrollReset />
      <RouterProvider router={Router} />
    </SuccessionProvider>
  </StrictMode>
);
