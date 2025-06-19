import React from "react";
import Header from "../Header";
import Section from "../Section";
import Heading from "../Heading";

import { TracingBeamDemo } from "../AceternityUi/TracingBeam";
import { AppleCardsCarouselDemo } from "../AceternityUi/AppleCard";
import FooterValue from "../Footer/FooterValue";
import ThreeDCardDemo from "../AceternityUi/3dCard";
import { ExpandableCardDemo } from "../AceternityUi/UseOutsideClick";
import { CarouselDemo } from "../AceternityUi/CarouselCard";

import GlowingEffectDemoSecond from "../AceternityUi/GlowingEffectBox";

const caseStudies = () => {
  return (
    <>
      <Section id="how-to-use">
        <div className="pt-[4.75rem]lg:pt-[2rem] overflow-hidden">
          <Header />

          <Section id="how-to-use">
            <div className="pt-[4.75rem] lg:pt-[1.25rem] overflow-hidden">
              <Heading tag="CaseStudies" title="Impactful Success Stories." />
              <GlowingEffectDemoSecond />
            </div>
          </Section>

          {/* <AppleCardsCarouselDemo /> */}
          {/* <ExpandableCardDemo /> */}
          {/* <CarouselDemo /> */}
          {/* <TracingBeamDemo /> */}
        </div>
      </Section>

      <FooterValue />
    </>
  );
};

export default caseStudies;
