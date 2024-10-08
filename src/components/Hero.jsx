import React from "react";
import Container from "./Container";
import { images } from "../constants";
import {SubHeading} from "../utils";
const Hero = () => {
  return (
    <Container   
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 h-full">
        <div className="flex flex-col gap-5 lg:gap-10 flex-1">
          <SubHeading title="Chase the new flavour" className={"text-lg"} />
          <h1 className="text-5xl sm:text-6xl  lg:text-8xl font-bold font-heading text-golden leading-normal">
            The Key To Fine Dining
          </h1>
          <p className="text-base lg:text-lg text-slate-300 text-start w-full">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <div className="mt-5">
            <button className="custom__button">Explore Menu</button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={images.welcome}
            alt="hero"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
