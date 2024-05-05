import { useQueries, useQuery } from "@tanstack/react-query";
import { get } from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { Movie } from "../entities/Movie";

const apis = ['now_playing', 'popular', 'top_rated']
// const apiBjt = {
//     movies: [],
//     series: []
// }

//  const useHome = () => useQuery({
//     queryKey: ['home'],
//     queryFn: () => get<FetchResponse<Movie>>('/movie/now_playing'),
//     staleTime: 24 * 60 * 60 * 1000 // 24
// })

 const useHome = () => useQueries({
    queries: apis.map(query => ({
        queryKey: [query],
        queryFn: () => get<FetchResponse<Movie>>(`/movie/${query}`),
        staleTime: 24 * 60 * 60 * 1000 // 24
    }))

})

// const ids = [1, 2, 3]
// const results = useQueries({
//   queries: ids.map((id) => ({
//     queryKey: ['post', id],
//     queryFn: () => fetchPost(id),
//     staleTime: Infinity,
//   })),
// })

export default useHome;
