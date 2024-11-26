import React from "react";
import qrImagen from "../imagenes/QR.png";
export const ModalQR = ({ onClose }) => (
  <div className="containerModal">
    <div className="containerModal__info">
      <button onClick={onClose}>X</button>
      <img src={qrImagen} />
      <h2>ESCANEAR QR</h2>
    </div>
  </div>
);
export default ModalQR;
