"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import Heading from "../Heading";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="font-calsans text-xl mb-4">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Background",

    description: (
      <>
        <p>
          A Government Education Institution was facing challenges with outdated
          paper-based processes and no technology advancement in the
          institution. Students are leaving due to the lack of latest
          technologies, Private school dominations in the area and various other
          factors which is affecting the admission & financial loss to the
          government & People are losing trust on the government institutions.
          The Aim of this project was to identify the admission low down, the
          reasons and rectify it using HiFi technologies with a detailed report
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Challenges",
    description: (
      <>
        1. No Historical data for the last 50 years <br />
        2. Paper-Based Processes and have data for 6 years in paper format.{" "}
        <br />
        3. Lack of technologies & No Efficient teachers. <br />
        4. No integrated solutions between all government schools with in the
        state & country. <br />
        5. No common platform between government institutions (Schools, Colleges
        & Universities) <br />
        6. Student Attrition, No marketing strategies & Attractiveness. <br />
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Implemented Solution",
    description: (
      <>
        <p>
          1. Utilized an API to digitize paper-based documents like attendance
          records, grades, and other administrative data for making them
          searchable, easy access and real-time updates. <br />
          2. Using Optical character recognition (OCR) technology to convert
          images of texts into machine-encoded text.
          <br />
          3. Stored Digitized documents in a Cloud storage ensuring easy access
          and backup. Implemented appropriate access control to protect
          sensitive data.
          <br />
          4. Using Data Analytics leveraged to analyze the students performance
          , attendance and engagement, which leads to an improvement in students
          performance and teaching methods.
          <br />
          5. Implemented personalized learning paths based on individual student
          performance, preferences, and learning styles by building & deploying
          AI & ML.
          <br />
          6. Implemented an automated process to generate the digital report
          cards. Parents and students can access report cards online, fostering
          transparency and timely feedback.
          <br />
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
