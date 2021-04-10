import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import SearchBox from "./SearchBox";
import "../styles/Accessibilty.css";

const Accessibilty = ({ searchBy, setSearchBy, searchQuery, setSearchQuery, searchByOptions }) => {
  return (
    <div className="accessibility">
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchBy={searchBy} />
      <FilterBy setSearchBy={setSearchBy} searchByOptions={searchByOptions} />
      <SortBy />
    </div>
  );
};

export default Accessibilty;
