
import {ChangeEvent} from "react";
import useGenres from "../hooks/useGenres";
import useMoviesQuery from "../state-management/MovieQueryStore";

function GenreDropDown() {
  const setGenreId = useMoviesQuery((s) => s.setGenreId);
  const type = useMoviesQuery((s) => s.movieQuery.type);
  const { data } = useGenres(type);
    
  return (
    <select className="select w-full max-w-xs" id="dropdown-basic-button" onChange={(e: ChangeEvent<HTMLSelectElement>) => setGenreId(+e.target.value)}>
      <option value="0">Select Category</option>
      {data?.genres.map((item) => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
    </select>
  );
}

export default GenreDropDown;
