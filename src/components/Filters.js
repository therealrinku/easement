import { useState } from "react";
import { BiCaretDown, HiOutlineSearch } from "react-icons/all";
import "../styles/Filters.css";

const Filters = ({ searchQuery, setSearchQuery, onlySearchBox }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  return (
    <div className="filters">
      <form>
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div style={onlySearchBox ? { display: "none" } : null}>
        <button onClick={() => setShowSortOptions((prev) => !prev)}>
          <BiCaretDown />
          <span>Sort by</span>
        </button>

        <section className="options" style={!showSortOptions ? { display: "none" } : null}>
          <button>Name</button>
          <button>Class</button>
          <button>Roll no</button>
        </section>
      </div>
    </div>
  );
};

export default Filters;
