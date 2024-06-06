import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialButton(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div
      className={`socialButton ${isMouseOver ? "hovered" : ""}`}
      onClick={() => {
        props.type == "linkedin"
          ? window.open("https://www.linkedin.com/in/lucasnbbastos")
          : props.type == "github"
          ? window.open("https://github.com/Lucas1nogueira")
          : props.type == "email" &&
            open("mailto:nog.lucas.1204@gmail.com", "_self");
      }}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {props.type == "linkedin" ? (
        <FaLinkedin style={{ paddingRight: "5px" }} size={35} color="#999" />
      ) : props.type == "github" ? (
        <FaGithub style={{ paddingRight: "5px" }} size={35} color="#999" />
      ) : (
        props.type == "email" && (
          <MdEmail style={{ paddingRight: "5px" }} size={35} color="#999" />
        )
      )}
      {isMouseOver && (
        <p style={{ fontSize: "14px", color: "#333" }}>{props.type}</p>
      )}
    </div>
  );
}
