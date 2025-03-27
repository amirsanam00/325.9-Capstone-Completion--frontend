import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [destination, setDestination] = useState ('');
    const navigate = useNavigate ();

    const handleSearch = () => {
        if (destination) {
            navigate(`/results?city=${encodeURIComponent(destination)}`);
        }
    };

    return (
        <div className="home">
            <h1>Travel Planner</h1>

            <p>Plan your next trip with personalized recommendations, real-time weather, and itinerary generation.</p>

            <input 
            type="text" 
            placeholder = "Enter your destination"
            value={destination}
            onChange={(e) => setDestination (e.target.value)}
            />

            <br /><br />

            <button onClick={handleSearch}>Search</button>

        </div>
    );

};

export default Home;