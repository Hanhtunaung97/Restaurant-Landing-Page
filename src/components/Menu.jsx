import React from "react";
import Container from "./Container";
import { MenuItem, SubHeading } from "../utils";
import { data, images } from "../constants";

const Menu = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-5 justify-center items-center">
          <SubHeading
            title="Menu that fits your palatte"
            className={"text-2xl items-center gap-3"}
          />
          <h2 className="text-5xl md:text-6xl text-center font-heading font-bold text-golden">
            Today's Special
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between ">
          <div className="flex flex-col gap-7 md:gap-10 justify-center items-center w-full flex-1">
            <h5 className="font-heading text-white text-5xl font-bold">
              Wine & Beer
            </h5>
            {data.wines.map((el, i) => (
              <MenuItem
                key={i}
                title={el.title}
                price={el.price}
                tags={el.tags}
              />
            ))}
          </div>
          <div className=" flex-1">
            <img src={images.menu} alt="menu" className="h-[650px] w-full" />
          </div>
          <div className="flex flex-col gap-7 md:gap-10 justify-center items-center w-full  flex-1">
            <h5 className="font-heading text-white text-5xl font-bold">
              Cocktails
            </h5>
            {data.cocktails.map((el, i) => (
              <MenuItem
                key={i}
                title={el.title}
                price={el.price}
                tags={el.tags}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="custom__button">View More</button>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
