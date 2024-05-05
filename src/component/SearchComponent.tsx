// import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import useMoviesQuery from "../state-management/MovieQueryStore";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchComponent = () => {
  const searchQuery = useRef<HTMLInputElement>(null);
  const setSearchQuery = useMoviesQuery((s) => s.setSearch);
  const setApiType = useMoviesQuery((s) => s.setApiType);

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(searchQuery.current?.value == "") return;
    
    if (e && e.key != "Enter") return;
    setSearchQuery(searchQuery.current?.value);
    setApiType("/search/tv");
    
    if(pathname == '/movies') {
      setApiType("/search/movie");
      navigate('/movies')
    }
    if(pathname == '/tv-series') {
      setApiType("/search/tv");
      navigate('/tv-series')
    };
  };

  return (
    <div className="form-control">
      <input
        type="text"
        className="input input-bordered w-24 md:w-auto"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => search(e)}
        ref={searchQuery}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};
