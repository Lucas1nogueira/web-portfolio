import ScrollDownArrow from "./ScrollDownArrow";
import ProfileImage from "./assets/profile.png";

export default function Presentation() {
  return (
    <div
      style={{
        width: "100%",
        height: window.innerHeight,
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        color: "#777",
        paddingLeft: "550px",
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
        <h1 style={{ marginRight: "25px", fontSize: "45px" }}>
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
      {window.innerWidth > 1080 && <ScrollDownArrow />}
    </div>
  );
}
