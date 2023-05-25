import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
//Luodaan toiminnallinen komponentti nimeltä "searchBar" ES6 syntaksilla
export default function SearchBar() {
  //Käytetään useState-hookkia muuttujan luomiseen
  const [searchInput, setSearchInput] = useState("");

  const fetchData = (value) => {
    try {
    fetch("/api/getall")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
    } catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search.."
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
}
