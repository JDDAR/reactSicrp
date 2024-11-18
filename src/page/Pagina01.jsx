import React from "react";
import NavLeft from "../components/NavLeft";
import NavMenu from "../components/NavMenu";
import PlantillaPages from "../components/PlantillaPages";

const Pagina01 = () => {
  return (
    <>
      <NavMenu />
      <div className="container containerPage">
        <NavLeft />
        <PlantillaPages />
      </div>
    </>
  );
};

export default Pagina01;
