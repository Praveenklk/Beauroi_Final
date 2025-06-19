import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const TeamGrid = ({ people }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (selectedPerson) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedPerson]);

  const handleViewProfile = (person) => {
    setIsClosing(false);
    setSelectedPerson(person);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    
    // Delay actual closing to allow animation to complete
    setTimeout(() => {
      document.body.style.overflow = "auto";
      setSelectedPerson(null);
      setIsClosing(false);
    }, 150); // Slightly shorter than our animation duration
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {people.map((person) => (
        <article
          key={person.id}
          className="group relative flex flex-col overflow-hidden rounded-xl h-[320px] transform hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]"
        >
          <img
            src={person.image}
            alt={person.name}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />

          <div className="relative mt-auto p-6 z-10 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">
              {person.name}
            </h3>
            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {person.role}
            </p>

            <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors"
                onClick={() => handleViewProfile(person)}
              >
                View Profile
              </button>
              <a
                href="/contact"
                className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </article>
      ))}

      {/* Enhanced Modal with Improved Exit Animation */}
      <div
        className={`
        fixed inset-0 flex items-center justify-center z-50
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          selectedPerson
            ? "opacity-100 backdrop-blur-md bg-black/70 pointer-events-auto"
            : "opacity-0 backdrop-blur-0 bg-black/0 pointer-events-none"
        }
      `}
      >
        <div
          ref={modalRef}
          className={`
            relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
            ${
              selectedPerson && !isClosing
                ? "scale-100 opacity-100 translate-y-0 rotate-0"
                : isClosing
                ? "scale-95 opacity-0 -translate-y-8 rotate-1"
                : "scale-90 opacity-0 translate-y-10 rotate-0"
            }
            shadow-2xl shadow-purple-500/30
          `}
        >
          <div className="bg-n-8 rounded-xl w-full max-w-xs sm:max-w-sm p-6 relative overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white hover:text-gray-500 text-xl font-bold transition-all duration-300 hover:scale-125 z-10"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500"></div>
            </div>

            {/* Content with Staggered Animations */}
            <div className="relative z-1 space-y-4">
              <img
                src={selectedPerson?.image}
                alt={selectedPerson?.name}
                className={`
                  w-full h-40 object-cover rounded-md
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${
                    selectedPerson && !isClosing
                      ? "opacity-100 translate-y-0 delay-75"
                      : isClosing
                      ? "opacity-0 -translate-y-4 delay-0"
                      : "opacity-0 translate-y-6 delay-0"
                  }
                  object-top
                  shadow-md
                `}
              />

              <div
                className={`
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  selectedPerson && !isClosing
                    ? "opacity-100 translate-y-0 delay-150"
                    : isClosing
                    ? "opacity-0 -translate-y-4 delay-50"
                    : "opacity-0 translate-y-6 delay-0"
                }
              `}
              >
                <h2 className="text-2xl font-bold mb-1">
                  {selectedPerson?.name}
                </h2>
                <h4 className="text-gray-500">{selectedPerson?.role}</h4>
              </div>

              <p
                className={`
                text-gray-700 text-sm
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  selectedPerson && !isClosing
                    ? "opacity-100 translate-y-0 delay-200"
                    : isClosing
                    ? "opacity-0 -translate-y-4 delay-100"
                    : "opacity-0 translate-y-6 delay-0"
                }
              `}
              >
                {selectedPerson?.about}
              </p>

              <ul
                className={`
                list-disc list-inside text-gray-700 text-sm space-y-1
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  selectedPerson && !isClosing
                    ? "opacity-100 translate-y-0 delay-300"
                    : isClosing
                    ? "opacity-0 -translate-y-4 delay-150"
                    : "opacity-0 translate-y-6 delay-0"
                }
              `}
              >
                {selectedPerson?.details?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div
                className={`
                flex justify-center gap-5 text-gray-600 text-xl pt-2
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  selectedPerson && !isClosing
                    ? "opacity-100 translate-y-0 delay-400"
                    : isClosing
                    ? "opacity-0 -translate-y-4 delay-200"
                    : "opacity-0 translate-y-6 delay-0"
                }
              `}
              >
                {selectedPerson?.linkedin && (
                  <a
                    href={selectedPerson.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0077b5] transition-all duration-300 hover:scale-125"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
                {selectedPerson?.twitter && (
                  <a
                    href={selectedPerson.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1DA1F2] transition-all duration-300 hover:scale-125"
                    aria-label="Twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )}
                {selectedPerson?.github && (
                  <a
                    href={selectedPerson.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#333] transition-all duration-300 hover:scale-125"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                {selectedPerson?.instagram && (
                  <a
                    href={selectedPerson.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E1306C] transition-all duration-300 hover:scale-125"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                {selectedPerson?.facebook && (
                  <a
                    href={selectedPerson.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4267B2] transition-all duration-300 hover:scale-125"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const people = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    about: "A passionate developer with a focus on MERN stack.",
    details: [
      "John is a skilled developer with 5 years of experience in full stack development.",
      "Specializes in React, Node.js, and MongoDB.",
      "Passionate about creating efficient and scalable applications.",
    ],
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
  },
  {
    id: 2,
    name: "Arun Kumar",
    role: "Director - Technology",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    about: "Technology leader with 10+ years of experience.",
    details: [
      "Leads technology strategy and implementation.",
      "Expert in cloud architecture and DevOps.",
      "Focused on building high-performing engineering teams.",
    ],
    linkedin: "https://linkedin.com/in/arunkumar",
    twitter: "https://twitter.com/arunkumar",
    github: "https://github.com/arunkumar",
  },
];

export default TeamGrid;