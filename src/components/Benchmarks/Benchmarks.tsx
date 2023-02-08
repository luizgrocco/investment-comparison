import React from "react";
import { useTranslation } from "react-i18next";
import { useBenchmarks } from "../../hooks";
import {
  SBenchmkarsContainer,
  SButton,
  SButtonGroup,
  SLabel,
  SLinearProgress,
} from "./styles";

export const Benchmarks: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, isSuccess } = useBenchmarks();

  return (
    <SBenchmkarsContainer>
      <SLabel>{t("benchmarks")}</SLabel>
      {isLoading && !isSuccess ? (
        <SLinearProgress />
      ) : (
        <SButtonGroup>
          {data?.map((benchmark) => (
            <SButton key={benchmark.label}>{benchmark.label}</SButton>
          ))}
        </SButtonGroup>
      )}
    </SBenchmkarsContainer>
  );
};
