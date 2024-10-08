import React from "react";
import Container from "./Container";
import { SubHeading } from "../utils";
import { images } from "../constants";
const FindUs = () => {
  return (
    <section className="app__bg">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 ">
          <div className="flex flex-col gap-7 md:gap-10 items-start justify-center flex-1 ">
            <div className="flex flex-col gap-5 md:gap-7 items-start justify-center ">
              <SubHeading title={"Contact"} className={"text-xl items-start"} />
              <h3 className=" font-heading font-bold text-golden text-5xl lg:text-6xl">
                Find Us
              </h3>
            </div>
            <p className="text-base lg:text-lg text-slate-300 text-start w-full">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
            </p>
            <div className="flex flex-col gap-3 md:gap-5 items-start justify-center ">
              <h5 className=" font-heading font-bold text-golden text-2xl">
                Opening Hours
              </h5>
              <p className="text-base text-slate-300 ">
                Mon - Fri: 10:00 am - 02:00 am
              </p>
              <p className="text-base text-slate-300 ">
                Sat - Sun: 10:00 am - 03:00 am
              </p>
            </div>
            <div>
              <button className="custom__button">Visit Us</button>
            </div>
          </div>
          <div className="flex-1">
            <img src={images.findus} alt="findUs" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FindUs;
