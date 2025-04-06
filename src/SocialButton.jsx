import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialButton(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div
      className={`socialButton ${
        !props.sideMenu && isMouseOver ? "hovered" : ""
      }`}
      style={props.sideMenu && { padding: "0 10px" }}
      onClick={() => {
        props.name == "LinkedIn"
          ? window.open("https://www.linkedin.com/in/lucasnbbastos")
          : props.name == "GitHub"
          ? window.open("https://github.com/Lucas1nogueira")
          : props.name == "Email" &&
            open("mailto:dev.lucas.br@gmail.com", "_self");
      }}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {props.name == "LinkedIn" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaLinkedin
            style={{ paddingRight: "5px" }}
            size={35}
            color={props.sideMenu ? "white" : "#999"}
          />
          {props.sideMenu && (
            <p style={{ fontSize: "18px", color: "white" }}>LinkedIn</p>
          )}
        </div>
      ) : props.name == "GitHub" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaGithub
            style={{ paddingRight: "5px" }}
            size={35}
            color={props.sideMenu ? "white" : "#999"}
          />
          {props.sideMenu && (
            <p style={{ fontSize: "18px", color: "white" }}>GitHub</p>
          )}
        </div>
      ) : (
        props.name == "Email" && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MdEmail
              style={{ paddingRight: "5px" }}
              size={35}
              color={props.sideMenu ? "white" : "#999"}
            />
            {props.sideMenu && (
              <p style={{ fontSize: "18px", color: "white" }}>Email</p>
            )}
          </div>
        )
      )}
      {!props.sideMenu && isMouseOver && (
        <p style={{ fontSize: "14px", color: "#777" }}>{props.name}</p>
      )}
    </div>
  );
}
