import { GoPackageDependents } from "react-icons/go";
import { FaRegPlayCircle } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <div
      style={{
        width: "240px",
        minWidth: "200px",
        height: "150px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #333, #444, #333)",
        boxShadow: "0px 3px 3px #000",
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
