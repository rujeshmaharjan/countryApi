import React from 'react';
import "./Button.css";
import useApi from '../../api';

const Button = ({ onSelectRegion }) => {
    const { data, loading } = useApi();

    const regions = {};

    // Iterate through the data and check for duplicate regions
    data.forEach((country) => {
        if (!regions[country.region]) {
            regions[country.region] = true;
        }
    });

    const uniqueRegions = Object.keys(regions);

    const handleAllClick = () => {
        onSelectRegion(null); // Selecting "All" sets selectedRegion to null
    };

    const handleClick = (region) => {
        onSelectRegion(region);
    }

    return (
        <div>
            <button className='btton' onClick={handleAllClick}>All</button>
            {uniqueRegions.map((region) => (
                <button
                    className='btton'
                    key={region}
                    onClick={() => handleClick(region)}
                >
                    {region}
                </button>
            ))}
        </div>
    );
}

export default Button;
