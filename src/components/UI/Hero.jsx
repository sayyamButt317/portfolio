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
              <br className="text-titleTextColor font-mono text-[1.8rem] sm:text-[45px]"/>
              QuestBill World
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
              Simplify your life with EasyBills, your go-to solution for managing and paying utility bills seamlessly. Say goodbye to the hassle of juggling multiple due dates and paper statements. Our user-friendly platform empowers you to take control of your expenses effortlessly.
            </p>
            {/*========== Social Logos ==========*/}
            <div className="flex items-center gap-8 mt-14">
              <span className="text-smallTextColor text-[1nppx] font-[500]">
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
          {/*====================Hero Image=====================*/}
          <div className="md-basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt=""></img>
            </figure>
          </div>
          {/*====================Hero Content=====================*/}
          <div className="md:basis-1/5 flex justify-betwen text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={3800} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Active Users
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={230} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Trusted Company
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={300} duration={2}  prefix="$" suffix="M+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Transaction
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
