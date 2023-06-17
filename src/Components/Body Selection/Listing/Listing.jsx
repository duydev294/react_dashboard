import React  from "react";
import '../Listing/listing.scss'

// import {LineChart} from '../Chart/lineChart';

import {BsFillArrowRightCircleFill} from "react-icons/bs";


import pH from '../../../Assets/pH.png';
import DO from '../../../Assets/DO.png';
import EC from '../../../Assets/EC.png';
import temp from '../../../Assets/temp.png';
// import Listdata from "./listData/listData";

const Listing = () => {
  return (

        <div className="listingSeclection">
          <div children="divDetails">

            <div className="heading flex">
              <h1>Details</h1>
              <button className="btn flex">
                See all <BsFillArrowRightCircleFill className="icon"/>
              </button>
            </div>

            <div className="secContainer flex">
              {/* <Listdata /> */}
              <div className="singleItem">
                <img className="imgPH" src={pH} alt="pH"/>
                <h2>7.5</h2>
                <h3>pH</h3>
              </div>       

              <div className="singleItem">
                <img className="imgDO" src={DO} alt="pH"/>
                <h2>1382</h2>
                <h3>mg/L</h3>
              </div>

              <div className="singleItem">
                <img className="imgEC" src={EC} alt="pH"/>
                <h2>500</h2>
                <h3>µS/cm</h3>
              </div>

              <div className="singleItem">
                <img className="imgTemp" src={temp} alt="Temp"/>
                <h2>30</h2>
                <h3>°C</h3>
              </div>

            </div>
          </div>
        </div>

  )
}

export default Listing;