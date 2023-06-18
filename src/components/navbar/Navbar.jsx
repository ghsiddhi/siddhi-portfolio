import { useState } from "react";
import { Nav, NavUl, NavUlA } from "./Navbar.styles";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <Nav>
      <h3 onClick={pageUp} className="logo">
        Siddhi.dev
      </h3>
      <NavUl>
        {navlinks.map((item) => (
          <li key={item.name}>
            <NavUlA href={item.link}>{item.name}</NavUlA>
          </li>
        ))}
        <li onClick={() => hamburgerMenu()}>
          <i className="fa-solid fa-bars-staggered mobile-menu"></i>
        </li>
      </NavUl>
    </Nav>
  );

  {
    /* mobile nav */
  }
  {
    /* <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </span>

        <ul>
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div> */
  }
};
