import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex justify-between items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain hover:-rotate-45 focus:animate-spin rounded-full" />
          <p className="text-white-100 text-[23px] font-bold cursor-pointer">Matheus Berbet<span className="sm:block hidden"></span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
              ${active === link.title 
                ? "text-secondary" 
                : "text-white-100" 
              }
              hover:text-secondary text-[18px] 
              font-medium cursor-pointer 
              transition duration-300 ease-in-out`}
              onClick={() => setActive(link.title)}
            >
              {link.title === "Contact" ? (
                <a href="https://www.linkedin.com/in/matheusnberbet/" target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] 
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} 
          p-6 black-gradient absolute top-20 right-0 
          mx-4 my-2 min-2[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                  ${active === link.title 
                    ? "text-secondary" 
                    : "text-white-100" 
                  }
                  font-poppins font-medium 
                  cursor-pointer text-[16px]`}
                  onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                    }
                  }
                >
                  {link.title === "Contact" ? (
                    <a href="https://externalwebsite.com" target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar