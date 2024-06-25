import { NavLink } from "react-router-dom";
import { SearchComponent } from "./SearchComponent";
import useItemsQuery from "../state-management/ItemsQueryStore";

function NavbarComponent() {
  const setApiType = useItemsQuery((s) => s.setApiType);
  const setType = useItemsQuery((s) => s.setType);

  return (
    <div className="container">
      <div className="navbar bg-base-100 py-4 px-0">
        <div className="flex-1">
          <NavLink to="/" className="text-xl">
            Hello Movies
          </NavLink>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 hidden md:flex gap-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {/* <NavLink
                to="movies"
                onClick={() => {
                  setApiType("/discover/movie");
                  setType("movie");
                }}>
                Movies
              </NavLink> */}
              <NavLink to="movies">Movies</NavLink>
            </li>
            {/* <li>
              <NavLink
                to="tv-series"
                onClick={() => {
                  setApiType("/discover/tv");
                  setType("tv");
                }}>
                TV Series
              </NavLink>
            </li> */}
          </ul>

          <SearchComponent />

          <div className="drawer drawer-end md:hidden z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
            </div>
            <div className="drawer-side">
              <div className="h-full bg-base-200 relative">
              {/* Close icon */}
                <label className="flex ml-auto p-4 justify-end" htmlFor="my-drawer" aria-label="close sidebar" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#fff">
                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#fff"/>
                  </svg>
                </label>

                {/* Main menu */}
                <ul className="menu text-base-content h-full w-80 p-4">
                  <li><a>Homepage</a></li>
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
