import React from "react";
import NavLeft from "../components/NavLeft";
import NavMenu from "../components/NavMenu";
import PlantillaPages from "../components/PlantillaPages";
import TablaCuadrante from "../components/TablaCuadrante";

const Pagina02 = () => {
  return (
    <>
      <NavMenu />
      <div className="container containerPage">
        <NavLeft />
        <div className="containerPage__content">
          <PlantillaPages />
          <TablaCuadrante />
        </div>
      </div>
      ;
    </>
  );
};

export default Pagina02;
