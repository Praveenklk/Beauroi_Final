import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { useTheme } from "../context/ThemeContext";

const Roadmap = () => {
  const { isDarkMode } = useTheme();

  return (
    <Section
      className={`overflow-hidden ${isDarkMode ? "bg-n-8" : "bg-white"}`}
      id="roadmap"
    >
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] 
                  ${
                    item.colorful
                      ? "bg-conic-gradient"
                      : isDarkMode
                      ? "bg-n-6"
                      : "bg-gray-200"
                  }`}
                key={item.id}
                style={{ whiteSpace: "pre-line" }}
              >
                <div
                  className={`relative p-8 rounded-[2.4375rem] overflow-hidden xl:p-15
                  ${isDarkMode ? "bg-n-8" : "bg-white"}`}
                >
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className={`w-full ${!isDarkMode && "opacity-50"}`}
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline
                        className={isDarkMode ? "text-n-1/50" : "text-gray-500"}
                      >
                        {item.date}
                      </Tagline>

                      <div
                        className={`flex items-center px-4 py-1 rounded
                        ${
                          isDarkMode
                            ? "bg-n-1 text-n-8"
                            : "bg-gray-900 text-white"
                        }`}
                      >
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4
                      className={`h4 mb-4 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`body-2 ${
                        isDarkMode ? "text-n-4" : "text-gray-600"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/service">Know More About Us</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
