import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { Series } from "../entities/Series";

const apiClient = new APIClient<Series>('/discover/tv');

const useSeries = () => useQuery<FetchResponse<Series>, Error>({
    queryKey: ['series'],
    queryFn: () => apiClient.getAll(),
    staleTime: 24
})

export default useSeries;