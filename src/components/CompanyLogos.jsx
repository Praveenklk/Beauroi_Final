import { companyLogos } from "../constants";
import { useState, useEffect } from "react";

const CompanyLogos = ({ className }) => {
  const [scrollSpeed, setScrollSpeed] = useState(50); // Controls scroll speed

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Industries Covered
      </h5>

      <div className="relative w-full overflow-hidden bg-transparent">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: `scroll ${scrollSpeed}s linear infinite`,
            animationPlayState: "running",
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {/* First set of logos */}
          {companyLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="mx-4 flex min-w-[250px] items-center justify-center"
              style={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src={logo}
                alt={`company-${index}`}
                className="h-auto w-[280px] object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {companyLogos.map((logo, index) => (
            <div
              key={`logo-duplicate-${index}`}
              className="mx-4 flex min-w-[200px] items-center justify-center"
              style={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src={logo}
                alt={`company-duplicate-${index}`}
                className="h-auto w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .flex:hover {
          animation-play-state: paused;
        }

        .flex > div:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default CompanyLogos;
