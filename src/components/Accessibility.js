import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import SearchBox from "./SearchBox";
import "../styles/Accessibilty.css";

const Accessibilty = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="accessibility">
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterBy />
      <SortBy />
    </div>
  );
};

export default Accessibilty;
