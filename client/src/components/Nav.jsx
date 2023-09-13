import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:top-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full items-center max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50">
        <Link
            to="/"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link to="./pages/contact">Contact</Link>
          <Link to="./profiles">PROFILE</Link>

        </div>
      </div>
    </nav>
  );
};
export default Nav;