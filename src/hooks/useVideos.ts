import { useQuery } from "@tanstack/react-query";
import { trailer } from "../entities/videos";
import { get } from "../services/api-client";

export const useVideos = (id: number) => {
    return useQuery<trailer>({
        queryKey: ["videos", id],
        queryFn: () => get(`/movie/${id}/videos`),
        staleTime: 24 * 60 * 60 * 1000 // 24
    });
}
