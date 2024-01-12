import { Button, Form, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import useMoviesQuery from "../state-management/MovieQueryStore";
import { useLocation, useNavigate, } from "react-router-dom";

export const SearchComponent = () => {
  const searchQuery = useRef<HTMLInputElement>(null);
  const setSearchQuery = useMoviesQuery((s) => s.setSearch);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key != "Enter") return;
    
    if (pathname != '/search') navigate("search");
    setSearchQuery(searchQuery.current?.value);
  };

  return (
    <InputGroup className="w-auto">
      <InputGroup.Text>
        <CiSearch />
      </InputGroup.Text>
      <Form.Control 
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => search(e)} 
        ref={searchQuery}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </InputGroup>
  );
};
