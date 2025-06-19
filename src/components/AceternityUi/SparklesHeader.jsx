"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Heading from "../Heading";
import { useTheme } from "../../context/ThemeContext"; // Add this import

export function SparklesPreview() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`h-[25rem] w-full ${isDarkMode ? "bg-n-8" : "bg-white"} 
      flex flex-col items-center justify-center overflow-hidden rounded-md 
      transition-colors duration-200`}
    >
      <Heading
        tag="Beauroi"
        title="SERVICES"
        text="Empowering businesses with tailored digital solutions to drive growth and innovation."
      />
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div
          className={`absolute inset-x-20 top-0 bg-gradient-to-r 
          ${
            isDarkMode
              ? "from-transparent via-indigo-500 to-transparent"
              : "from-transparent via-blue-500 to-transparent"
          } 
          h-[2px] w-3/4 blur-sm`}
        />
        <div
          className={`absolute inset-x-20 top-0 bg-gradient-to-r 
          ${
            isDarkMode
              ? "from-transparent via-indigo-500 to-transparent"
              : "from-transparent via-blue-500 to-transparent"
          } 
          h-px w-3/4`}
        />
        <div
          className={`absolute inset-x-60 top-0 bg-gradient-to-r 
          ${
            isDarkMode
              ? "from-transparent via-sky-500 to-transparent"
              : "from-transparent via-blue-400 to-transparent"
          } 
          h-[5px] w-1/4 blur-sm`}
        />
        <div
          className={`absolute inset-x-60 top-0 bg-gradient-to-r 
          ${
            isDarkMode
              ? "from-transparent via-sky-500 to-transparent"
              : "from-transparent via-blue-400 to-transparent"
          } 
          h-px w-1/4`}
        />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={isDarkMode ? "#FFFFFF" : "#1E40AF"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className={`absolute inset-0 w-full h-full 
          ${isDarkMode ? "bg-n-8" : "bg-white"} 
          [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]
          transition-colors duration-200`}
        ></div>
      </div>
    </div>
  );
}
