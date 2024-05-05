import { useQuery } from "@tanstack/react-query";
import { get } from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { Movie } from "../entities/Movie";

const useHome = () =>
  useQuery({
    queryKey: ["home"],
    queryFn: () => get<FetchResponse<Movie>>("/movie/now_playing"),
    staleTime: 24 * 60 * 60 * 1000, // 24
  });

export default useHome;
