import React from "react";
import Section from "../Section";
import Header from "../Header";
import FooterValue from "../Footer/FooterValue";
import Heading from "../Heading";
import { ExpandableCardDemo } from "../AceternityUi/UseOutsideClick";
import { TracingBeamDemo } from "../AceternityUi/TracingBeam";

const CaseExplain = () => {
  return (
    <div>
      <Section id="how-to-use">
        <div className="pt-[4.75rem]lg:pt-[2rem] overflow-hidden">
          <Header />

          <Section id="how-to-use">
            <div className="pt-[4.75rem] lg:pt-[1.25rem] overflow-hidden">
              <Heading
                tag="CaseStudies2"
                title="Corporate Social Responsibility"
              />
            </div>

            <section className="py-14 mb-14">
              <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                  <div className="flex-1 sm:hidden lg:block">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      className="md:max-w-lg sm:rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                    <h3 className="text-indigo-600 font-semibold">
                      Background
                    </h3>
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                      Optimizing Data Quality and Search for Research
                      Consultants
                    </p>
                    <p className="mt-3 text-white">
                      Top India Research Consultants Customer is facing
                      challenges in maintaining their papers, journals, books in
                      a centralized lake. The Data is sourced from various
                      channels have inconsistencies, missing values & errors
                      which are leading to challenges in data quality and
                      transformation. Customer needs a recommendation engine and
                      suggestions for quick search. Customer compliance, data
                      protection and privacy regulations policies are complex.
                      Customer does not have dedicated technology, tools and
                      expertise
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* <ExpandableCardDemo /> */}
            <TracingBeamDemo />
          </Section>
        </div>
        <FooterValue />
      </Section>
    </div>
  );
};

export default CaseExplain;
