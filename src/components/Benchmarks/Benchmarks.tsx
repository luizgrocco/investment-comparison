import React from "react";
import { useTranslation } from "react-i18next";
import { BenchmarkType } from "../../api/rest-api";
import { useBenchmarks } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getSelectedBenchmarks,
  toggleBenchmarkSelection,
} from "../../redux/reducers";
import {
  SBenchmkarsContainer,
  SButton,
  SButtonGroup,
  SLabel,
  SLinearProgress,
} from "./styles";

export const Benchmarks: React.FC = () => {
  const { t } = useTranslation();
  const selectedBenchmarks = useAppSelector(getSelectedBenchmarks);
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useBenchmarks();

  const handleClickBenchmark = (benchmark: BenchmarkType): void => {
    console.log({ selectedBenchmarks }); // FIXME: did this to prevent unused var rule
    dispatch(toggleBenchmarkSelection(benchmark));
  };

  return (
    <SBenchmkarsContainer>
      <SLabel>{t("benchmarks")}</SLabel>
      {isLoading && !isSuccess ? (
        <SLinearProgress />
      ) : (
        <SButtonGroup>
          {data?.map((benchmark) => (
            <SButton
              key={benchmark.label}
              onClick={() => handleClickBenchmark(benchmark)}
            >
              {benchmark.label}
            </SButton>
          ))}
        </SButtonGroup>
      )}
    </SBenchmkarsContainer>
  );
};
