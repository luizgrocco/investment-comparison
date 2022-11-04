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

const assetCategoryEnum = z.enum([
  "ACAO",
  "RENDA_FIXA",
  "FUNDO",
  "PREVIDENCIA",
  "EUROPA",
  "BENCHMARK_PERSONALIZADO",
]);

export type AssetCategoryEnum = z.infer<typeof assetCategoryEnum>;

const searchAssetSchema = z.object({
  assetCategory: z.string().nullable().default(null),
  cnpj: z.string().nullable().default(null),
  identifier: z.string().nullable().default(null),
  isin: z.string().nullable().default(null),
  label: z.string().nullable().default(null),
  managementCompany: z.string().nullable().default(null),
  situation: z.string().nullable().default(null),
  stockExchange: z.string().nullable().default(null),
  type: z.string().nullable().default(null),
});

export type AssetType = z.infer<typeof searchAssetSchema>;

const fetchSearchAssetsSchema = z.record(
  assetCategoryEnum,
  searchAssetSchema.array()
);

export const fetchSearchAssets = (
  reactQueryParams: QueryFunctionContext
): typeof response => {
  const { queryKey, signal } = reactQueryParams;
  const [, searchString] = queryKey;
  const response = axios
    .get(`asset?${stringify({ searchString })}`, {
      signal,
    })
    .then((res) => fetchSearchAssetsSchema.parse(res.data));
  return response;
};
