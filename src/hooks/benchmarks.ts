import { useQuery } from "@tanstack/react-query";
import { fetchBenchmarks } from "../api/rest-api";

export const useBenchmarks = (): typeof props => {
  const props = useQuery(["benchmarks"], fetchBenchmarks);
  return props;
};
