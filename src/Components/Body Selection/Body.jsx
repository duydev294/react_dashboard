import React  from "react";
import './body.css'
import Topac from './Top/Topac'
import Listing from './Listing/Listing'
import Activity from './Activity/Activity'
import LineChart from "./Chart/lineChart";
const Body = () => {
  return (
    <div className="mainContent">
    <Topac />

    <div className="bottom flex">
      <Listing />
      <LineChart/>
      <Activity/>
      
    </div>
    </div>
  )
}

export default Body;