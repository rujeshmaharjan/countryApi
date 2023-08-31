import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div className='countryCard'>
      <Link to={`/country/${country.name}`} state={country} >
        <img className='cardFlag' src={country.flag} alt={`${country.name} Flag`} />
        <div className="cardname">
          <h1>{country.name}</h1>
        </div>
      </Link>
    </div>
  );
}

export default CountryCard;
