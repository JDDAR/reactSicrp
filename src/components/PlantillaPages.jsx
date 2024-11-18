import React from "react";
import gbImag from "../imagenes/QR.png";
import logoImg from "../imagenes/logo.png";

const PlantillaPages = () => {
  return (
    <>
      <div className="containerPlantilla">
        <div className="containerPlantilla__BG">
          <img src={gbImag} alt="" />
        </div>
        <div className="containerPlantilla__Logo">
          <img src={logoImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default PlantillaPages;
