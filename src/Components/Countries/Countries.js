import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello World!</h1>
            <h3>Total Countries: {countries.length}</h3>
            <div className='countries-container'>
            {
                countries.map(country => <Country data={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;