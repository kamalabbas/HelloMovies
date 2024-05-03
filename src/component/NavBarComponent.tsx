import { NavLink } from "react-router-dom";
import { SearchComponent } from "./SearchComponent";
import useMoviesQuery from "../state-management/MovieQueryStore";

function NavbarComponent() {
  const setApiType = useMoviesQuery((s) => s.setApiType);
  const setType = useMoviesQuery((s) => s.setType);

  return (
    <div className="container">
      <div className="navbar bg-base-100 py-4 px-0">
        <div className="flex-1">
          <NavLink to="/" className="text-xl">Hello Movies</NavLink>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="movies" onClick={() => {setApiType('/discover/movie'); setType('movie')}}>Movies</NavLink></li>
            <li><NavLink to="tv-series" onClick={() => {setApiType('/discover/tv'); setType('tv')}}>TV Series</NavLink></li>
          </ul>
        
          <SearchComponent />

          {/* <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
