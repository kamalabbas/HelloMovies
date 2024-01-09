import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genres } from "../entities/Generes";

const apiClient = new APIClient<Genres>('/genre/movie/list');

const useGenres = () => useQuery<Genres>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getGenre(),
    staleTime: 24 * 60 * 60 * 1000 // 24
})

export default useGenres;