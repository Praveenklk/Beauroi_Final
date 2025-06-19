import React from "react";
import Header from "../Header";
import Section from "../Section";
import Heading from "../Heading";
import FooterValue from "../Footer/FooterValue";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
  return (
    <Section id="how-to-use">
      <div className={`min-h-screen ${isDarkMode ? "bg-n-8" : "bg-gray-50"}`}>
        <div className="pt-[4.75rem] lg:pt-[2rem]">
          <Header />

          <section className="container mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
              <Heading
                tag="Contact"
                title="Let's Build Something Great Together"
              />
              <p
                className={`mt-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto`}
              >
                Have questions or want to discuss a project? We'd love to hear
                from you.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              {/* Contact Info Card */}
              <div
                className={`space-y-8 p-8 rounded-2xl ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800"
                    : "bg-white border-gray-200"
                } backdrop-blur-sm border`}
              >
                <div>
                  <h3
                    className={`text-2xl font-bold mb-6 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Contact Information
                  </h3>
                  {/* Contact Details */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        ),
                        title: "Office Location",
                        content:
                          "100 Smith Street, Melbourne VIC 3000, Australia",
                      },
                      {
                        icon: (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        ),
                        title: "Email Address",
                        content: "contact@brainwave.com",
                      },
                      {
                        icon: (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        ),
                        title: "Phone Number",
                        content: "+1 (555) 000-0000",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full 
                          ${
                            isDarkMode
                              ? "bg-blue-500/10 text-blue-400"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h4
                            className={`text-lg font-medium ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </h4>
                          <p
                            className={`mt-1 ${
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div
                  className={`pt-8 border-t ${
                    isDarkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <h4
                    className={`text-lg font-medium mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Follow Us
                  </h4>
                  <div className="flex space-x-5">
                    {[
                      {
                        name: "Twitter",
                        href: "#",
                        icon: (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        ),
                      },
                      {
                        name: "LinkedIn",
                        href: "#",
                        icon: (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        ),
                      },
                      {
                        name: "Twitter",
                        href: "#",
                        icon: (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        ),
                      },
                      {
                        name: "LinkedIn",
                        href: "#",
                        icon: (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        ),
                      },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`p-8 rounded-2xl ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800"
                    : "bg-white border-gray-200"
                } backdrop-blur-sm border`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 
                        ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg transition-colors
                          ${
                            isDarkMode
                              ? "bg-gray-900 border-gray-800 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                          }
                          border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg transition-colors
                          ${
                            isDarkMode
                              ? "bg-gray-900 border-gray-800 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                          }
                          border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg transition-colors
                          ${
                            isDarkMode
                              ? "bg-gray-900 border-gray-800 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                          }
                          border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg transition-colors
                          ${
                            isDarkMode
                              ? "bg-gray-900 border-gray-800 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                          }
                          border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-lg font-medium transition-all transform
                      hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white focus:ring-offset-gray-900"
                          : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-offset-white"
                      }`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <Heading
              tag="Location"
              title="Vsit Us at Our Locations"
              className="pt-24"
            />
            <div
              className={`mt-20 rounded-2xl mb-20 max-w-7xl mx-auto border 
              ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              } overflow-hidden`}
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p-4 h-[500px]">
                {/* Location 1 - Beau Roi Technologies */}
                <iframe
                  title="Beau Roi Technologies"
                  className="w-full h-full rounded-xl border border-gray-700"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.291568044902!2d80.2264466!3d12.9106462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x621d2f554958a7ed%3A0x3731d0b11bae4075!2sBeau%20Roi%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1685633884290!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>

                {/* Location 2 */}
                <iframe
                  title="New Location"
                  className="w-full h-full rounded-xl border border-gray-700"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3684297851096!2d-0.4000288!3d51.6568675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac1843dd73d%3A0x2f60ed82acd508af!2sWilmington%20Cl%2C%20Watford%2C%20UK!5e0!3m2!1sen!2sin!4v1715508932990!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Heading
        tag="NewsLetter"
        title="Subscribe to Our Newsletter"
        text="Gear Up To Embark On A Journey Towards A Greatest Feature"
      />

      <div
        className={`relative w-full max-w-5xl mx-auto px-4 pt-12 
        ${isDarkMode ? "bg-n-8" : "bg-gray-50"}`}
      >
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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

      <FooterValue />
    </Section>
  );
};

export default Contact;
