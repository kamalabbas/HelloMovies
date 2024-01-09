// import Dropdown from "react-bootstrap/esm/Dropdown";
import { useRef } from "react";
import useMoviesQuery from "../state-management/MovieQueryStore";

function SortDropDown() {
  const sortValues = [
    { label: "popularity asc", value: "popularity.asc" },
    { label: "popularity desc", value: "popularity.desc" },
    { label: "revenue asc", value: "revenue.asc" },
    { label: "primary release date asc", value: "primary_release_date.asc" },
    { label: "primary release date desc", value: "primary_release_date.desc" },
    { label: "vote average asc", value: "vote_average.asc" },
    { label: "vote average desc", value: "vote_average.desc" },
    { label: "vote count asc", value: "vote_count.asc" },
    { label: "vote count desc", value: "vote_count.desc" }
  ];

  const SelectedSortOrder = useRef<HTMLSelectElement>(null);

//   const sortValue = useMoviesQuery(s => s.movieQuery.sortValue);
  const setSortOrder = useMoviesQuery(s => s.setSortOrder);

  return (
    <select ref={SelectedSortOrder} onChange={() => setSortOrder(SelectedSortOrder.current?.value)} id="dropdown-basic-button" className="mb-4">
      {sortValues?.map((sort) => (
        <option key={sort.value} value={sort.value}>{sort.label}</option>
      ))}
    </select>
  );
}

export default SortDropDown;
