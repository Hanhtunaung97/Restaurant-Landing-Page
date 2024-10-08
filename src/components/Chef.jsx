import React from "react";
import Container from "./Container";
import { images } from "../constants";
import { SubHeading } from "../utils";

const Chef = () => {
  return (
    <section className="app__bg">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <img src={images.chef} alt="chef" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <SubHeading title={"Chef's Word"} className={"text-lg"} />
              <h3 className="font-heading text-golden text-5xl lg:text-6xl font-bold">
                What Believe In
              </h3>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                <img src={images.quote} alt="quote" className="h-[45px] lg:h-[50px]" />
                <p className="text-white text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                  sit .
                </p>
                </div>
                <p className="text-white text-base text-start">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
              </div>
              <div className="flex flex-col gap-2">
                    <h3 className="text-golden font-heading font-semibold text-3xl">Kevin Luo</h3>
                    <p className="text-white text-base">Chef & Founder</p>
              </div>
              <div>
                <img src={images.sign} alt="sign" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chef;
