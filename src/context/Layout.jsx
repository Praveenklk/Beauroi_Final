import { useTheme } from "../context/ThemeContext";
import Header from "./Header";

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <main
        className={`transition-colors duration-200 
        ${isDarkMode ? "bg-n-8 text-white" : "bg-white text-gray-900"}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
