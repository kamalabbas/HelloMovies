import { Link } from "react-router-dom";
import { Filters } from "../component/Filters";
import useSearch from "../hooks/useSearch";
import useMoviesQuery from "../state-management/MovieQueryStore";

export const SearchPage = () => {
  const movieQuery = useMoviesQuery((s) => s.movieQuery);
  const { data } = useSearch(movieQuery);

  return (
    <>
      <Filters />
      <div>{(data?.results.length == 0) && "No results found, go to hell."}</div>
      {data?.results.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </>
  );
};
