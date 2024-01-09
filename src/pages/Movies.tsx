import { Link } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { Filters } from '../component/Filters';

export const Movies = () => {
  const { data } =  useMovies();
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
