import React from "react";
import Section from "../components/Section";
import Header from "../components/Header";
import Heading from "../components/Heading";

const Product = () => {
  return (
    <div>
      <Section id="how-to-use">
        <div className="pt-[4.75rem] lg:pt-[2rem] overflow-hidden">
          <Header />

          <Section id="how-to-use">
            <div className="pt-[2.75rem] lg:pt-[1.25rem] overflow-hidden">
              <Heading tag="Product" title="The Product We Devliver" />
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
};

export default Product;
