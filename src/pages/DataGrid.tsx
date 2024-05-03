import useMovies from "../hooks/useMovies";
import { Filters } from "../component/Filters";
import useMoviesQuery from "../state-management/MovieQueryStore";
import InfiniteScroll from "react-infinite-scroll-component";
import { MovieCardComponent } from "../component/MovieCardComponent";
import { SekeltonCard } from "../component/SekeltonCard";

export const DataGrid = () => {
  const movieQuery = useMoviesQuery((s) => s.movieQuery);

  const { data, fetchNextPage, hasNextPage, isLoading } = useMovies(movieQuery);
  const pageLength = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
        <div className="row-gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {isLoading && <SekeltonCard count={10} />}

          {data?.pages.map((page) => {
            return page.results.map((movie) => {
              return (
                <div key={movie.id}>
                  <MovieCardComponent item={movie}></MovieCardComponent>
                </div>
              );
            });
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};
