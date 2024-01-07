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
              {/*========== Intro ParaGraph ==========*/}
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              I am a qualified l Software developer and eager to start a new
              career with Strong creative and analytical skills. I am eager to
              contribute to a dynamic team and further enhance my skills in
              software Development
            </p>
            {/*========== Social Logos ==========*/}
            <div className="flex items-center gap-8 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Find me on
              </span>
              <span>
                <a
                  href="#linkedIn"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#Github"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                 <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#Instagram"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#Facebook"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
