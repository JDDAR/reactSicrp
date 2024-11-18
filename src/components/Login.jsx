import React from "react";
import logoImg from "../imagenes/QR.png";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="containerLogin">
          <figure className="containerLogin__imgLogin">
            <img src={logoImg} alt="" />
          </figure>
          <div className="containerLogin__formularioLogin">
            <div className="containerLogin__formularioLogin__title">
              <h3>SICRP</h3>
              <h4>SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</h4>
            </div>
            <form>
              <div className="inputsForm">
                <fieldset>
                  <input
                    type="text"
                    name="idPatrulla"
                    value=""
                    placeholder="ID PATRULLA"
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    name="cuadrante"
                    value=""
                    placeholder="CUADRANTE"
                  />
                </fieldset>
              </div>
              <button type="submit"> Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
