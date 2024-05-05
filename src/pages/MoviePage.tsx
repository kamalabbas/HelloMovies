import InfiniteScroll from "react-infinite-scroll-component";
import { Filters } from "../component/Filters";
import useMovies from "../hooks/useMovies";
import useMoviesQuery from "../state-management/MovieQueryStore";
import { SekeltonCard } from "../component/SekeltonCard";
import InfiniteItemGrid from "../component/InfiniteItemGrid";
import { Movie } from "../entities/Movie";

const MoviePage = () => {
  const movieQuery = useMoviesQuery((s) => s.movieQuery);

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useMovies<Movie>(movieQuery);
  const pageLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <div className="container my-4 px-6">
      <Filters />

      <InfiniteScroll
        className="overflow-hidden"
        dataLength={pageLength}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div></div>}
      >
        {isLoading && <SekeltonCard count={10} />}
        <InfiniteItemGrid pages={data?.pages} />
      </InfiniteScroll>
    </div>
  );
};
export default MoviePage;
