import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div>
        <Link
            to="/"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link to="./pages/contact">Contact</Link>

        </div>
      </div>
    </nav>
  );
};
export default Nav;
