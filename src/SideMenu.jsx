import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import SocialButton from "./SocialButton";

export default function SideMenu(props) {
  const [closingAnimation, setClosingAnimation] = useState(false);

  return (
    <div
      className={`menuBackground ${closingAnimation ? "closing" : ""}`}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 1,
      }}
    >
      <div
        className={`sideMenu ${closingAnimation ? "closing" : ""}`}
        style={{
          position: "static",
          width: "30%",
          minWidth: "200px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(circle at center, #8D8258 30%, #5b522e 100%)",
          padding: "50px 30px",
        }}
      >
        <SocialButton sideMenu={true} name="LinkedIn" />
        <SocialButton sideMenu={true} name="GitHub" />
        <SocialButton sideMenu={true} name="Email" />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={() => {
          setClosingAnimation(true);
          setTimeout(() => props.closeMenu(), 500);
        }}
        onTouchStart={() => {
          setClosingAnimation(true);
          setTimeout(() => props.closeMenu(), 500);
        }}
      >
        <IoIosArrowBack size={70} color="white" />
      </div>
    </div>
  );
}
