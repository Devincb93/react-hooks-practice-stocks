import React, { useState } from "react";

function SearchBar({ onSort, onFilter }) {

  const [sortType, setSortType] = useState(null);
  const [filterType, setFilterType] = useState('All')
 
  const handleSortChange = (event) => {
    const selectedSortType = event.target.value;
    setSortType(selectedSortType);
    onSort(selectedSortType);
    console.log('here it is', selectedSortType) 
  }

  const handleFilterTypeChange = (event) => {
    const selectedFilterType = event.target.value;
    setFilterType(selectedFilterType);
    onFilter(selectedFilterType);
    console.log('here it is again', selectedFilterType)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortType === 'Alphabetically'}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortType === 'Price'}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterTypeChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
