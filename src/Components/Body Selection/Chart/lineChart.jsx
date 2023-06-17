import React  from "react";
import '../Chart/linechart.scss'
import ChartContainer from '../Chart/allLinecharts';

import {BsFillArrowRightCircleFill} from "react-icons/bs";

const LineChart = () => {
  return (
    <div className="chartSeclection">
        <div children="divChartdetails">
            <div className="heading flex">
              <h1>Charts</h1>
              <button className="btn flex">
                See all <BsFillArrowRightCircleFill className="icon"/>
              </button>
            </div>

            <div className="chartContainer">
                <ChartContainer />
            </div>
        </div>
    </div>
  )
}

export default LineChart;