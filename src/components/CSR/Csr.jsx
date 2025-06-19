import React from "react";
import Header from "../Header";
import Section from "../Section";
import Heading from "../Heading";

import { HeroParallaxDemo } from "../AceternityUi/HeroParallax";
import { WobbleCardDemo } from "../AceternityUi/WobbleCard";
import FooterValue from "../Footer/FooterValue";

const Csr = () => {
  return (
    <Section id="how-to-use">
      <div className="pt-[4.75rem]lg:pt-[2rem] overflow-hidden">
        <Header />

        <Section id="how-to-use">
          {/* <div className="pt-[4.75rem] lg:pt-[1.25rem] overflow-hidden">
            <Heading tag="CSR" title="Corporate Social Responsibility" />
          </div> */}
          <HeroParallaxDemo />
          <WobbleCardDemo />
        </Section>
      </div>
      <FooterValue />
    </Section>
  );
};

export default Csr;
