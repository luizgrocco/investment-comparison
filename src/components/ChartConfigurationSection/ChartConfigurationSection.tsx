import React from "react";
import { SContainer } from "./styles";
import { InitialApplication, Benchmarks, Periods } from "./../../components";

export const ChartConfigurationSection: React.FC = () => {
  return (
    <SContainer>
      <InitialApplication />
      <Benchmarks />
      <Periods />
    </SContainer>
  );
};
