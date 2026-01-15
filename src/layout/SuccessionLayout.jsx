import { Outlet } from "react-router-dom";

const SuccessionLayout = () => {
  return (
    <div className="bg-white">
      {/* Succession pages render inside the global RootLayout shell */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <Outlet />
      </main>
    </div>
  );
};

export default SuccessionLayout;
