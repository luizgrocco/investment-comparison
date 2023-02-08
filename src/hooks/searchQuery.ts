import { useQuery } from "@tanstack/react-query";
import { fetchSearchAssets } from "../api/rest-api";

export const useSearchQuery = ({
  searchQuery,
  enabled,
}: {
  searchQuery: string;
  enabled: boolean;
}): typeof useQueryProps => {
  const useQueryProps = useQuery(
    ["searchBarText", searchQuery],
    fetchSearchAssets,
    {
      enabled,
      cacheTime: 1 * 60 * 1000,
    }
  );
  return useQueryProps;
};
