export default function ScrollDownArrow() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: "-1",
      }}
    >
      <svg
        width="101"
        height="30"
        viewBox="0 0 101 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="56.5495"
          height="7.46785"
          rx="3.73393"
          transform="matrix(0.918324 -0.395829 0.293779 0.955873 46.8754 22.384)"
          fill="#A9A9A9"
        />
        <rect
          width="56.5495"
          height="7.46785"
          rx="3.73393"
          transform="matrix(0.918324 0.395829 -0.293779 0.955873 2.19385 3.05176e-05)"
          fill="#A9A9A9"
        />
      </svg>
    </div>
  );
}
