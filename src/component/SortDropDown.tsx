import { useRef } from "react";
import useMoviesQuery from "../state-management/MovieQueryStore";

// refacter this code.

function SortDropDown() {
  const sortValues = [
    { label: "Sort", value: "Sort" },
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
  const setSortOrder = useMoviesQuery(s => s.setSortOrder);

  return (
    <select className="select w-full max-w-xs" ref={SelectedSortOrder} onChange={() => setSortOrder(SelectedSortOrder.current?.value)} id="dropdown-basic-button">
      {sortValues?.map((sort) => (
        <option key={sort.value} value={sort.value}>{sort.label}</option>
      ))}
    </select>
  );
}

export default SortDropDown;
