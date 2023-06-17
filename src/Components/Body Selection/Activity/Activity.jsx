import React  from "react";
import '../Activity/activity.scss'
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import GridStatus from "./gridData/gridStatus";

const Activity = () => {
  return (
    <div className="actSeclection">
        <div className="divActdetails">
            <div className="heading flex">
              <h1>Status</h1>
              <button className="btn flex">
                See all <BsFillArrowRightCircleFill className="icon"/>
              </button>
            </div>

            <div className="actContainer">
              <GridStatus />
            </div>
        </div>  
    </div>
  )
}

export default Activity;