import { Series } from "../entities/Series";
import { SekeltonCard } from "../component/SekeltonCard";
import { Filters } from "../component/Filters";
import InfiniteItemGrid from "../component/InfiniteItemGrid";
import useItemsQuery from "../state-management/ItemsQueryStore";
import useItems from "../hooks/useItems";

const SeriesPage = () => {
  const itemsQuery = useItemsQuery((s) => s.itemsQuery);

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useItems<Series>(itemsQuery);

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
        type="series"
      />
    </div>
  );
};
export default SeriesPage;
