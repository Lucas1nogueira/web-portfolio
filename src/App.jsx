import Header from "./Header";
import MainContent from "./MainContent";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      <MainContent />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
