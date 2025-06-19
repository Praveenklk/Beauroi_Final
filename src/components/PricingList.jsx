import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

const PricingList = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className={`w-[19rem] max-lg:w-full h-full px-6 
            ${isDarkMode ? "bg-n-8 border-n-6" : "bg-white border-gray-200"} 
            border rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 
            transition-colors duration-200
            [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3
            ${isDarkMode ? "hover:border-n-5" : "hover:border-gray-300"}
          `}
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p
            className={`body-2 min-h-[4rem] mb-3 
            ${isDarkMode ? "text-n-1/50" : "text-gray-500"}`}
          >
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3"></div>
                <div
                  className={`text-[1.5rem] leading-none font-bold 
                  ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={
              item.price
                ? "mailto:contact@gmail.com"
                : "mailto:contact@gmail.com"
            }
            white={isDarkMode && !!item.price}
            dark={!isDarkMode && !!item.price}
          >
            {item.price ? "Contact us" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start py-5 border-t 
                  ${isDarkMode ? "border-n-6" : "border-gray-200"}`}
              >
                <img
                  src={check}
                  width={24}
                  height={24}
                  alt="Check"
                  className={!isDarkMode && "filter brightness-0"}
                />
                <p
                  className={`body-2 ml-4 
                  ${isDarkMode ? "text-n-1" : "text-gray-600"}`}
                >
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
