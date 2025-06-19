"use client";
import { Box, Lock, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";
import React, { useState, useEffect } from "react";
import { TracingBeam } from "../ui/tracing-beam";

export function GlowingEffectDemoSecond() {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const selectBoxContent = (index) => {
    setSelectedBoxIndex(index);
    document
      .getElementById("content-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid of clickable cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="h-auto aspect-square sm:aspect-auto">
            <GridItem
              icon={
                <Lock className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Background"
              description="Project background details"
              onClick={() => selectBoxContent(0)}
              isActive={selectedBoxIndex === 0}
            />
          </div>

          <div className="space-y-4">
            <div className="h-auto">
              <GridItem
                icon={
                  <Box className="h-4 w-4 text-black dark:text-neutral-400" />
                }
                title="Challenges"
                description="Project challenges"
                onClick={() => selectBoxContent(1)}
                isActive={selectedBoxIndex === 1}
              />
            </div>
            <div className="h-auto">
              <GridItem
                icon={
                  <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
                }
                title="Solutions"
                description="Implemented solutions"
                onClick={() => selectBoxContent(2)}
                isActive={selectedBoxIndex === 2}
              />
            </div>
          </div>

          <div className="h-auto">
            <GridItem
              icon={
                <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Results"
              description="Project outcomes"
              onClick={() => selectBoxContent(3)}
              isActive={selectedBoxIndex === 3}
            />
          </div>

          <div className="h-auto">
            <GridItem
              icon={
                <Lock className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Extended Info"
              description="Additional background content"
              onClick={() => selectBoxContent(0)}
              isActive={selectedBoxIndex === 0}
            />
          </div>
        </div>

        {/* Single TracingBeam wrapper for smooth beam across all blocks */}
        <TracingBeam className="px-4 sm:px-6">
          <div id="content-section" className="mt-12 space-y-12">
            {allContentVariations[selectedBoxIndex].map((content, index) => (
              <div
                key={`content-${index}`}
                className="max-w-4xl mx-auto antialiased pt-4 relative"
              >
                <div>
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {content.badge}
                  </h2>
                  <p className="font-calsans text-xl mb-4 font-semibold">
                    {content.title}
                  </p>
                  <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
                    {content?.image && (
                      <img
                        src={content.image}
                        alt="thumbnail"
                        className="rounded-lg mb-6 w-full object-cover max-h-96"
                      />
                    )}
                    {content.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

const GridItem = ({ icon, title, description, onClick, isActive }) => (
  <div
    className={`group relative h-full rounded-2xl p-[1px] bg-transparent 
    transition-all duration-300 cursor-pointer hover:-translate-y-1
    before:absolute before:w-full before:h-full before:rounded-2xl before:z-10
    before:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)]
    before:bg-[length:250%_250%,100%_100%] before:animate-border-rotate
    hover:before:bg-[linear-gradient(45deg,transparent_25%,rgba(68,128,255,.6)_50%,transparent_75%,transparent_100%)]
    ${isActive ? "ring-2 ring-blue-500" : ""}`}
    onClick={onClick}
  >
    <GlowingEffect
      blur={0}
      borderWidth={3}
      spread={60}
      glow={true}
      disabled={false}
      proximity={50}
      inactiveZone={0.01}
    />
    <div className="relative flex h-full flex-col justify-between gap-4 p-4">
      <div className="w-fit rounded-lg border border-gray-600 p-2 bg-white/10">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-sans text-base sm:text-lg font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-black dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const allContentVariations = [
  [
    {
      title: "Background A",
      badge: "Background",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      description: (
        <>
          This section discusses the project origins, use-case identification,
          stakeholders involved, and initial problems before development.
        </>
      ),
    },
    {
      title: "Background B",
      badge: "Background",
      image: "https://images.unsplash.com/photo-1581091870622-1e7b1c2c81e1",
      description: (
        <>
          Here we dive into earlier data systems and why modernization was
          necessary.
        </>
      ),
    },
    {
      title: "Background C",
      badge: "Background",
      image: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d9",
      description: (
        <>User feedback from preliminary stages shaped the platform features.</>
      ),
    },
  ],
  [
    {
      title: "Challenge A",
      badge: "Challenges",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      description: (
        <>Lack of standard formats in archival systems caused confusion.</>
      ),
    },
    {
      title: "Challenge B",
      badge: "Challenges",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: (
        <>Limited access controls led to data tampering incidents.</>
      ),
    },
    {
      title: "Challenge C",
      badge: "Challenges",
      image: "https://images.unsplash.com/photo-1611926653458-09294fbfdb7d",
      description: <>No real-time monitoring existed for process tracking.</>,
    },
  ],
  [
    {
      title: "Solution A",
      badge: "Solutions",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      description: (
        <>
          Introduced OCR engines with custom dictionaries for domain
          recognition.
        </>
      ),
    },
    {
      title: "Solution B",
      badge: "Solutions",
      image: "https://images.unsplash.com/photo-1581091215367-59f41c8ce2eb",
      description: (
        <>Secure cloud platform deployed using AES encryption for user data.</>
      ),
    },
    {
      title: "Solution C",
      badge: "Solutions",
      image: "https://images.unsplash.com/photo-1633979936641-620d8935793c",
      description: (
        <>Dashboards were introduced with drill-down capabilities for admins.</>
      ),
    },
  ],
  [
    {
      title: "Result A",
      badge: "Results",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      description: (
        <>60% improvement in record retrieval time across all departments.</>
      ),
    },
    {
      title: "Result B",
      badge: "Results",
      image: "https://images.unsplash.com/photo-1531497865144-0464ef8fbf10",
      description: (
        <>Average training time reduced by 40% due to clear UI/UX guides.</>
      ),
    },
    {
      title: "Result C",
      badge: "Results",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
      description: (
        <>
          User satisfaction improved, leading to an increase in platform
          adoption.
        </>
      ),
    },
  ],
];

export default GlowingEffectDemoSecond;
