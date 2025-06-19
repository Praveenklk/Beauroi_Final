import React, { useState } from "react";
import Header from "../Header";
import Section from "../Section";
import { useTheme } from "../../context/ThemeContext";

import {
  animelocation,
  check,
  service1,
  service2,
  service3,
  siva,
} from "../../assets";

import {
  brainwaveServices,
  brainwaveServicesIcons,
  cardData,
  people,
  locationabout,
} from "../../constants";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Generating from "../Generating";
import {
  PhotChatMessage,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";
import { Gradient } from "../design/Hero";
import Heading from "../Heading";
import { ExpandableCardDemo } from "../AceternityUi/UseOutsideClick";
import { TracingBeamDemo } from "../AceternityUi/TracingBeam";
import { ThreeDCardDemo } from "../AceternityUi/3dCard";
import { WorldMapDemo } from "../AceternityUi/WorldMap";
import { TimelineDemo } from "../AceternityUi/TimeLineView";
import FooterValue from "../Footer/FooterValue";
import { ThreeDMarqueeDemoSecond } from "../AceternityUi/3dMarquee";
import TeamGrid from "../../pages/AnimatedCarousel";

const AboutHeader = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const { isDarkMode } = useTheme();

  const handleViewProfile = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseModal = () => {
    setSelectedPerson(null);
  };

  return (
    <Section id="how-to-use">
      <div
        className={`pt-[4.75rem] lg:pt-[2rem] overflow-hidden ${
          isDarkMode ? "bg-n-8" : "bg-white"
        }`}
      >
        <Header />

        <Section id="how-to-use">
          <div className="pt-[4.75rem] lg:pt-[1.25rem] overflow-hidden">
            <Heading tag="About Us" title="Know More About Us" />
          </div>
          <ThreeDMarqueeDemoSecond />
          <div className="container">
            <Heading text="Delivering smart and reliable software solutions to help businesses grow " />

            <div className="relative">
              <div
                className={`relative z-1 flex items-center h-[39rem] mb-5 p-8 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] border ${
                  isDarkMode ? "border-n-6" : "border-n-1/10"
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
                      isDarkMode ? "text-white" : "text-black"
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
                    environments. We believe that no two organisations are
                    alike, and therefore, their cloud strategies should be just
                    as unique
                  </p>
                  <ul className="body-2">
                    {brainwaveServices.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-start py-4 border-t ${
                          isDarkMode ? "border-n-6" : "border-gray-200"
                        }`}
                      >
                        <img width={24} height={24} src={check} alt="check" />
                        <p
                          className={`ml-4 ${
                            isDarkMode ? "text-n-3" : "text-gray-600"
                          }`}
                        >
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <Generating
                  className={`absolute left-4 right-4 bottom-4 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 ${
                    isDarkMode ? "border-n-6" : "border-n-1/10"
                  }`}
                />
              </div>

              <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                <div
                  className={`relative min-h-[39rem] rounded-3xl overflow-hidden border ${
                    isDarkMode ? "border-n-6" : "border-n-1/10"
                  }`}
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
                    className={`absolute inset-0 flex flex-col justify-end p-8 ${
                      isDarkMode
                        ? "bg-gradient-to-b from-n-8/0 to-n-8/90"
                        : "bg-gradient-to-b from-white/0 to-white/90"
                    } lg:p-15`}
                  >
                    <h4
                      className={`h4 mb-4 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Our Core Values
                    </h4>
                    <p
                      className={`body-2 mb-[3rem] ${
                        isDarkMode ? "text-n-3" : "text-gray-600"
                      }`}
                    >
                      Excellence Through Execution We focus on quality,
                      performance, and precision — from planning to deployment.
                      <br />
                      <br />
                      Adaptability & Agility In a fast-changing digital world,
                      we stay flexible and quick to adapt, so your solutions are
                      always future-ready.
                    </p>
                  </div>

                  <PhotChatMessage />
                </div>

                <div
                  className={`p-4 rounded-3xl overflow-hidden lg:min-h-[46rem] ${
                    isDarkMode ? "bg-n-7" : "bg-gray-50"
                  }`}
                >
                  <div className="py-12 px-4 xl:px-8">
                    <h4
                      className={`h4 mb-4 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Our Mission
                    </h4>
                    <p
                      className={`body-2 mb-[2rem] ${
                        isDarkMode ? "text-n-3" : "text-gray-600"
                      }`}
                    >
                      To be your guiding light, simplify the complexities of
                      multi-cloud environments and empower your organisation to
                      harness their full potential.
                    </p>

                    <ul className="flex items-center justify-between">
                      {brainwaveServicesIcons.map((item, index) => (
                        <li
                          key={index}
                          className={`rounded-2xl flex items-center justify-center ${
                            index === 2
                              ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                              : `flex w-10 h-10 ${
                                  isDarkMode ? "bg-n-6" : "bg-gray-200"
                                } md:w-15 md:h-15`
                          }`}
                        >
                          <div
                            className={
                              index === 2
                                ? `flex items-center justify-center w-full h-full ${
                                    isDarkMode ? "bg-n-7" : "bg-white"
                                  } rounded-[1rem]`
                                : ""
                            }
                          >
                            <img src={item} width={24} height={24} alt="icon" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem] ${
                      isDarkMode ? "bg-n-8" : "bg-gray-100"
                    }`}
                  >
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

          <div className="my-28">
            <Heading
              tag="Beauroi"
              title="Company Goals"
              text="Transforming challenges into success through innovative case studies."
            />
          </div>

          <ThreeDCardDemo />

          <div className="container m-10">
            {/* Rest of the code remains the same... */}
          </div>

          <Section crosses>
            <Heading
              tag="Beauroi"
              title="Our Team"
              text="A diverse team of experts in tech, design, sales, and analytics, delivering impactful solutions through collaboration and innovation."
            />
            <TeamGrid people={people} />
          </Section>

          <Section crosses>
            <WorldMapDemo />
          </Section>

          <Section crosses>
            <TimelineDemo />
            <Heading
              tag="NewsLetter"
              title="Subscribe to Our Newsletter"
              text="Gear Up To Embark On A Journey Towards A Greatest Feature"
            />

            {/* Newsletter section remains the same... */}

            <div className="relative w-full max-w-5xl mx-auto px-4 pt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl" />
              <form className="relative flex flex-col items-center p-8 overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-xl">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center mb-8">
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Join Our Newsletter
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Stay ahead with our latest insights and updates
                  </p>
                </div>

                <div className="relative z-10 flex w-full max-w-md gap-4 p-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                  >
                    Subscribe
                  </button>
                </div>

                {/* Optional: Trust Indicators */}
                <div className="relative z-10 flex items-center gap-6 mt-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Secured by SSL</span>
                  </div>
                </div>
              </form>
            </div>
          </Section>
        </Section>
      </div>
      <FooterValue />
    </Section>
  );
};

export default AboutHeader;
