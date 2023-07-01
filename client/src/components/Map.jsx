import { React, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import Axios from "axios";
import { Link } from "react-router-dom";

function Map({ latitude, longitude }) {
  const [properties, setProperties] = useState();
  const [radius, setRadius] = useState(1000);

  useEffect(() => {
    const getNearbyProperty = async () => {
      try {
        const url = `http://localhost:3000/properties/near-by?${longitude}&${latitude}&distance=${1000}`;
        console.log(url);
        const response = await axios.get(url, {
          params: {
            lat: latitude,
            lng: longitude,
            distance: radius,
          },
        });
        setProperties(response.data);
      } catch (error) {
        console.error(err);
      }
    };
  }, [latitude, longitude, radius]);
  return (
    <div>
      <h3>Filter Radius</h3>
      <select value={radius} onChange={(e) => setRadius(e.target.value)}>
        <option value="200">200 Mtrs</option>
        <option value="500">500 Mtrs</option>
        <option value="700">700 Mtrs</option>
        <option value="1000">1000 Mtrs</option>
      </select>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => (
          <Marker
            key={property._id}
            position={[
              property.location.coordinates[1],
              property.location.coordinates[0],
            ]}
          >
            <Popup>
              <Link to={`/properties/${property._id}`}>{property.title}</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
