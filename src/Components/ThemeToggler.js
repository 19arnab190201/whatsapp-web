import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span
       style={{
        backgroundColor: "#333",
        padding: "10px",
        fontSize: "15px",
        color: "#FFF",
        borderRadius:"20px"
      }}
      >{themeMode === "light" ? "ON" : "OFF"}</span>
    </div>
  );
};

export default ThemeToggler;