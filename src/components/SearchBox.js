import { HiOutlineSearch } from "react-icons/all";

const SearchBox = ({ searchBy, searchQuery, setSearchQuery }) => {
  return (
    <form>
      <HiOutlineSearch />
      <input
        type="text"
        placeholder={`Search by ${searchBy}`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
