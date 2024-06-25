// import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import useItemsQuery from "../state-management/ItemsQueryStore";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchComponent = () => {
  const searchQuery = useRef<HTMLInputElement>(null);
  const setSearchQuery = useItemsQuery((s) => s.setSearch);
  const setApiType = useItemsQuery((s) => s.setApiType);
  const type = useItemsQuery((s) => s.itemsQuery.type);

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchQuery.current?.value == "") return;
    
    if (e && e.key != "Enter") return;
    setSearchQuery(searchQuery.current?.value);
    setApiType("/search/tv");

    if (pathname == "/movies") {
      setApiType("/search/movie");
      navigate("/movies");
    }
    if (pathname == "/tv-series") {
      setApiType("/search/tv");
      navigate("/tv-series");
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        className="input input-bordered w-auto"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => search(e)}
        ref={searchQuery}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};
