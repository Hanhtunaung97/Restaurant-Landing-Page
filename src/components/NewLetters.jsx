import React from "react";
import Container from "./Container";
import { SubHeading } from "../utils";

const NewLetters = () => {
  return (
    <Container>
      <div className="app__bg px-5 py-7 border border-golden">
        <div className="flex flex-col gap-5 md:gap-7 items-center justify-center w-full">
          <div>
            <SubHeading
              title={"New Letters"}
              className={"text-2xl items-center"}
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-5 items-center justify-center w-full">
            <h1 className=" text-center font-heading font-bold text-golden text-3xl md:text-5xl lg:text-7xl">
              Subscribe To Our Newsletter
            </h1>
            <p className="text-base md:text-lg text-slate-300 text-center">
              And never miss latest Updates!
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
              className="bg-black w-[220px] sm:w-[300px] md:w-[350px] lg:w-[500px] px-3 py-2.5 rounded-md text-white border border-golden focus:border-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-none"
            />
            <button className="custom__button">Subscribe</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewLetters;
