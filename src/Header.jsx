import { LuMenuSquare } from "react-icons/lu";
import SocialButton from "./SocialButton";

export default function Header(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background:
          window.innerWidth < 1080 &&
          "radial-gradient(circle at center, #8D8258 30%, #5b522e 100%)",
      }}
    >
      {window.innerWidth < 1080 && (
        <LuMenuSquare
          style={{ padding: "10px 15px" }}
          size={35}
          color="white"
          onClick={props.openMenu}
        />
      )}
      <h1
        style={
          window.innerWidth > 1080
            ? { fontSize: "35px", color: "white", padding: "30px 57px" }
            : { fontSize: "35px", color: "white", padding: "10px 15px" }
        }
      >
        Web Portfolio
      </h1>
      {window.innerWidth > 1080 && (
        <div
          style={{ display: "flex", flexDirection: "row", padding: "0 57px" }}
        >
          <SocialButton name="LinkedIn" />
          <SocialButton name="GitHub" />
          <SocialButton name="Email" />
        </div>
      )}
    </div>
  );
}
