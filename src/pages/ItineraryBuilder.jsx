import { useState } from 'react'
import axios from "axios";

const ItineraryBuilder = () => {
    const [form, setForm] = useState({
        userId: " ",
        city: " ",
        dates: [],
        activities: [],
        hotels: [],
        restaurants: []
    });

    const handleSave = async () => {
        try {
            await axios.post("/api/itineraries", form);
            alert("Itinerary saved");
        } catch (error) {
            console.error("Failed to save itinerary", error);
        }
    };

    return (
        <div className="itinerary-builder">

            <h2>Itinerary Builder</h2>

            <input type="text"
            placeholder = "City"
            onChange = {(e) => setForm ({ ...form, city: e.target.value})} />

            <br /> <br />

            <textarea
            placeholder="Activities (comma-separated)"
            onChange={(e) => setForm ({ ...form, activities: e.target.value.split(',')
            })} />

            <button onClick={handleSave}>Save Itinerary</button>

        </div>
    );
};

export default ItineraryBuilder;