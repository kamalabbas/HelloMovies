import { useInfiniteQuery } from "@tanstack/react-query";
import { getresults } from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { ItemsQuery } from "../state-management/ItemsQueryStore";

const useItems = <T>(itemsQuery: ItemsQuery) =>
  useInfiniteQuery<FetchResponse<T>, Error>({
    queryKey: ["items", itemsQuery],
    queryFn: ({ pageParam }) =>
      getresults(itemsQuery.apiType!, {
        params: {
          with_genres: itemsQuery.genreId,
          sort_by: itemsQuery.sortValue,
          page: pageParam,
          query: itemsQuery.searchQuery,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useItems;
