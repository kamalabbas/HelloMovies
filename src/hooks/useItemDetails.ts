import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../entities/Movie";

const apiClient = new APIClient<Movie>("/movie");

const useItemDetails = (id: number | string) =>
  useQuery({
    queryKey: ["itemDetails", id],
    queryFn: () => apiClient.get(id),
  });

export default useItemDetails;
