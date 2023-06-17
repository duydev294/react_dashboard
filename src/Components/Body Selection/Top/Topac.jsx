import React  from "react";
import '../Top/topac.scss';

import "leaflet/dist/leaflet.css";
import GridStatus from "../Activity/gridData/gridStatus";
import { MapContainer, TileLayer } from "react-leaflet";

import {BiSearchAlt} from "react-icons/bi";
import {TbMessageCircle} from "react-icons/tb";
import {MdNotificationsNone} from "react-icons/md";





import ava from '..//..//../Assets/pexels-julia-filirovska-8237300.jpg';


const TopAc = () => {
  return (
    <div className="topSelection">
      <div className="headerSelection flex">
        <div className="title">
          <h1> Welcom to SanShrimp</h1>
          <h3>Hello Users, Welcom back!</h3>
        </div>

        <div className="searchBar flex">
          <input className="input1" type="text" placeholder="Search"></input>
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className= "icon" />
          <MdNotificationsNone className = "icon" />
          <div className="adminImage">
            <img src={ava} alt="ádad"></img>
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">  
          <div className="videoDiv">
          
                <MapContainer center={[51.505, 20.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>


          </div>
        </div>

        <div className="leftCard flex">
          <div className="divDevice">
            <div className="heading flex">
              <h1>Devices</h1>
            </div>
            <GridStatus style={{height: 340, weight: 400}}></GridStatus>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopAc;