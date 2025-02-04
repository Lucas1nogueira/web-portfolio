import {
  FaLaptopCode,
  FaCopyright,
  FaPython,
  FaJava,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";

export default function SkillsSection() {
  return (
    <div
      style={{
        maxWidth: "100%",
        background: "linear-gradient(to right, #bbb, #eee, #aaa)",
        color: "#333",
        padding: "30px 57px",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <FaLaptopCode size={30} style={{ paddingRight: "5px" }} />
        <h1 style={{ fontSize: "35px" }}>Skills</h1>
      </div>
      <p style={{ marginTop: "5px", fontSize: "18px" }}>
        Troughout my studies I have earned knowledge in some languages and
        frameworks:
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div className="languageLabel">
          <FaCopyright size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>C</p>
        </div>
        <div className="languageLabel">
          <IoLogoJavascript size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>JavaScript</p>
        </div>
        <div className="languageLabel">
          <FaPython size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>Python</p>
        </div>
        <div className="languageLabel">
          <FaJava size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>Java</p>
        </div>
        <div className="languageLabel">
          <FaPhp size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>PHP</p>
        </div>
        <div className="languageLabel">
          <FaLaravel size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>Laravel</p>
        </div>
        <div className="languageLabel">
          <FaNodeJs size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>Node.js</p>
        </div>
        <div className="languageLabel">
          <FaHtml5 size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>HTML</p>
        </div>
        <div className="languageLabel">
          <FaCss3Alt size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>CSS</p>
        </div>
        <div className="languageLabel">
          <FaReact size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>React</p>
        </div>
        <div className="languageLabel">
          <FaReact size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>React Native</p>
        </div>
        <div className="languageLabel">
          <RiFlutterFill size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>Flutter</p>
        </div>
        <div className="languageLabel">
          <FaFigma size={25} style={{ paddingRight: "5px" }} />
          <p style={{ fontSize: "20px" }}>Figma</p>
        </div>
      </div>
    </div>
  );
}
