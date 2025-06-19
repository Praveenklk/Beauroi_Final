import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";
import { useTheme } from "../context/ThemeContext";

const Services = () => {
  const { isDarkMode } = useTheme();

  return (
    <Section id="how-to-use" className={isDarkMode ? "bg-n-8" : "bg-white"}>
      <div className="container">
        <Heading
          title="Driven by purpose. Guided by innovation."
          text="To shape a future where technology empowers every individual and organization to achieve more."
        />

        <div className="relative">
          <div
            className={`relative z-1 flex items-center h-[39rem] mb-5 p-8 border rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]
            ${
              isDarkMode ? "border-n-1/10 bg-n-8" : "border-gray-200 bg-white"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4
                className={`h4 mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Vision
              </h4>
              <p
                className={`body-2 mb-[3rem] ${
                  isDarkMode ? "text-n-3" : "text-gray-600"
                }`}
              >
                Our business to leverage the full potential of multi-cloud
                environments. We believe that no two organisations are alike,
                and therefore, their cloud strategies should be just as unique
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start py-4 border-t ${
                      isDarkMode
                        ? "border-n-6 text-n-3"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    <img
                      width={24}
                      height={24}
                      src={check}
                      className={!isDarkMode && "filter brightness-0"}
                    />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating
              className={`absolute left-4 right-4 bottom-4 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2
              ${isDarkMode ? "border-n-1/10" : "border-gray-200"}`}
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div
              className={`relative min-h-[39rem] border rounded-3xl overflow-hidden
              ${isDarkMode ? "border-n-1/10" : "border-gray-200"}`}
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div
                className={`absolute inset-0 flex flex-col justify-end p-8 
                ${
                  isDarkMode
                    ? "bg-gradient-to-b from-n-8/0 to-n-8/90"
                    : "bg-gradient-to-b from-white/0 to-white/90"
                }
                lg:p-15`}
              >
                <h4
                  className={`h4 mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Core Values
                </h4>
                <p
                  className={`body-2 mb-[3rem] ${
                    isDarkMode ? "text-n-3" : "text-gray-600"
                  }`}
                >
                  Excellence Through Execution We focus on quality, performance,
                  and precision — from planning to deployment.
                  <br></br> <br></br> Adaptability & Agility In a fast-changing
                  digital world, we stay flexible and quick to adapt, so your
                  solutions are always future-ready.
                </p>
              </div>

              <PhotChatMessage />
            </div>

            <div
              className={`p-4 rounded-3xl overflow-hidden lg:min-h-[46rem]
              ${isDarkMode ? "bg-n-7" : "bg-gray-100"}`}
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Our Mission</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  To deliver smart, scalable, and human-centered tech solutions
                  while empowering the next generation with industry-ready
                  skills.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
