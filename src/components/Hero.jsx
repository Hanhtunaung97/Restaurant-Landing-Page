import React from "react";
import Container from "./Container";
import SubHeading from "../utils/SubHeading";
import { images } from "../constants";
const Hero = () => {
  return (
    <Container
      className={` bg-black flex items-center justify-center`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 h-full">
        <div className="flex flex-col gap-5 md:gap-10">
          <SubHeading title="Chase the new flavour" />
          <h1 className="text-6xl lg:text-7xl font-bold font-heading text-golden leading-normal">
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
        <div>
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
