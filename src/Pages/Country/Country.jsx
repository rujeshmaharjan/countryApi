import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useApi from '../../api';
import "./Country.css";

const Country = () => {
  const { id } = useParams();
  const { data, loading } = useApi();

  if (loading) {
    return <div>Loading...</div>;
  }

  const country = data.find(country => country.name === id);

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div className="country-container">

      <div className='country-card'>
        <div className="country-flag-wrapper">
          <img className='country-flag' src={country.flag} alt={`${country.name} Flag`} />
        </div>
        <div className="country-details">
          <h1>{country.name}</h1>
          <h5>Capital: {country.capital}</h5>
          <h5>Native Name: {country.nativeName}</h5>
          <h5>Population: {country.population}</h5>
          <h5>Region: {country.region}</h5>
          <h5>Subregion: {country.subregion}</h5>
          <h5>Languages: {country.languages ? country.languages.map(lang => lang.name).join(', ') : 'N/A'}</h5>
          <h5>Currencies: {country.currencies ? country.currencies.map(curr => curr.name).join(', ') : 'N/A'}</h5>
          <h5>Area: {country.area} square kilometers</h5>
          <h5>Demonym: {country.demonym}</h5>
          <h5>Calling Codes: {country.callingCodes ? country.callingCodes.join(', ') : 'N/A'}</h5>
          <h5>Timezones: {country.timezones ? country.timezones.join(', ') : 'N/A'}</h5>
          <h5>Alpha-2 Code: {country.alpha2Code}</h5>
          <h5>Alpha-3 Code: {country.alpha3Code}</h5>
          <h5>Top Level Domain: {country.topLevelDomain ? country.topLevelDomain.join(', ') : 'N/A'}</h5>
          <h5>Bordering Countries: {country.borders ? country.borders.join(', ') : 'N/A'}</h5>
        </div>
      </div>
            <Link to="/">
      <button className='back-button'>
              Back
        </button>
              </Link>
    </div>
  );
}

export default Country;
