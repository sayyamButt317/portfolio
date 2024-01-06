import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/*==========hero left content  ==========*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font -[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px]"
            >
              I'm Sayyam Butt
              <br />
              Software Developer
            </h1>
            {/*==========Hire ME Button ==========*/}
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#Contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i>Hire me
                </button>
              </a>
                {/*========== See Portfolio ==========*/}
              <a
                href="#portfolio"
                className="text-smallText font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
