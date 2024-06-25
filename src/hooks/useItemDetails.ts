import { useQuery } from "@tanstack/react-query";
import { getItem } from "../services/api-client";
import { Movie } from "../entities/Movie";

const useItemDetails = (id: number) =>
  useQuery({
    queryKey: ["itemDetails", id],
    queryFn: () => getItem<Movie>("/movie", id),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useItemDetails;
