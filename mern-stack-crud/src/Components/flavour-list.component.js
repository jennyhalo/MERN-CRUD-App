import React, { useState, useEffect } from "react";

import SearchBar from "./searchBar";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

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

  return (
    <div>
      <div className="search-bar-container">
        <div>
          <SearchBar />
        </div>
        <div>SearchResults</div>
      </div>
      {allFlavours &&
        allFlavours.map((flavour) => (
          <React.Fragment key={flavour.Id}>
            <Card className="card">
              <div className="card-body">
                <p>{flavour.title}</p>
                <img src={flavour.Image} alt="" className="flavour-image" />
                <div className="flavour-text">
                  <h2>{flavour.Flavour}</h2>
                  <p>{flavour.Description}</p>
                </div>
              </div>
              <div className="button-container">
                <Button className="edit-button">Edit</Button>
                <Button className="delete-button">Delete</Button>
              </div>
            </Card>
          </React.Fragment>
        ))}
    </div>
  );
};

export default FlavourList;
