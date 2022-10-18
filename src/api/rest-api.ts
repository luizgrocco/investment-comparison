import axios from "axios";
import { stringify } from "qs";
import { QueryFunctionContext } from "@tanstack/react-query";

axios.defaults.baseURL = String(process.env.REACT_APP_API_URL);
axios.defaults.timeout = 60000;
axios.defaults.headers.common = {
  "x-subscriptionkey": String(process.env.REACT_APP_API_KEY),
  "x-moeda": "BRL",
};

export interface SearchResultsType {
  assetType: string | null;
  cnpj: string | null;
  identifier: string | null;
  isin: string | null;
  label: string | null;
  managementCompany: string | null;
  situation: string | null;
  stockExchange: string | null;
  type: string | null;
  portfolioCategory?: PtBrFiltersType;
}

export type PtBrFiltersType =
  | "ACAO"
  | ""
  | "RENDA_FIXA"
  | "PREVIDENCIA"
  | "FUNDO"
  | "EUROPA"
  | "BENCHMARK_PERSONALIZADO";

export const fetchAssets = (
  reactQueryParams: QueryFunctionContext
): typeof response => {
  // console.log({ reactQueryParams }); // TODO: REMOVE THIS after typying for endpoints is figured out
  const { queryKey, signal } = reactQueryParams;
  const [, searchString] = queryKey;
  const response = axios
    .get(`asset?${stringify({ searchString })}`, {
      signal,
    })
    .then((res) => res.data);
  return response;
};
