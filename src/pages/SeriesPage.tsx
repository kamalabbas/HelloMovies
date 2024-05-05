import InfiniteScroll from "react-infinite-scroll-component";
import { Filters } from "../component/Filters";
import InfiniteItemGrid from "../component/InfiniteItemGrid";
import { SekeltonCard } from "../component/SekeltonCard";
import { Series } from "../entities/Series";
import useMovies from "../hooks/useMovies";
import useMoviesQuery from "../state-management/MovieQueryStore";

const SeriesPage = () => {
  const movieQuery = useMoviesQuery((s) => s.movieQuery);

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useMovies<Series>(movieQuery);
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
export default SeriesPage;
