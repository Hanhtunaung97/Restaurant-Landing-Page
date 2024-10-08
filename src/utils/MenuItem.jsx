import React from "react";

const MenuItem = ({ className, title, price, tags }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex  justify-between gap-5 items-center w-full">
        <h4 className="font-semibold text-lg font-heading text-golden">
         {title}
        </h4>
        <div className="flex items-center justify-center gap-2">
          <div className="w-[100px] h-[1px] bg-golden my-2 " />
          <h4 className="font-semibold  text-white text-lg">{price}</h4>
        </div>
      </div>
      <p className=" text-slate-300">{tags}</p>
    </div>
  );
};

export default MenuItem;
