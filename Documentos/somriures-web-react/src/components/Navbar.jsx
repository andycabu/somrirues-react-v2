import { useState, useEffect } from "react";
import logo2 from "../assets/images/logo2.svg";
import logo from "../assets/images/logo.svg";
import DayNight from "./DayNight";
import Lenguage from "./Language";
import {
  FaAngleDown,
  FaBars,
  // faInstagramSquare,
  // faFacebookSquare,
  // faWhatsappSquare,
  // faPhoneSquareAlt,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// const ICONS = [
//   {
//     id: 1,
//     icon: faInstagramSquare,
//     URL: "https://www.instagram.com",
//   },
//   {
//     id: 2,
//     icon: faFacebookSquare,
//     URL: "https://www.facebook.com",
//   },
//   {
//     id: 3,
//     icon: faPhoneSquareAlt,
//     URL: "tel:999999999",
//   },
//   {
//     id: 4,
//     icon: faWhatsappSquare,
//     URL: "https://whatsapp",
//   },
// ];

const NAVBAR = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
  },
  {
    id: 2,
    title: "Somriures",
    url: "/Somriures",
  },
  {
    id: 3,
    title: "Especialidades",
    url: "/especialidades",
    icon: (
      <FaAngleDown className="cursor-pointer max-[1154px]:text-2xl max-[1154px]:pl-3 transition-transform duration-500 h-4 inline-block pl-3 " />
    ),
    DropDown: <DropDown />,
    class: "sub-btn-a",
  },
  {
    id: 4,
    title: "Contacto",
    url: "/Contacto",
  },
  {
    id: 5,
    title: "Blog",
    url: "/Blog",
  },
];

function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav-personalized z-50 max-w-[93.75rem] fixed top-0 min-w-[100vw] flex justify-between items-center bg-[var(--card-background-color)] p-4 transition-all duration-500 box-shadow-1 ${
        scrolling ? "sticky" : ""
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src={theme === "dark" ? logo : logo2}
            className="w-[15.5rem]"
            alt="Logo-Clinica-dental"
          />
        </Link>
      </div>
      <div className="navegation flex transition-line duration-500 justify-end items-center w-4/5 pr-4 gap-4 text-right ">
        <ul
          className={`menu relative flex gap-20 transition-right max-[830px]:min-w-[100vw] ${
            active ? "active" : ""
          }`}
        >
          <div className="justify-center hidden max-[830px]:flex ">
            <Link to="/">
              <img className="w-60" src={logo2} alt="Logo empresa" />
            </Link>
          </div>

          <MdClose onClick={() => setActive(false)} className="close-btn" />

          {NAVBAR.map((item) => (
            <li className="menu-item" key={item.id}>
              <Link className={item.class} to={item.url}>
                {item.title}
              </Link>
              {item.icon}
              {item.DropDown}
            </li>
          ))}
          {/* <Icons icons={ICONS} /> */}
        </ul>
        <div className="absolute flex  top-0 max-[1154px]:hidden right-7 pt-1">
          <Lenguage />
          <DayNight />
        </div>
      </div>
      <FaBars onClick={() => setActive(!active)} className="menu-btn" />
    </nav>
  );
}

export default Navbar;
