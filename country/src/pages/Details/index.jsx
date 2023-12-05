import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Details() {
    let { countryName } = useParams();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => setCountries(res.data))
    }, [countryName]);

    return (
        <>
            <Link to={"/"}><button>Go back</button></Link>
            <ul className='cards'>
                {countries.map(country => (
                    <li key={country.id}>
                        <img src={country.flags.png}/>
                        <div className="about">
                            <h4>Country: {country.name.common}</h4>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                            <p>Subregion:{country.subregion}</p>
                            <p>TimeZone:{country.timezones}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Details;
