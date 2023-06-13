import * as React from 'react'
import {Map, MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import './map.css'
import "leaflet/dist/leaflet.css"

import {Icon} from 'leaflet'
const position =[20.154405, 106.336895]
var Icon_URL ={
    Normal:require("./public/normal_location.png"),
    Danger:require("./public/danger_location.png")}
var size_Icon = [38,38]
let raw_data=[
    {name_device:'Device_1',
    lat:20.154405,
    lon:106.336895,
    status:"Normal",
    status_flag:'Blue',
    },
    {name_device:'Device_2',
        lat:20.154601,
        lon:106.337504,
        status:"Danger",
        status_flag:'Red',
        Icon_URL:{
            Normal:require("./public/normal_location.png"),
            Danger:require("./public/danger_location.png")},
        size_Icon : [38,38]}
]


const Map_leaflet = ()=>{
    return(
        <MapContainer  center={position} zoom ={125} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></TileLayer>
                {
                
                    raw_data.map(data=>{
                        let custom_icon = new Icon({
                            iconUrl:Icon_URL[data.status],
                            iconSize:size_Icon
                        });
                        return(
                            <Marker position={[data.lat,data.lon]} icon={custom_icon}>
                                <Popup>
                                    <h2>{data.name_device}</h2>
                                </Popup>
                            </Marker>
                        )
                    }
                    )
                }
         {/* <Marker position={[20.154601,106.337504]} ></Marker>
             */}

        </MapContainer>
    )
}
export default Map_leaflet