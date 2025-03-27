import axios from "axios";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const getCityImage = async (cityName) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: cityName,
        per_page: 1
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });

    const results = response.data.results;
    return results.length > 0 ? results[0].urls.regular : null;
  } catch (error) {
    console.error("Unsplash API error:", error);
    return null;
  }
};
