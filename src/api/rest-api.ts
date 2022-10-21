import axios from "axios";
import { stringify } from "qs";
import { z } from "zod";
import { QueryFunctionContext } from "@tanstack/react-query";

axios.defaults.baseURL = String(process.env.REACT_APP_API_URL);
axios.defaults.timeout = 60000;
axios.defaults.headers.common = {
  "x-subscriptionkey": String(process.env.REACT_APP_API_KEY),
  "x-moeda": "BRL",
};

export type PtBrFiltersType =
  | "ACAO"
  | "RENDA_FIXA"
  | "PREVIDENCIA"
  | "FUNDO"
  | "EUROPA"
  | "BENCHMARK_PERSONALIZADO";

const searchAssetsSchema = z
  .object({
    assetType: z.string().nullable().default(null),
    cnpj: z.string().nullable().default(null),
    identifier: z.string().nullable().default(null),
    isin: z.string().nullable().default(null),
    label: z.string().nullable().default(null),
    managementCompany: z.string().nullable().default(null),
    situation: z.string().nullable().default(null),
    stockExchange: z.string().nullable().default(null),
    type: z.string().nullable().default(null),
  })
  .array();

export const fetchSearchAssets = (
  reactQueryParams: QueryFunctionContext
): typeof response => {
  // console.log({ reactQueryParams }); // TODO: REMOVE THIS after typying for endpoints is figured out
  const { queryKey, signal } = reactQueryParams;
  const [, searchString] = queryKey;
  const response = axios
    .get(`asset?${stringify({ searchString })}`)
    .then((res) => searchAssetsSchema.parse(res.data));
  return response;
};
