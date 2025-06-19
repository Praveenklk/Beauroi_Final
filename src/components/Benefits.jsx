import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { SparklesPreview } from "./AceternityUi/SparklesHeader";
import { PiGreaterThanBold } from "react-icons/pi";
import { useTheme } from "../context/ThemeContext"; // Add this import

const Benefits = () => {
  const { isDarkMode } = useTheme(); // Add this line

  return (
    <Section id="features" className={isDarkMode ? "bg-n-8" : "bg-white"}>
      <div className="container relative z-2">
        <SparklesPreview />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]`}
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5
                  className={`h5 mb-5 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h5>
                <p
                  className={`body-2 mb-6 ${
                    isDarkMode ? "text-n-3" : "text-gray-600"
                  }`}
                >
                  {item.text}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className={isDarkMode ? "" : "filter brightness-0"}
                  />
                  <div className="pointer-events-auto mx-4">
                    <a
                      className={`font-code text-xs font-bold uppercase tracking-wider cursor-pointer 
                        flex items-center gap-2 transition-colors
                        ${
                          isDarkMode
                            ? "text-n-1 hover:text-color-1"
                            : "text-gray-900 hover:text-blue-600"
                        }`}
                      href="/service"
                    >
                      view More <PiGreaterThanBold className="inline-block" />
                    </a>
                  </div>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className={`absolute inset-0.5 ${
                  isDarkMode ? "bg-n-8" : "bg-gray-100"
                }`}
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
