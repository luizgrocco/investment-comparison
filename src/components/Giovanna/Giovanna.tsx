import React from "react";
import gigi from "../../assets/gigi.png";

export const Giovanna: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        Oi Giovanna, vc é minha 🦒inha!
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img src={gigi} alt="Imagem da Girafinha" width={500} height={500} />
      </div>
    </div>
  );
};
