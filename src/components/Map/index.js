import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const SimpleMap = ({ location = "" }) => {

  const [place, setPlace] = useState(null)

  useEffect(() => {
    if (!location)
      return;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK')
          setPlace(data.results[0])
      })
  }, [location])

  return (
    <div style={{
      maxHeight: '300px', height: '100vh', width: '100%'
    }
    }>
      {place && (<GoogleMapReact
        defaultZoom={10}
        defaultCenter={[place.geometry.location.lat, place.geometry.location.lng]}
      >
        <Marker
          key={place.id}
          text={place.name}
          lat={place.geometry.location.lat}
          lng={place.geometry.location.lng}
        />

      </GoogleMapReact>)}
    </div >
  );
}


export default SimpleMap;
