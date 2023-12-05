import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';

function Home() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setCountries(res.data))
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value)

    }

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
    }

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        (selectedRegion === "" || country.region === selectedRegion)
    );

    return (
        <>
            <Header />
            <div>
                <div className="filter">
                    <input type="text" onChange={(e) => handleSearch(e)} placeholder='Search..'/>
                    <select name="region" onChange={(e) => handleRegionChange(e)}>
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>

                <div>
                    <ul>
                        {filteredCountries.map(country => (
                            <li key={country.id}>
                                <img src={country.flags.png} />
                                <div className="about">
                                    <h4>Country: {country.name.common}</h4>
                                    <p>Population: {country.population}</p>
                                    <p>Region: {country.region}</p>
                                    <p>Capital: {country.capital}</p>
                                    <Link to={`/details/${country.name.common}`}>
                                        <button>Details</button>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                </div>
            </div>
        </>
    );
}

export default Home;
