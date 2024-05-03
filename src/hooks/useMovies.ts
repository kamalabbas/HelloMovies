import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie } from "../entities/Movie";
import { getresults } from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { MovieQuery } from "../state-management/MovieQueryStore";

const useMovies = (movieQuery: MovieQuery) => useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ['movies', movieQuery],
    queryFn: ({pageParam}) => getresults(movieQuery.apiType!, {params: {with_genres: movieQuery.genreId, sort_by: movieQuery.sortValue, page: pageParam, query: movieQuery.searchQuery }}),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    staleTime: 24 * 60 * 60 * 1000
  });


export default useMovies;