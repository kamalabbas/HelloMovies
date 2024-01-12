import { Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { Filters } from "../component/Filters";
import useMoviesQuery from "../state-management/MovieQueryStore";
import InfiniteScroll from "react-infinite-scroll-component";

export const Movies = () => {
  const movieQuery = useMoviesQuery((s) => s.movieQuery);
  const { data, fetchNextPage, hasNextPage } = useMovies(movieQuery);

  const pageLength = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
    <Filters />

    <InfiniteScroll dataLength={pageLength} next={fetchNextPage} hasMore={hasNextPage} loader={<div>aaaaaaaaaaaaaaaaaaa</div>}>
        {data?.pages.map((page) => {
          return page.results.map((movie) => {
            return <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </div>;
          });
        })}

    </InfiniteScroll>
    </>
  );
};
