"use client";
import { useTheme } from "../../context/ThemeContext";
import { ThreeDMarquee } from "../ui/3d-marquee";
import { ContainerTextFlipDemo } from "./Container-text";

export function ThreeDMarqueeDemoSecond() {
  const { isDarkMode } = useTheme();
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div className="relative mx-auto mb-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2
        className={`relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance 
        ${isDarkMode ? "text-white" : "text-gray-900"} md:text-4xl lg:text-6xl`}
      >
        This is your life and it&apos;s ending one{" "}
        <span
          className={`relative z-20 inline-block rounded-xl px-4 py-1 
          ${isDarkMode ? "text-white" : "text-gray-900"} 
          underline decoration-sky-500 decoration-[6px] underline-offset-[16px] 
          ${isDarkMode ? "backdrop-blur-sm" : "backdrop-blur-none"}`}
        >
          <ContainerTextFlipDemo />
        </span>{" "}
        at a time.
      </h2>
      <p
        className={`relative z-20 mx-auto max-w-2xl py-8 text-center text-sm 
        ${isDarkMode ? "text-neutral-200" : "text-gray-600"} md:text-base`}
      >
        You are not your job, you&apos;re not how much money you have in the
        bank. You are not the car you drive. You&apos;re not the contents of
        your wallet.
      </p>
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          className={`rounded-md ${
            isDarkMode
              ? "bg-sky-600 hover:bg-sky-700 text-white"
              : "bg-sky-500 hover:bg-sky-600 text-white"
          } 
          px-6 py-2.5 text-sm font-medium transition-colors 
          focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 
          ${isDarkMode ? "focus:ring-offset-black" : "focus:ring-offset-white"} 
          focus:outline-none`}
        >
          <a href="/contact">Join the club</a>
        </button>
        <button
          className={`rounded-md transition-colors focus:outline-none
          ${
            isDarkMode
              ? "border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
              : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-white"
          } 
          px-6 py-2.5 text-sm font-medium`}
        >
          Read more
        </button>
      </div>

      {/* overlay */}
      <div
        className={`absolute inset-0 z-10 h-full w-full 
        ${isDarkMode ? "bg-black/80" : "bg-white/80"}`}
      />

      <ThreeDMarquee
        className={`pointer-events-none absolute inset-0 h-full w-full
          ${!isDarkMode && "opacity-90"}`}
        images={images}
      />
    </div>
  );
}
