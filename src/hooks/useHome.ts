import { useQueries } from "@tanstack/react-query";
import { get } from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { Movie } from "../entities/Movie";

const apiEnpoints = {
  movie: ["popular", "top_rated"],
  tv: ["popular", "top_rated"],
  trending: ["movie", "tv"],
};

const queries = Object.entries(apiEnpoints).map(([key, values]) =>
  values.map((value) => ({
    queryKey: [key + value],
    queryFn: () =>
      get<FetchResponse<Movie>>(
        `${key}/${value}${key === "trending" ? "/day" : ""}`
      ),
      staleTime: 24 * 60 * 60 * 1000,
  }))
);

const useHome = () =>
  useQueries({
    queries: queries[0].concat(queries[1]).concat(queries[2]),
  });

export default useHome;
