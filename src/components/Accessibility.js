import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import SearchBox from "./SearchBox";
import "../styles/Accessibilty.css";

const Accessibilty = ({
  searchBy,
  setSearchBy,
  searchQuery,
  setSearchQuery,
  searchByOptions,
  sortByOptions,
  setSortBy,
  sortBy,
}) => {
  return (
    <div className="accessibility">
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchBy={searchBy} />
      <FilterBy searchBy={searchBy} setSearchBy={setSearchBy} searchByOptions={searchByOptions} />
      <SortBy sortBy={sortBy} setSortBy={setSortBy} sortByOptions={sortByOptions} />
    </div>
  );
};

export default Accessibilty;
