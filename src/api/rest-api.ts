import axios from "axios";
import { stringify } from "qs";
import { z } from "zod";
import { QueryFunctionContext } from "@tanstack/react-query";
import { toPairs, zipObj, keys } from "ramda";

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
  assetType: z.string().nullable().default(null),
  cnpj: z.string().nullable().default(null),
  identifier: z.coerce.string().nullable().default(null),
  isin: z.string().nullable().default(null),
  label: z.string().nullable().default(null),
  managementCompany: z.string().nullable().default(null),
  situation: z.string().nullable().default(null),
  stockExchange: z.string().nullable().default(null),
  type: z.string().nullable().default(null),
});

type SearchAssetType = z.infer<typeof searchAssetSchema>;

export interface AssetType extends SearchAssetType {
  assetCategory: AssetCategoryEnum;
}

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
    .then((res) => {
      const backendAssets = fetchSearchAssetsSchema.parse(res.data);
      const assetsCategories = keys(backendAssets);
      const assetsEnhancedWithCategories = toPairs(backendAssets).map(
        ([key, array]) =>
          array?.map((asset) => ({ ...asset, assetCategory: key }))
      );
      const assets = zipObj(assetsCategories, assetsEnhancedWithCategories);

      return assets;
    });
  return response;
};

const benchmarkAssetSchema = searchAssetSchema.pick({
  assetType: true,
  label: true,
  identifier: true,
});

export type BenchmarkType = z.infer<typeof benchmarkAssetSchema>;

export const fetchBenchmarks = (): typeof response => {
  const response = axios.get("asset/indices").then((res) => {
    const backendBenchmarks = benchmarkAssetSchema.array().parse(res.data);
    return backendBenchmarks;
  });

  return response;
};

const periodsSchema = z
  .enum([
    "OTIMO",
    "NO_MES",
    "SEIS_MESES_UTEIS",
    "UM_ANO_UTIL",
    "CINCO_ANOS_UTEIS",
  ])
  .array();

export const fetchPeriods = (): typeof response => {
  const response = axios.get("period").then((res) => {
    const backendPeriods = periodsSchema.parse(res.data);
    return backendPeriods;
  });

  return response;
};
