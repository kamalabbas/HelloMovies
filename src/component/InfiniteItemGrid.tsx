import { FetchResponse } from "../entities/FetchResponse";
import { Movie } from "../entities/Movie";
import { Series } from "../entities/Series";
import { MovieCardComponent } from "./MovieCardComponent";

interface Props {
  pages?: FetchResponse<Movie | Series>[];
}

const InfiniteItemGrid = ({ pages }: Props) => {
  return (
    <div className="row-gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {pages?.map((page) =>
        page.results.map((item) => (
          <div key={item.id}>
            <MovieCardComponent item={item}></MovieCardComponent>
          </div>
        ))
      )}
    </div>
  );
};
export default InfiniteItemGrid;
