import { useEffect, useState } from 'react';
import axios from 'axios';

const SavedItineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItineraries = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/itineraries', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setItineraries(response.data);
      } catch (err) {
        console.error('Failed to load itineraries', err);
        setError('Could not fetch itineraries');
      } finally {
        setLoading(false);
      }
    };
    fetchItineraries();
  }, []);

  if (loading) return <p>Loading saved itineraries...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>My Saved Itineraries</h2>
      {itineraries.length === 0 ? (
        <p>No itineraries saved yet.</p>
      ) : (
        <ul>
          {itineraries.map((item, index) => (
            <li key={index}>
              <h4>{item.city}</h4>
              <p>Activities: {item.activities.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedItineraries;