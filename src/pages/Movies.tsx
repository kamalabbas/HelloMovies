import { Link } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { Filters } from '../component/Filters';
import useMoviesQuery from '../state-management/MovieQueryStore';

export const Movies = () => {
  const movieQuery = useMoviesQuery(s => s.movieQuery);
  const { data } =  useMovies(movieQuery);
  return (
    <>
      <Filters />
      { data?.results.map((movie) =>
      <div key={movie.id}>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </div>
      )}
    </>
  )
}
