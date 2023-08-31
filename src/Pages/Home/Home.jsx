import React, { useState } from "react";
import CountryCard from "../../components/CountrieCard/CountryCard";
import "./Home.css";
import Button from "../../components/button/Button";

const Home = ({ data, loading }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const filteredCountries = selectedRegion
    ? data.filter(country => country.region === selectedRegion)
    : data;

  return (
    <div className="main">
      <h1 className="title">List of Countries</h1>
      <div className="list">
        <Button onSelectRegion={handleRegionSelect} />
      </div>
      <div className="cards">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
