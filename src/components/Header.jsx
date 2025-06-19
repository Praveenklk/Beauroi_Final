// filepath: c:\Projects\BrainWave\frontend\src\components\Header.jsx
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { beauroi } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b 
        ${isDarkMode ? "border-n-6 bg-n-8/90" : "border-gray-200 bg-white/90"} 
        lg:backdrop-blur-sm ${
          openNavigation
            ? isDarkMode
              ? "bg-n-8"
              : "bg-white"
            : isDarkMode
            ? "bg-n-8/90"
            : "bg-white/90"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img src={beauroi} width={150} height={35} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 
          ${isDarkMode ? "bg-n-8" : "bg-white"} 
          lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase transition-colors 
                  ${isDarkMode ? "hover:text-color-1" : "hover:text-blue-600"}
                  ${item.onlyMobile ? "lg:hidden" : ""} 
                  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs 
                  ${
                    location.pathname === item.url
                      ? `font-bold ${isDarkMode ? "text-n-1" : "text-gray-900"}`
                      : `font-normal ${
                          isDarkMode ? "text-n-1/50" : "text-gray-600"
                        }`
                  } 
                  lg:leading-5 lg:hover:text-black xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HambugerMenu />
        </nav>

        <button
          onClick={toggleTheme}
          className={`mr-4 p-2 rounded-full transition-colors
            ${
              isDarkMode
                ? "hover:bg-n-7 text-yellow-500"
                : "hover:bg-gray-100 text-blue-600"
            }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <HiSun className="w-5 h-5" />
          ) : (
            <HiMoon className="w-5 h-5" />
          )}
        </button>

        <a
          href="/contact"
          className={`button hidden mr-8 transition-colors 
            ${isDarkMode ? "hover:text-n-1" : "hover:text-gray-900"} lg:block 
            ${
              location.pathname === "/contact"
                ? `font-bold ${isDarkMode ? "text-n-1" : "text-gray-900"}`
                : `font-normal ${isDarkMode ? "text-n-1/50" : "text-gray-600"}`
            }`}
        >
          Contact
        </a>

        <Button
          className={`hidden lg:flex ${
            location.pathname === "/product" ? "font-bold" : "font-normal"
          }`}
          href="/product"
        >
          Products
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
