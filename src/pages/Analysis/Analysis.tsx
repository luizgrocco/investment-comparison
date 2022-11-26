import React from "react";
import {
  SPageContainer,
  SGeneralConfigurationContainer,
  SSearchContainer,
  SChartConfigurationContainer,
} from "./styles";
import {
  SearchSection,
  ChartConfigurationSection,
  GeneralConfigurationSection,
} from "../../components";

export const Analysis: React.FC = () => {
  return (
    <SPageContainer>
      <SGeneralConfigurationContainer>
        <GeneralConfigurationSection />
      </SGeneralConfigurationContainer>
      <SSearchContainer>
        <SearchSection />
      </SSearchContainer>
      <SChartConfigurationContainer>
        <ChartConfigurationSection />
      </SChartConfigurationContainer>
    </SPageContainer>
  );
};
