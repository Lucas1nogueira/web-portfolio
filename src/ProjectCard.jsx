import { GoPackageDependents } from "react-icons/go";
import { FaRegPlayCircle } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <div
      style={{
        width: "240px",
        minWidth: "200px",
        height: "150px",
        marginRight: "30px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #333, #444, #333)",
        boxShadow:
          "6px 6px 12px rgba(0,0,0,0.45), -2px -2px 6px rgba(255,255,255,0.04)",
        borderRadius: "20px",
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "20px" }}>{props.title}</h2>
        <a
          href={props.link}
          target="_blank"
          style={{ textDecoration: "none", color: "yellow" }}
        >
          {props.type == "game" ? (
            <FaRegPlayCircle size={25} style={{ paddingRight: "5px" }} />
          ) : (
            <GoPackageDependents size={25} style={{ paddingRight: "5px" }} />
          )}
        </a>
      </div>
      <p style={{ margin: 0, fontSize: "18px" }}>{props.description}</p>
    </div>
  );
}
