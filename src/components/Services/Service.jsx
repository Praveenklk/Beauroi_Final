import Section from "../Section";
import Header from "../Header";
import { VortexDemo } from "../AceternityUi/VortexBg";
import FooterValue from "../Footer/FooterValue";
import { motion } from "framer-motion";
import { AppleCardsCarouselDemo } from "../AceternityUi/AppleCard";
import Heading from "../Heading";
import { useTheme } from "../../context/ThemeContext";

const ServiceCard = () => {
  const { isDarkMode } = useTheme();
  const services = [
    {
      title: "Design",
      description:
        "Experience excellence in design with tailored solutions, crafted to elevate your brand and captivate your audience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0l4 4m-4-4H8m4 0l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Development",
      description:
        "Build robust, scalable applications with cutting-edge technology and a user-first approach.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 13h-4v-4h4m0 0v-4m0 4h4m-8 0H4"
          />
        </svg>
      ),
    },
    {
      title: "Marketing",
      description:
        "Drive engagement and growth with innovative marketing strategies tailored to your audience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Development",
      description:
        "Build robust, scalable applications with cutting-edge technology and a user-first approach.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 13h-4v-4h4m0 0v-4m0 4h4m-8 0H4"
          />
        </svg>
      ),
    },
    {
      title: "Development",
      description:
        "Build robust, scalable applications with cutting-edge technology and a user-first approach.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 13h-4v-4h4m0 0v-4m0 4h4m-8 0H4"
          />
        </svg>
      ),
    },
    {
      title: "Development",
      description:
        "Build robust, scalable applications with cutting-edge technology and a user-first approach.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 13h-4v-4h4m0 0v-4m0 4h4m-8 0H4"
          />
        </svg>
      ),
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const rotateIcon = {
    hidden: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <Section id="how-to-use">
        <div
          className={`pt-[4.75rem] lg:pt-[1rem] overflow-hidden 
          ${isDarkMode ? "bg-n-8" : "bg-white"}`}
        >
          <Header />
        </div>

        <AppleCardsCarouselDemo />

        <section
          className={`py-12 sm:py-16 lg:py-20 
          ${isDarkMode ? "bg-n-8" : "bg-gray-50"}`}
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className={`text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl font-pj
                ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Make every step user-centric
              </h2>
              <p
                className={`mt-4 text-base leading-7 sm:mt-8 font-pj
                ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipis elit
              </p>
            </div>

            <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
              <div class="md:p-8 lg:p-14">
                <svg
                  class="mx-auto"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                    fill="#faf7f7"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                    fill="#faf7f7"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-whtie font-pj">
                  Support
                </h3>
                <p class="mt-5 text-base text-white font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>

              <div class="md:p-8 lg:p-14 md:border-l md:border-white">
                <svg
                  class="mx-auto"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 27H19V45H27V27Z"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 37H1V45H9V37Z"
                    fill="#faf7f7"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45 17H37V45H45V17Z"
                    fill="#faf7f7"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 17L15 7L23 15L37 1"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28 1H37V10"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">
                  Sales
                </h3>
                <p class="mt-5 text-base text-white font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>

              <div class="md:p-8 lg:p-14 md:border-l md:border-white">
                <svg
                  class="mx-auto"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41 1H1V41H41V1Z"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 7H7V20H18V7Z"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 26H7V35H18V26Z"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35 7H24V35H35V7Z"
                    fill="#faf7f7"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">
                  Onboarding
                </h3>
                <p class="mt-5 text-base text-white font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>

              <div class="md:p-8 lg:p-14 md:border-t md:border-whtie">
                <svg
                  class="mx-auto"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                    fill="#faf7f7"
                  />
                  <path
                    d="M9 9H33"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 17H33"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 25H13V31H29V25H41"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-whtie font-pj">
                  Product
                </h3>
                <p class="mt-5 text-base text-whtie font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>

              <div class="md:p-8 lg:p-14 md:border-l md:border-whtie md:border-t">
                <svg
                  class="mx-auto"
                  width="46"
                  height="42"
                  viewBox="0 0 46 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                    fill="#faf7f7"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-whtie font-pj">
                  Quality
                </h3>
                <p class="mt-5 text-base text-whtie font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>

              <div class="md:p-8 lg:p-14 md:border-l md:border-whtie md:border-t">
                <svg
                  class="mx-auto"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
                    fill="#faf7f7"
                    stroke="#faf7f7"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-whtie font-pj">
                  Result
                </h3>
                <p class="mt-5 text-base text-whtie font-pj">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* hero component end */}

        <div
          className={`w-[90%] m-auto min-h-screen font-sans overflow-x-hidden
          ${isDarkMode ? "bg-n-8 text-white" : "bg-white text-gray-900"}`}
        >
          <section className="py-28 px-6 md:px-20 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
            >
              Discover What We Do
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-3 gap-10"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={index + 1}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-8 rounded-2xl border shadow-lg transition-all transform hover:-translate-y-2
                    ${
                      isDarkMode
                        ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-pink-500/40"
                        : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-blue-500/20"
                    }`}
                >
                  <motion.div
                    variants={rotateIcon}
                    whileHover="hover"
                    className={`absolute top-[-40px] left-1/2 transform -translate-x-1/2
                      ${isDarkMode ? "text-cyan-400" : "text-blue-500"}`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3
                    className={`text-xl font-bold mb-3 tracking-wide
                    ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}
                  >
                    {service.title}
                  </h3>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
        <FooterValue />
      </Section>
    </>
  );
};

export default ServiceCard;
