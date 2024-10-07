import React from "react";
import Container from "./Container";
import { images } from "../constants";
import SubHeading from "../utils/SubHeading";
const AboutUs = () => {
  return (
    <section className={`app__bg `}>
      <Container>
        <div className="flex__center flex-col md:flex-row relative gap-10">
          <div className="absolute  ">
            <img
              src={images.G}
              alt="G"
              className="md:w-[400px] md:h-[415] w-[300px] left-0 right-0 top-0 bottom-0 m-auto z-0 opacity-35"
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-7 items-end justify-center z-10">
            <SubHeading title={"About Us"} className={"text-5xl items-end"} />
            <p className="text-base text-slate-300 text-end w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <div className="mt-5">
              <button className="custom__button">Know More</button>
            </div>
          </div>
          <div className="z-10">
            <img
              src={images.knife}
              alt="knife"
              className=" h-[500px] w-[250px] md:w-[450px] md:h-[900px] object-contain aspect-auto opacity-70"
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-7 items-start justify-center z-10">
            <SubHeading
              title={"Our History"}
              className={"text-5xl items-start"}
            />
            <p className="text-base text-slate-300 text-start w-full">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <div className="mt-5">
              <button className="custom__button">Know More</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
