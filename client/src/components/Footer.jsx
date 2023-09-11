import React from "react";
import Logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          {/* logo */}
          <a href="#">
            <img src={Logo}></img>
          </a>
          <button className="btn btn-sm">Portfolio</button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
