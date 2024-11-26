import React from "react";
import BotonQR from "./BotonOR";
import ModalQR from "./ModalQR";

const NavMenu = () => {
  return (
    <>
      <nav className="navMenu">
        <div className="container containerNav">
          <div className="logoNavMenu"></div>
          <div className="containerNav__boton">
            <BotonQR modalType={ModalQR} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
