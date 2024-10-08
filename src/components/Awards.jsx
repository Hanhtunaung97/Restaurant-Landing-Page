import React from "react";
import Container from "./Container";
import { AwardCard, SubHeading } from "../utils";
import { data, images } from "../constants";

const Awards = () => {
  return (
    <section className="app__bg">
      <Container>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-10 justify-start items-start flex-1">
            <div className="flex flex-col gap-5 justify-start items-start">
              <SubHeading
                title={"Awards & recognition"}
                className={"text-lg items-start"}
              />
              <h3 className="text-6xl font-bold font-heading text-golden">
                Our Laurels
              </h3>
            </div>
            <div className=" grid  grid-cols-1 md:grid-cols-2 gap-10">
              {data.awards.map((el, i) => (
                <AwardCard key={i} award={el} />
              ))}
            </div>
          </div>
          <div className=" flex-1 w-full md:w-2/3">
              <img src={images.laurels} alt="laurels" className="opacity-75 " />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Awards;
