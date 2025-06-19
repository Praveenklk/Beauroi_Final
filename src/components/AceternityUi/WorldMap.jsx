"use client";
import { useTheme } from "../../context/ThemeContext";
import { WorldMap } from "../ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`py-1 w-full transition-colors duration-200 
      ${isDarkMode ? "bg-n-8" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className={`font-bold text-xl md:text-4xl 
          ${isDarkMode ? "text-white" : "text-gray-900"}`}
        >
          Remote{" "}
          <span className={`${isDarkMode ? "text-n-3" : "text-gray-400"}`}>
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p
          className={`text-sm md:text-lg max-w-2xl mx-auto py-4
          ${isDarkMode ? "text-n-4" : "text-gray-500"}`}
        >
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 41.5074, lng: -1.1278, name: "London , England" },
            end: { lat: 13.0827, lng: 80.2707, name: "Chennai" },
          },
          {
            start: { lat: 41.5074, lng: -1.1278, name: "London , England" },
            end: { lat: -33.8688, lng: 151.2093, name: "Sydney, Australia" },
          },
          {
            start: { lat: 41.5074, lng: -1.1278, name: "London , England" },
            end: { lat: 25.276987, lng: 55.296249, name: "Dubai, UAE" },
          },
          {
            start: { lat: 41.5074, lng: -1.1278, name: "London , England" },
            end: { lat: 45.4215, lng: -75.6972, name: "Ottawa, Canada" },
          },
          {
            start: { lat: 41.5074, lng: -1.1278, name: "London , England" },
            end: { lat: -1.2921, lng: 36.8219, name: "Nairobi" },
          },
          {
            start: { lat: 41.5074, lng: -1.1278, name: "London , England" },
            end: { lat: 46.8182, lng: 8.2275, name: "Switzerland" },
          },
        ]}
      />
    </div>
  );
}
