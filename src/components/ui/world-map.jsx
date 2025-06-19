"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "../../context/ThemeContext";

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const [svgMap, setSvgMap] = useState("");
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const { isDarkMode } = useTheme();

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const handlePointHover = (lat, lng, name) => {
    const point = projectPoint(lat, lng);
    setTooltipPos({
      x: point.x,
      y: point.y - 15, // Offset upward
    });
    setHoveredPoint(name);
  };

  useEffect(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const svg = map.getSVG({
      radius: 0.22,
      color: isDarkMode ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: isDarkMode ? "#0d1117" : "#ffffff",
    });
    setSvgMap(svg);
  }, [isDarkMode]);

  return (
    <div className="flex justify-center items-center min-h-[30vh] sm:min-h-screen px-4">
      <div
        className={`w-full max-w-7xl aspect-[2/1] rounded-lg relative font-sans shadow-lg
        ${isDarkMode ? "bg-n-8" : "bg-white"} 
        transition-colors duration-200`}
      >
        {svgMap && (
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            className={`h-full w-full pointer-events-none select-none
              [mask-image:linear-gradient(to_bottom,transparent,${
                isDarkMode ? "white" : "black"
              }_10%,${isDarkMode ? "white" : "black"}_90%,transparent)]`}
            alt="world map"
            height="495"
            width="1056"
            draggable={false}
          />
        )}
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        >
          {/* Paths */}
          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * i,
                    ease: "easeOut",
                  }}
                />
              </g>
            );
          })}

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredPoint && (
              <foreignObject
                x={tooltipPos.x - 60}
                y={tooltipPos.y - 40}
                width="120"
                height="60"
                className="overflow-visible pointer-events-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg shadow-xl
                    ${
                      isDarkMode
                        ? "bg-gray-900/95 backdrop-blur-sm border-gray-800/50"
                        : "bg-white/95 backdrop-blur-sm border-gray-200/50"
                    } 
                    border`}
                  >
                    <div
                      className={`text-xs whitespace-nowrap
                      ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {hoveredPoint}
                    </div>
                    <div
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45
                      ${
                        isDarkMode
                          ? "bg-gray-900/95 border-b border-r border-gray-800/50"
                          : "bg-white/95 border-b border-r border-gray-200/50"
                      }`}
                    />
                  </div>
                </motion.div>
              </foreignObject>
            )}
          </AnimatePresence>

          <defs>
            <linearGradient
              id="path-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Points */}
          {dots.map((dot, i) => (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g
                key={`start-${i}`}
                onMouseEnter={() =>
                  handlePointHover(dot.start.lat, dot.start.lng, dot.start.name)
                }
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              {/* End Point */}
              <g
                key={`end-${i}`}
                onMouseEnter={() =>
                  handlePointHover(dot.end.lat, dot.end.lng, dot.end.name)
                }
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default WorldMap;
