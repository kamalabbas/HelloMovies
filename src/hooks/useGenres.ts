import { useQuery } from "@tanstack/react-query";
import { Genres } from "../entities/Generes";
import { get } from "../services/api-client";

const useGenres = (type: any) => {
  return useQuery<Genres>({
    queryKey: ["genres", type],
    queryFn: () => get(`/genre/${type}/list`),
    staleTime: 24 * 60 * 60 * 1000, // 24
  });
};

export default useGenres;
