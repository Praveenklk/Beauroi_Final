import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const parallaxRef = useRef(null);
  const { isDarkMode } = useTheme();

  return (
    <Section
      className={`pt-[12rem] -mt-[5.25rem] 
        ${isDarkMode ? "bg-n-8" : "bg-white"}
        transition-colors duration-200`}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1
            className={`h1 mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Step into success and passion with{` `}
            <span className="inline-block relative">
              Beau Roi{" "}
              <img
                src={curve}
                className={`absolute top-full left-0 w-full xl:-mt-2 
                  ${isDarkMode ? "opacity-100" : "opacity-80"}`}
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p
            className={`body-1 max-w-3xl mx-auto mb-6 
            ${isDarkMode ? "text-n-2" : "text-gray-600"} lg:mb-8`}
          >
            Where Innovation Shapes Your Business Future. Explore Brilliance
            Now!
          </p>

          <Button
            href="/contact"
            white={isDarkMode}
            className={isDarkMode ? "hover:bg-n-1/10" : "hover:bg-gray-100"}
          >
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div
            className={`relative z-1 p-0.5 rounded-2xl 
            ${isDarkMode ? "bg-conic-gradient" : "bg-gray-200"}`}
          >
            <div
              className={`relative rounded-[1rem] 
              ${isDarkMode ? "bg-n-8" : "bg-white"}`}
            >
              <div
                className={`h-[1.4rem] rounded-t-[0.9rem] 
                ${isDarkMode ? "bg-n-10" : "bg-gray-100"}`}
              />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className={`w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[18%]
                    ${!isDarkMode && "opacity-90"}`}
                  width={1024}
                  height={790}
                  alt="AI"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <Generating
                    className={`absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2
                    ${
                      isDarkMode ? "bg-n-8/90" : "bg-white/90"
                    } backdrop-blur-sm`}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <ul
                    className={`hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 
                    ${
                      isDarkMode
                        ? "bg-n-9/40 border-n-1/10"
                        : "bg-white/40 border-gray-200"
                    } 
                    backdrop-blur border rounded-2xl xl:flex`}
                  >
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img
                          src={icon}
                          width={24}
                          height={25}
                          alt={icon}
                          className={
                            !isDarkMode && "filter brightness-0 opacity-70"
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className={`hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex
                      ${
                        isDarkMode
                          ? "text-white bg-n-8/90"
                          : "text-gray-900 bg-white/90"
                      } 
                      backdrop-blur-sm`}
                    title="Let's Grow Together with Beauroi"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className={`w-full ${!isDarkMode && "opacity-0"}`}
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos
          className={`hidden relative z-10 mt-20 lg:block
            ${isDarkMode ? "opacity-90" : "opacity-75"}`}
        />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
