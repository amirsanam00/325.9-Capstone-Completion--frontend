import axios from "axios";

// const geoApiKey = import.meta.env.VITE_GEO_API_KEY;

export const getCities = async (cityPrefix) => {
    try {
        const response = await axios.get ('https://nominatim.openstreetmap.org/search', {
            params: {
                q: cityPrefix,
                format: 'json',
                limit: 5
            }
        });
        return response.data.data;
    } catch(error) {
        console.error ('Nominatim API error:', error);
        throw error;
    }
};