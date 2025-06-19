"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  const cardData = [
    {
      title: "Premium Partner",
      description: "Be the best Premium Partner with Multiple service proviers",
      image:
        "https://plus.unsplash.com/premium_photo-1664476794112-15afc6de2e0f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFydG5lcnxlbnwwfHwwfHx8MA%3D%3D",
      link: "",
      buttonText: "Learn More",
    },
    {
      title: "Quality Service",
      description: "Ensure quality service with our top-notch providers.",
      image:
        "https://media.istockphoto.com/id/1364946137/photo/businessman-holding-and-showing-the-best-quality-assurance-with-golden-five-stars-for.jpg?s=612x612&w=0&k=20&c=ewqI36IOI0FE9fQGEjhVrdR_4sAg77ICJJ2gZgZxH-0=",
      link: "",
      buttonText: "Get Started",
    },
    {
      title: "Cloud Services",
      description: "Leverage the power of cloud computing for your business.",
      image:
        "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399285.jpg",
      link: "/service",
      buttonText: "Join Us",
    },
    {
      title: "Sustainable Solutions",
      description: "Embrace sustainability with our eco-friendly services.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgg6KZpHy8C65LP0OKXUdabaR3P2m41HKh2A&s",
      link: "",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="container mx-auto  px-2 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {cardData.map((card, index) => (
          <CardContainer key={index} className="inter-var w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full min-h-[400px] sm:min-h-[450px] rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="80"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="80"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2">
                <img
                  src={card.image}
                  height="1000"
                  width="1000"
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href="/contact">{card.buttonText}</a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default ThreeDCardDemo;
