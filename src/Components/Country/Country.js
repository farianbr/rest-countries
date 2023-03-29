import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, region, flags} = props.data
    
    console.log(name);
    return (
        <div className='country-container'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" srcset="" />
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;