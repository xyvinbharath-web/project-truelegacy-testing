import { createContext, useContext, useState } from "react";

const SuccessionContext = createContext();

export const SuccessionProvider = ({ children }) => {
  const [successionData, setSuccessionDataState] = useState(() => {
    const stored = localStorage.getItem("successionData");
    return stored ? JSON.parse(stored) : null;
  });

  const setSuccessionData = (data) => {
    setSuccessionDataState(data);
    localStorage.setItem("successionData", JSON.stringify(data));
  };

  const clearSuccessionData = () => {
    setSuccessionDataState(null);
    localStorage.removeItem("successionData");
  };

  return (
    <SuccessionContext.Provider
      value={{ successionData, setSuccessionData, clearSuccessionData }}
    >
      {children}
    </SuccessionContext.Provider>
  );
};

export const useSuccession = () => useContext(SuccessionContext);
