"use client";

import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";
import Heading from "../Heading";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Heading
        tag="Beauroi"
        title="Services"
        text="Transforming challenges into success through innovative case studies."
      />

      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Discover Augmental AI",
    title: "Smarter. Faster. Augmented.",
    src: "https://beauroi.com/augmentalai.jpg",
    content: <DummyContent />,
  },
  {
    category: "MultiCloud Computing",
    title: "Resilient efficient distributed",
    src: "https://beauroi.com/multicloud.jpg",
    content: <DummyContent />,
  },
  {
    category: "Application Development",
    title: "Create impactful solutions.",
    src: "https://beauroi.com/appdev.jpg",
    content: <DummyContent />,
  },

  {
    category: "Data & Analytics",
    title: "Data powered business intelligence.",
    src: "https://beauroi.com/data.jpg",
    content: <DummyContent />,
  },
  {
    category: "Strategic IT Consultation",
    title: "Driving innovation through consulting.",
    src: "https://beauroi.com/it.jpg",
    content: <DummyContent />,
  },
  {
    category: "Time & Materials",
    title: "Scalable work, transparent billing.",
    src: "https://beauroi.com/time-materials.jpg",
    content: <DummyContent />,
  },
];
