import { HiOutlineSearch } from "react-icons/all";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <form>
      <HiOutlineSearch />
      <input
        type="text"
        placeholder="Search here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
