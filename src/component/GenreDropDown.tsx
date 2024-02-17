
import useGenres from "../hooks/useGenres";
import useMoviesQuery from "../state-management/MovieQueryStore";

function GenreDropDown() {
  const { data } = useGenres();

  const genreId = useMoviesQuery((s) => s.movieQuery.genreId);
  const setGenreId = useMoviesQuery((s) => s.setGenreId);

  // to look it over 
  const selectedGenre = (genreId: number) => data?.genres.find((item) => genreId == item.id);

  return (
    <select id="dropdown-basic-button" title={genreId ? selectedGenre(genreId)?.name : 'Genres'} className="mb-4">
    {data?.genres.map((item) => (
        <option onClick={() => setGenreId(item.id)} key={item.id}>{item.name}</option>
      ))}
    </select>
  );
}

export default GenreDropDown;
