import React, { useState } from "react";
import "./header.styles.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);

  // Map Through Section Links
  const sections = ["about", "skills", "projects", "contact"];
  const newLink = (section) => (
    <a href={`#${section}`} className="header__link">
      {section}
    </a>
  );
  const sectionLinks = sections.map(newLink);

  // Change background on Scroll
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  console.log("Color:" + color);

  return (
    <div className="header">
      <div className="header__logo">Jeffrey Vaughn</div>
      <div>
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
        <div className={`header__links-container ${!toggleMenu && "hideMenu"}`}>
          <AiFillCloseCircle
            onClick={() => setToggleMenu(!toggleMenu)}
            className="closeMenu"
          />
          {sectionLinks}
        </div>
      </div>
    </div>
  );
};

export default Header;
