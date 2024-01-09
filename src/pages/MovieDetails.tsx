import useMovie from '../hooks/useMovie';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();

  const { data, error } = useMovie(id!);


  if(error) throw error;

  return (
    <>
        {data?.title}       
    </>
  )
}
