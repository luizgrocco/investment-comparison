import { useQuery } from "@tanstack/react-query";
import { fetchPeriods } from "../api/rest-api";

export const usePeriods = (): typeof props => {
  const props = useQuery(["periods"], fetchPeriods);
  return props;
};
