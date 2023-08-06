import * as React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './map.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiProvider';

const position = [20.162247, 106.343542]

function GetIcon(status) {
  return L.icon({
    iconUrl: require('../../Assets/normal.png'),
    // iconUrl: require('../../Assets/' + status + '.png'),
    iconSize: [38, 38],
  });
}

const Mapleaflet = () => {
  const [markers, setMarkers] = useState([]);
  const { getChartData } = useContext(ApiContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response3 = await fetch('http://127.0.0.1:5002/api/device/get/API_key');
        const data3 = await response3.json();
        console.log(data3)
        
        var markerData = []
        if(data3 != null){
          data3.API_key.forEach(device => {
            markerData.push({
              id:device.API_key,
              lat: device.lat,
              lon: device.lon
            })
          });
        }
        console.log(markerData);
        setMarkers(markerData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleMarkerClick = async (id,num_data) => {
    console.log('API:'+id)
    await getChartData(id,num_data);
  };

  return (
    <MapContainer center={position} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lon]}
          icon={GetIcon(marker.id)}
          eventHandlers={{
            click: () => handleMarkerClick(marker.id,50),
          }}
        >
          <Popup>
            <h5>
              {marker.id} 
            </h5>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default Mapleaflet;
