import React from "react";
import { Link } from "react-router-dom";
import {FaGithub} from "react-icons/fa"
import "../index.css"

const Footer = () => {
  return (
    <div className="footer1">
      <div className="footer2">
        <div>
          <Link className="link" to='/About'>About</Link>
        </div>
        <div className="footer2">
        <a className="link" href="https://github.com/KingKonaTheFirst/Remote-Pathfinder" target="_blank"><FaGithub /></a>
        </div>
        <div>
        <Link className="link" to='/Contact'>Contact</Link>
        </div>
      </div>
      
      <h3 className="footer1">
        Remote Pathfinder &copy; 2023
      </h3>
    </div>
  );
};

export default Footer;
