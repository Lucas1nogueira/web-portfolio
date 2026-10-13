import { useState, useEffect } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import MainContent from "./MainContent";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isMenuOpen && (
        <SideMenu
          closeMenu={() => setMenuOpen(false)}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}
      <Header
        openMenu={() => setMenuOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <MainContent />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
