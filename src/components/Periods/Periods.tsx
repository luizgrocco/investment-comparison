import React from "react";
import { usePeriods } from "../../hooks";
import { PeriodsContainer } from "./styles";

export const Periods: React.FC = () => {
  const { data, isLoading, isSuccess } = usePeriods();

  return (
    <PeriodsContainer>
      {isLoading && "Loading ..."}
      {isSuccess && data.map((period) => period)}
    </PeriodsContainer>
  );
};
