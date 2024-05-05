import useMovies from "../hooks/useMovies";
import { Filters } from "../component/Filters";
import useMoviesQuery from "../state-management/MovieQueryStore";
import InfiniteScroll from "react-infinite-scroll-component";
import { SekeltonCard } from "../component/SekeltonCard";
import InfiniteItemGrid from "../component/InfiniteItemGrid";

export const DataGrid = () => {
  const movieQuery = useMoviesQuery((s) => s.movieQuery);

  const { data, fetchNextPage, hasNextPage, isLoading } = useMovies(movieQuery);
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
