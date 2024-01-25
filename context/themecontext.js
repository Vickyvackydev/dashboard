import { createContext, useState, useContext, useEffect } from "react";

const modeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode || "light";
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");

    document.body.classList.add(mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <modeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </modeContext.Provider>
  );
};

export const useMode = () => {
  return useContext(modeContext);
};
