import React from 'react';

const PlaceCard = ({ name, country }) => (

  <div style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
    
    <h4>{name}, {country}</h4>
  </div>
);

export default PlaceCard;