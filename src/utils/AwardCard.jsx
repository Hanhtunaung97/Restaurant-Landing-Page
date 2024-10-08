import React from "react";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="flex justify-center items-start gap-4 col-span-full md:col-span-1">
      <div>
        <img src={imgUrl} alt="images" className="h-[90px] object-contain object-center aspect-auto" />
      </div>
      <div className="flex flex-col gap-2 justify-start">
        <h4 className="font-heading font-semibold text-golden text-3xl">
          {title}
        </h4>
        <p className="text-lg text-white">{subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
