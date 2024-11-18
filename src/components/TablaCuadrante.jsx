import React from "react";

const TablaCuadrante = () => {
  return (
    <div className="containerTabla">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Patrulla</th>
            <th>Cuadrante</th>
            <th>Ubicación</th>
            <th>Recorrido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Patrulla 101</td>
            <td>Cuadrante 5</td>
            <td>Calle 123</td>
            <td>Ruta A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaCuadrante;
