import React from "react";
import { useTranslation } from "react-i18next";
import { usePeriods } from "../../hooks";
import {
  PeriodsContainer,
  SButton,
  SButtonGroup,
  SLabel,
  SLinearProgress,
} from "./styles";

export const Periods: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, isSuccess } = usePeriods();

  return (
    <PeriodsContainer>
      <SLabel>{t("period")}</SLabel>
      {isLoading && !isSuccess ? (
        <SLinearProgress />
      ) : (
        <SButtonGroup>
          {data?.map((period) => (
            <SButton key={period}>{t(`periods.${period}`)}</SButton>
          ))}
        </SButtonGroup>
      )}
    </PeriodsContainer>
  );
};
