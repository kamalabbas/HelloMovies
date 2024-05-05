import InfiniteScroll from "react-infinite-scroll-component";
import { FetchResponse } from "../entities/FetchResponse";
import { Movie } from "../entities/Movie";
import { Series } from "../entities/Series";
import { MovieCardComponent } from "./MovieCardComponent";

interface Props {
  pages?: FetchResponse<Movie | Series>[];
  datalength: number;
  next: () => void;
  hasMore: boolean;
  type: string;
}

const InfiniteItemGrid = ({
  pages,
  datalength,
  next,
  hasMore,
  type,
}: Props) => {
  return (
    <InfiniteScroll
      className="overflow-hidden"
      dataLength={datalength}
      next={next}
      hasMore={hasMore}
      loader={<div></div>}
    >
      <div className="row-gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {pages?.map((page) =>
          page.results.map((item) => (
            <div key={item.id}>
              {type === "movie" ? (
                <MovieCardComponent item={item}></MovieCardComponent>
              ) : (
                <></>
              )}
            </div>
          ))
        )}
      </div>
    </InfiniteScroll>
  );
};
export default InfiniteItemGrid;
