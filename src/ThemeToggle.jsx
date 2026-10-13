import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle(props) {
  const iconColor = props.sideMenu ? "white" : "var(--text-muted-2)";

  return (
    <button
      className={`theme-toggle matte-3d ${props.sideMenu ? "sideMenu" : ""}`}
      onClick={props.toggleTheme}
      aria-label="Toggle dark mode"
    >
      {props.theme === "dark" ? (
        <MdLightMode size={22} color={iconColor} />
      ) : (
        <MdDarkMode size={22} color={iconColor} />
      )}
    </button>
  );
}
