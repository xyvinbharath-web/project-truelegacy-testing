import { useState } from "react";
import { Users2, Save, Grid2x2, LogOut } from "lucide-react";
import StyledButton from "../../ui/StyledButton";
import logo from "../../assets/img/succession/Truelegacy Black Logo.png";
import { useNavigate } from "react-router-dom";
import { useSuccession } from "../../context/SuccessionContext";

const SuccessionHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();
  const { successionData, clearSuccessionData } = useSuccession();
  const showSaveBtn = successionData?.temporary_user?.is_logged_in === false;

  const handleLogout = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      clearSuccessionData();
    }, 0);
    setShowLogoutPopup(false);
  };
  return (
    <>
      <header className="px-4 md:px-8 py-4 bg-white shadow-xs border-b border-[#000000]/15">
        <div className="md:hidden flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt="True Legacy"
              className="w-28 h-auto object-contain"
            />
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="bg-transparent border border-gray-300 p-2 rounded-lg"
            >
              <Grid2x2 size={20} className="text-green" />
            </button>
          </div>

          <div className="flex flex-col text-left">
            <h1 className="text-lg font-semibold text-green leading-tight">
              Your Family Estate Overview
            </h1>
            <p className="text-sm text-secondary leading-snug">
              Radial visualization centered on "You" with inheritance
              calculations
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="True Legacy"
              className="w-28 h-auto object-contain"
            />
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-2xl font-semibold text-green leading-tight">
                Your Family Estate Overview
              </h1>
              <p className="text-base text-secondary leading-snug">
                Radial visualization centered on "You" with inheritance
                calculations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StyledButton
              variant="quinary"
              onClick={() => navigate("/succession/family")}
              name={
                <span className="flex items-center gap-2 text-base">
                  <Users2 size={16} /> Members
                </span>
              }
            />
            {showSaveBtn ? (
              <StyledButton
                name={
                  <span className="flex items-center gap-2 text-base">
                    <Save size={16} /> Save
                  </span>
                }
                onClick={() => navigate("/signin")}
              />
            ) : (
              <StyledButton
                variant="quaternary"
                name={
                  <span className="flex items-center gap-2 text-base">
                    <LogOut size={16} /> Logout
                  </span>
                }
                onClick={() => setShowLogoutPopup(true)}
              />
            )}
          </div>
        </div>
      </header>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-[200] md:hidden"
            onClick={() => setShowMenu(false)}
          />
          <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg rounded-t-2xl p-4 pb-24 flex flex-col gap-3 md:hidden z-[201] animate-slide-up">
            <StyledButton
              variant="quinary"
              name={
                <span className="flex items-center gap-2 text-base">
                  <Users2 size={18} /> Members List
                </span>
              }
              onClick={() => {
                navigate("/succession/family");
                setShowMenu(false);
              }}
            />
            {showSaveBtn ? (
              <StyledButton
                name={
                  <span className="flex items-center gap-2 text-base">
                    <Save size={18} /> Save Details
                  </span>
                }
                onClick={() => {
                  navigate("/signin");
                  setShowMenu(false);
                }}
              />
            ) : (
              <StyledButton
                variant="quaternary"
                name={
                  <span className="flex items-center gap-2 text-base">
                    <LogOut size={18} /> Logout
                  </span>
                }
                onClick={() => {
                  setShowMenu(false);
                  setShowLogoutPopup(true);
                }}
              />
            )}
          </div>
        </>
      )}

      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[300]">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-2 text-primary">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout? Your succession data will be cleared.
            </p>

            <div className="flex justify-end gap-3">
              <StyledButton
                onClick={() => setShowLogoutPopup(false)}
                name="Cancel"
                variant="quinary"
              />
              <StyledButton 
                name="Yes, Logout" 
                onClick={handleLogout}
                variant="quaternary"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessionHeader;
