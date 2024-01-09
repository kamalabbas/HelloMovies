import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import useGenres from "../hooks/useGenres";

function GenreDropDown() {
  const { data } = useGenres();

  return (
    <DropdownButton id="dropdown-basic-button" title="Genres" className='mb-4'>
      {data?.genres.map((item) => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>)}
    </DropdownButton>
  );
}

export default GenreDropDown;