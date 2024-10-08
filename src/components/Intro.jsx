import React, { useRef, useState } from "react";
import { meal } from "../constants";
import { HiPlay } from "react-icons/hi2";
import { HiPause } from "react-icons/hi";

const Intro = () => {
  const videoRef = useRef();
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay((prev) => !prev);
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <section className=" w-full  relative">
      <div className=" w-full h-full opacity-70 ">
        <video
          ref={videoRef}
          src={meal}
          loop
          muted
          controls={false}
          type="video/mp4"
        />
      </div>
      <div className="">
        <div
          onClick={handlePlay}
          className="absolute left-0 right-0 top-0 bottom-0 m-auto w-20 h-20 rounded-full border border-golden flex justify-center items-center group cursor-pointer select-none active:scale-110 duration-200 active:opacity-50 opacity-75"
        >
          {play ? (
            <HiPause className=" cursor-pointer fill-golden w-6 h-6 group-active:scale-110 duration-200" />
          ) : (
            <HiPlay className=" cursor-pointer fill-golden w-6 h-6 group-active:scale-110 duration-200" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
