import React from "react";
import Container from "./Container";
import { images } from "../constants";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    const date=new Date().getFullYear();
  return (
    <section className="app__bg">
      <Container>
        <div className=" grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className=" col-span-1">
            <div className="flex flex-col items-center justify-center gap-5">
              <h3 className="font-heading font-semibold text-golden text-3xl">
                Contact Us
              </h3>
              <div className="text-white flex flex-col gap-3 items-center justify-center">
                <p className="text-base md:text-lg text-center">
                  9 W 53rd St, New York, NY 10019, USA
                </p>
                <p className="text-base">+1 212-344-1230</p>
                <p className="text-base">+1 212-555-1230</p>
              </div>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="flex flex-col items-center justify-center gap-5">
              <img src={images.gericht} alt="gericht" className="w-48" />
              <div className="text-white flex flex-col gap-3 items-center justify-center">
                <p className="text-base md:text-lg text-center">
                  "The best way to find yourself is to lose yourself in the
                  service of others."
                </p>
                <img src={images.spoon} alt="spoon" className="w-20" />
                <div className="w-full flex justify-center gap-5 items-center mt-5">
                  <FaFacebook className="w-6 h-6 cursor-pointer hover:text-golden hover:animate-bounce duration-150 transition-transform" />
                  <FaTwitter className="w-6 h-6 cursor-pointer hover:text-golden hover:animate-bounce duration-150 transition-transform" />
                  <FaInstagram className="w-6 h-6 cursor-pointer hover:text-golden hover:animate-bounce duration-150 transition-transform" />
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="flex flex-col items-center justify-center gap-5">
              <h3 className="font-heading font-semibold text-golden text-3xl">
                Working Hours
              </h3>
              <div className="text-white flex flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-1">
                  <p className="text-base md:text-lg text-center">
                    Monday-Friday:
                  </p>
                  <p className="text-sm md:text-base text-center">
                    08:00 am - 12:00 am
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base md:text-lg  text-center">
                    Saturday-Sunday:
                  </p>
                  <p className="text-sm md:text-base  text-center">
                    07:00 am - 11:00 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-center mt-10">
          <p>Copyright © {date} Gericht. All Rights reserved.</p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
