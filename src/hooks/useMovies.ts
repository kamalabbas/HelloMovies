import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entities/Movie";
import APIClient from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";


const apiClient = new APIClient<Movie>('/discover/movie');

const useMovies = () => useQuery<FetchResponse<Movie>, Error>({
        queryKey: ['movies'],
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 60 * 60 * 1000
});

export default useMovies;