import { useState } from "react";

const darkTheme = { backgroundColor: "#2f3437", color: "#ebebec" };
const lightTheme = { backgroundColor: "#ebebec", color: "#2f3437" };

export const DarkMode = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  return (
    <div
      className="container"
      style={isDarkModeEnabled ? darkTheme : lightTheme}
    >
      <h2>11. Dark Mode</h2>
      <button
        style={{ fontSize: "2rem" }}
        onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
      >
        {isDarkModeEnabled ? "☀️" : "🌙"}
      </button>
    </div>
  );
};
