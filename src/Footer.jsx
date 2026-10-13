import { FaCheckCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="matte-surface-inset"
      style={{
        width: "100%",
        margin: 0,
        background: "var(--section-light-bg)",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--text-primary)",
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
        Last updated in 2026
      </p>
    </div>
  );
}
