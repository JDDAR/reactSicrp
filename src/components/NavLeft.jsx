import React from "react";
import { BsHouseFill } from "react-icons/bs";

const NavLeft = () => {
  return (
    <>
      <nav className="containerNavLeft">
        <ul className="menuNavLeft">
          <li>
            <BsHouseFill />
            <span>INICIO</span>
          </li>{" "}
          <li>
            <BsHouseFill />
            <span>REPORTE CUADRANTE</span>
          </li>{" "}
          <li>
            <BsHouseFill />
            <span>CUADRANTES</span>
          </li>{" "}
          <li>
            <BsHouseFill />
            <span>PATRULLAS</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLeft;
