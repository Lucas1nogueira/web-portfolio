import SocialButton from "./SocialButton";

export default function Header() {
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
      }}
    >
      <h1 style={{ fontSize: "35px", color: "white", padding: "30px 57px" }}>
        Web Portfolio
      </h1>
      <div style={{ display: "flex", flexDirection: "row", padding: "0 57px" }}>
        <SocialButton type="linkedin" />
        <SocialButton type="github" />
        <SocialButton type="email" />
      </div>
    </div>
  );
}
