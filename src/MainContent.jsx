import { useState, useEffect } from "react";
import SideIconsGradient from "./SideIconsGradient";
import ScrollDownArrow from "./ScrollDownArrow";
import ProfileImage from "./assets/profile.png";

export default function MainContent() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {window.innerWidth > 1080 && (
        <div
          style={{ position: "absolute", top: "0", left: "0", zIndex: "-1" }}
        >
          <SideIconsGradient />
        </div>
      )}
      <div
        style={{
          maxWidth: "100%",
          height: windowHeight,
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          color: "#777",
          paddingTop: window.innerWidth < 1080 && "25px",
          paddingLeft: window.innerWidth > 1080 && "550px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0 57px",
          }}
        >
          <h1
            style={{
              marginRight: "25px",
              fontSize: window.innerWidth > 385 ? "45px" : "35px",
            }}
          >
            Hello, I'm Lucas!
          </h1>
          <img
            src={ProfileImage}
            style={{
              width: "120px",
              borderRadius: "60px",
            }}
          />
        </div>
        <p
          style={{
            fontSize: "20px",
            lineHeight: "30px",
            padding: "0 57px",
            textAlign: "end",
          }}
        >
          Welcome to my portfolio! My name is Lucas Nogueira and I'm a student
          aiming to get a fullstack position, building qualified and intuitive
          projects. I strive to continuously improve my skills and to achieve
          better results.
        </p>
        <ScrollDownArrow />
      </div>
    </div>
  );
}
