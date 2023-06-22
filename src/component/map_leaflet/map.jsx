import * as React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './map.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiProvider';

const position = [20.254405, 106.306895];

function GetIcon(status) {
  return L.icon({
    // iconUrl: require("./assets/" + status + "_location.png"),
    iconUrl: require('../../Assets/' + status + '.png'),
    iconSize: [38, 38],
  });
}

const Mapleaflet = () => {
  const [markers, setMarkers] = useState([]);
  const { getAPIData, getChartData } = useContext(ApiContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?id=1573517&appid=20ec6b44f4246937e3befcf4bfe33e08&units=metric'
        );
        const response2 = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?id=1798909&appid=20ec6b44f4246937e3befcf4bfe33e08&units=metric'
        );
        const data = await response.json();
        const data2 = await response2.json();
        const markerData = [
          {
            id: data.id,
            name_device: data.name,
            lat: data.coord.lat,
            lng: data.coord.lon,
            status: data.weather.description,
            status_flag: data.weather.main,
          },
          {
            id: data2.id,
            name_device: data2.name,
            lat: data2.coord.lat,
            lng: data2.coord.lon,
            status: data2.weather.description,
            status_flag: data2.weather.main,
          },
        ];
        // console.log(markerData);
        setMarkers(markerData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleMarkerClick = async (id) => {
    await getAPIData(id);
    await getChartData(id);
  };

  return (
    <MapContainer center={position} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
          icon={GetIcon(marker.name_device)}
          eventHandlers={{
            click: () => handleMarkerClick(marker.id),
          }}
        >
          <Popup>
            <h5>
              {marker.name_device} <br></br> {marker.lat}
            </h5>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default Mapleaflet;
