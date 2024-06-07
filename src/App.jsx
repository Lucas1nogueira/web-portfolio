import { useState } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import MainContent from "./MainContent";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isMenuOpen && <SideMenu closeMenu={() => setMenuOpen(false)} />}
      <Header openMenu={() => setMenuOpen(true)} />
      <MainContent />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
