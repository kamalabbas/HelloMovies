import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie } from "../entities/Movie";
import APIClient from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { MovieQuery } from "../state-management/MovieQueryStore";

const apiClient = new APIClient<Movie>('/discover/movie');

const useMovies = (movieQuery: MovieQuery) => useInfiniteQuery<FetchResponse<Movie>, Error>({
        queryKey: ['movies', movieQuery],
        queryFn: ({pageParam}) => apiClient.getAll({params: {with_genres: movieQuery.genreId, sort_by: movieQuery.sortValue, pageParam: pageParam }}),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => allPages.length + 1,
        staleTime: 24 * 60 * 60 * 1000
});

export default useMovies;