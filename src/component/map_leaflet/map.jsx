import * as React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import './map.css'
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet';

const position =[20.254405, 106.306895]


// const handleMarkerClick = (deviceId) => {
//   console.log('a');
//   // axios.get(`https://api.example.com/marker/${deviceId}`)
//   //   .then(response => {
//   //     console.log(response.data);
//   //   })
//   //   .catch(error => {
//   //     console.error('Error:', error);
//   //   });
// };

const handleMarkerClick = (id) => {
  // console.log('Clicked marker ID:', id);
  axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=20ec6b44f4246937e3befcf4bfe33e08&units=metric&lang=vi`)
    .then(response => {
      console.log(response.data.name);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};


function GetIcon(status) {
  return L.icon({
    // iconUrl: require("./assets/" + status + "_location.png"),
    iconUrl: require("../../Assets/"+ status + ".png"),
    iconSize: [38,38],
  });
}



const Map_leaflet = ()=>{
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=1573517&appid=20ec6b44f4246937e3befcf4bfe33e08&units=metric');
        const data = await response.json();
        console.log(data);
        const markerData = [
          {
            id: data.id,
            name_device: data.name,
            lat: data.coord.lat,
            lng: data.coord.lon,
            status: data.weather.description,
            status_flag: data.weather.main,    
          }
        ];
        console.log(markerData);
        setMarkers(markerData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
    return(
    <MapContainer center={position} zoom={10} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
            <h5>{marker.name_device} <br></br> {marker.lat}</h5>
            </Popup>
          </Marker>
        ))}

    </MapContainer>

    );
}
export default Map_leaflet