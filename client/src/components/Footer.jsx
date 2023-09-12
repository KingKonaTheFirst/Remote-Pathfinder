import React from "react";
import '/index.css'
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer1">
      <h3 className="footer1">
        Remote Pathfinder &copy; 2023
      </h3>
      <div className="footer2">
        <div>
          <a className="link" href="#">About</a>
        </div>
        <div>
        <a className="link" href="#">Help</a>
        </div>
      </div>
      <div className="footer2">
        <a className="link" href="https://github.com/KingKonaTheFirst/Remote-Pathfinder" target="_blank"><FaGithub /></a>
      </div>
    </div>
  );
};

export default Footer;
