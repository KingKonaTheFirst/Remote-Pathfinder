import React from "react";
import Logo from "../assets/logo.svg";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="Logo"></img>
          </a>

          <div className="flex items-center justify-between">
            {/* Navigation */}

            <nav className="flex ">
              <Link
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                to="/home"
              >
                <BiHomeAlt />
              </Link>
              <Link
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                to="/contact"
              >
                <BsChatSquare />
              </Link>
              <Link
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                to="/profile"
              >
                <BiUser />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
