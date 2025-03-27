import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { getCities } from "../API/geoAPI.jsx"
import PlaceCard from "../components/PlaceCard.jsx"
import axios from "axios"
import { getWeather } from "../API/weatherAPI.jsx"

const SearchResults = () => {
    const [places, setPlaces] = useState ([]);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState ('');

    const location = useLocation ();
    const navigate = useNavigate ();
    const city = new URLSearchParams(location.search).get('city');

    useEffect (() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const results = await getCities(city);
                setPlaces(results);

                const weatherData = await getWeather (city);
                setWeather (weatherData);

            } catch (error) {
                console.error ('Error:', error);
                setError ('Failed to load search results.');
            } finally {
                setLoading(false);
            }
        };
        if (city) fetchData();
    }, [city]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error-text">{error}</p>;

    return (
        <div>
            <h2>Search Results for {city}</h2>
            <h3>Suggested Cities</h3>

            {Array.isArray(places) && places.length > 0 ? (
            <ul>
                {places.map((place, idx) => (
                <PlaceCard 
                key={idx} 
                name={place?.display_name || 'unknown'} 
                country={place?.type || ''} 
                />
                ))}
            </ul>
            ) : (
            <p>No results found for "{city}".</p>
            )}

                {weather?.current && (
                <div>
                    <h3>Current Weather in {city}</h3>
                    <p>{weather.current.condition.text} - {weather.current.temp_c}°C</p>
                    <img src={weather.current.condition.icon} alt="weather icon" />
                </div>
                )}

        </div>
    );
};

export default SearchResults; 