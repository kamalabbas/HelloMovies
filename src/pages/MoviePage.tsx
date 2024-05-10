import { Movie } from "../entities/Movie";
import { SekeltonCard } from "../component/SekeltonCard";
import { Filters } from "../component/Filters";
import useItems from "../hooks/useItems";
import useItemsQuery from "../state-management/ItemsQueryStore";
import InfiniteItemGrid from "../component/InfiniteItemGrid";

const MoviePage = () => {
  const itemsQuery = useItemsQuery((s) => s.itemsQuery);

  const { data, fetchNextPage, hasNextPage, isLoading } = useItems<Movie>(itemsQuery);

  const pageLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <div className="container my-4 px-6">
      <Filters />
      {isLoading && <SekeltonCard count={10} />}
      <InfiniteItemGrid
        pages={data?.pages}
        datalength={pageLength}
        hasMore={hasNextPage}
        next={fetchNextPage}
        type="movie"
      />
    </div>
  );
};
export default MoviePage;
