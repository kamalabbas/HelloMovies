import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entities/Movie";
import APIClient from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { MovieQuery } from "../state-management/MovieQueryStore";

const apiClient = new APIClient<Movie>('/search/movie');

const useSearch = (movieQuery: MovieQuery) => useQuery<FetchResponse<Movie>>({
    queryKey: ['search', movieQuery],
    queryFn: () => apiClient.getAll({params: {with_genres: movieQuery.genreId, sort_by: movieQuery.sortValue, query: movieQuery.searchQuery }})
})

export default useSearch;