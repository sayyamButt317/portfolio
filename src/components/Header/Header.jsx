import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============== LOGO =============== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-indigo-500 text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              Q
            </span>
            {
              <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-sans md:font-serif ">
                  QuestBill World
                </h2>
                {/* <p>Personal Portfolio</p> */}
              </div>
            }
          </div>
          {/*====== LOGO END ========*/}

          {/*====== Menu Start ========*/}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*====== Menu END ========*/}

          {/*====== Chat Icon ========*/}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 
              rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
            >
              <i className="ri-send-plane-line"></i>Lets' Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/*====== End Chat Icon ========*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
