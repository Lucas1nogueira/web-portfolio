import { FaCheckCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        background: "linear-gradient(to right, #bbb, #eee, #aaa)",
        justifyContent: "center",
        alignItems: "center",
        color: "#333",
        padding: "25px 0",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        <FaCheckCircle size={16} style={{ paddingRight: "5px" }} />
        Updated in 2025 by me
      </p>
    </div>
  );
}
