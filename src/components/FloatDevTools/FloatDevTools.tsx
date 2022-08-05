import React from "react";
import { SSpeedDial, SSpeedDialIcon } from "./styles";

export const FloatDevTools: React.FC = () => {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return <SSpeedDial ariaLabel="Dev tools" icon={<SSpeedDialIcon />} />;
};
