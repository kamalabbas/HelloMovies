import useMovies from "../hooks/useMovies";
import { Filters } from "../component/Filters";
import useMoviesQuery from "../state-management/MovieQueryStore";
import InfiniteScroll from "react-infinite-scroll-component";
import { MovieCardComponent } from "../component/MovieCardComponent";

export const Movies = () => { 
  const movieQuery = useMoviesQuery((s) => s.movieQuery);
  const { data, fetchNextPage, hasNextPage } = useMovies(movieQuery);
  const pageLength = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <Filters />
      
      <InfiniteScroll className="overflow-hidden"
        dataLength={pageLength}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div></div>}
      >
        <div className="row-gap-24">
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
    </>
  );
};