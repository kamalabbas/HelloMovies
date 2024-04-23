import GenreDropDown from "./GenreDropDown";
import SortDropDown from "./SortDropDown";

export const Filters = () => {

  return (
    <>
      <div className="flex gap-5 mb-6">
        <GenreDropDown />
        <SortDropDown />
      </div>
    </>
  );
};


