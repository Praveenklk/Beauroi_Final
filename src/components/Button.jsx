import ButtonSvg from "../assets/svg/ButtonSvg";
import { useTheme } from "../context/ThemeContext";

const Button = ({ className, href, onClick, children, px, white, dark }) => {
  const { isDarkMode } = useTheme();

  const classes = `button relative inline-flex items-center justify-center h-11 
    transition-all duration-300 
    ${px || "px-7"} 
    ${
      white
        ? "text-n-8 hover:text-color-1"
        : dark
        ? "text-white hover:text-color-1"
        : isDarkMode
        ? "text-n-1 hover:text-color-1"
        : "text-gray-900 hover:text-color-1"
    } 
    ${className || ""}`;

  const buttonStyle = white
    ? "hover:bg-n-1/90"
    : dark
    ? "hover:bg-gray-800"
    : isDarkMode
    ? "hover:bg-n-1/10"
    : "hover:bg-gray-100";

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={`${classes} ${buttonStyle}`} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || (!isDarkMode && !dark))}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={`${classes} ${buttonStyle}`}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || (!isDarkMode && !dark))}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
