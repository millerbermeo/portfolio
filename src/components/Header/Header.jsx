import React from "react";

function Header() {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*======= Logo ========*/}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-red-400 text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              M
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Miller</h2>
              <p className="text-cyan-950 text-[14px] font-[500]">Personal</p>
            </div>
          </div>
          {/*======= Logo End ========*/}
          {/*======= Menu Start ========*/}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-cyan-950 font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-cyan-950 font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-cyan-950 font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-cyan-950 font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*======= Menu End ========*/}

          {/*======= Menu Right ========*/}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-cyan-950 font-[600] border border-solid border-cyan-950 py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-cyan-950 hover:text-white hover:font-[500] ease-in duration-300">
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
            <span className="text-2xl text-cyan-950 md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
