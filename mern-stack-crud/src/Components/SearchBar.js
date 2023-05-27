import React, { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
//Luodaan toiminnallinen komponentti nimeltä "searchBar" ES6 syntaksilla
export default function SearchBar() {
  //Käytetään useState-hookkia muuttujan luomiseen
  const FlavourList = () => {
    const [allFlavours, setFlavours] = useState(null);
    useEffect(() => {
      const fetchFlavours = async () => {
        const response = await fetch("/api/getall");
        const json = await response.json();

        if (response.ok) {
          setFlavours(json);
        }
      };
      fetchFlavours();
    }, []);
  };
  console.log(FlavourList);
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search.."
        value={allFlavours}
        onChange={(e) => setFlavours(e.target.value)}
      />
    </div>
  );
}
