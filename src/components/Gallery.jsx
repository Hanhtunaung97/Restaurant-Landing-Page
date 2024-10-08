import React, { useRef, useState } from "react";
import Container from "./Container";
import { SubHeading } from "../utils";
import { images } from "../constants";
import { FaInstagram } from "react-icons/fa";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
const gallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const imgRef = useRef(null);
  const Slide = (direction) => {
    if (direction === "left") {
      imgRef.current.scrollLeft -= 300;
    } else {
      imgRef.current.scrollLeft += 300;
    }
  };
  const handleLeft = () => {
    Slide("left");
  };
  const handleRight = () => {
    Slide("right");
  };
  return (
    <Container>
      <div className="flex flex-col items-center justify-center md:flex-row  gap-10">
        <div className="flex flex-col gap-5 md:gap-7 items-start justify-center z-10 w-full flex-1">
          <SubHeading title={"Instagram"} className={"text-5xl items-start"} />
          <p className="text-base text-slate-300 text-start w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <div className="mt-5">
            <button className="custom__button">View More</button>
          </div>
        </div>
        <div className=" relative w-full  md:max-w-[50%] flex-1 ">
          <div ref={imgRef}  className="flex flex-row overflow-x-hidden gap-3 duration-200 scroll-smooth ">
            {gallery.map((el, i) => (
              <div key={i} className=" relative group min-w-[301px] h-[450px] ">
                <img
                  src={el}
                  alt="gallery"
                  className=" h-full w-full rounded-lg object-cover object-center group-hover:opacity-50 duration-200"
                />
                <FaInstagram className="w-6 h-6 text-white cursor-pointer absolute top-0 left-0 right-0 bottom-0 m-auto z-10 hidden group-hover:block duration-200" />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center ">
            <HiArrowCircleLeft
              className="w-10 h-10 text-golden cursor-pointer absolute top-0 bottom-0 my-auto left-0 hover:text-black duration-200"
              onClick={handleLeft}
            />
            <HiArrowCircleRight
              className="w-10 h-10 text-golden cursor-pointer absolute top-0 bottom-0 my-auto right-0 hover:text-black duration-200"
              onClick={handleRight}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
