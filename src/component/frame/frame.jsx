import React, { useContext } from 'react';
import '../frame/frame.css';
import './frame.scss';

import pH_img from '../../Assets/pH.png';
import { ApiContext } from '../../context/ApiProvider';
import DO from '../../Assets/DO.png';
import EC from '../../Assets/EC.png';
import temp from '../../Assets/temp.png';

const FrameDetail = () => {
  const { chartData } = useContext(ApiContext);
  console.log(chartData);
  var curent_data = {}
var arlert_type =[]
var forecast_data = []
 if(chartData){
   curent_data = chartData.data.data[chartData.data.data.length - 1]
  arlert_type = chartData.data.Alert_t
  forecast_data = [23,12,7.8,3]
 }
  return (
    <>
      <div className="listingSeclection">
        {chartData ? (
          <>
            <h1>Device {chartData.data.API_key} </h1>
            <div children="divDetails1">
              <h2>Current</h2>
            </div>
            <div className="secContainer">
              <div className="singleItem">
                <img className="imgTemp" src={temp} alt="temp" />
                <h2
                  id="pHValue"
                  style={{
                    color:
                   arlert_type[0] === 1
                        ? 'rgb(255 165 0)'
                        : arlert_type[0] === 1.2
                        ? 'rgba(0,153,102,.75)'
                        : arlert_type[0] === 1.1
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {curent_data.Temp }
                </h2>
                {/* <h3 className="itemUnit">°C</h3> */}
              </div>

              <div className="singleItem">
                <img className="imgEC" src={pH_img} alt="pH" />
                <h2
                  id="pHValue"
                  style={{
                    color:
                    arlert_type[1] === 4
                        ? 'rgb(255 165 0)'
                        : arlert_type[1] === 4.2
                        ? 'rgba(0,153,102,.75)'
                        : arlert_type[1] === 4.1
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {curent_data.pH}
                </h2>
                {/* <h3 className="itemUnit">pH</h3> */}
              </div>

              <div className="singleItem">
                <img className="imgEC" src={EC} alt="EC" />
                <h2
                  id="ECValue"
                  style={{
                    color:
                    arlert_type[3] === 3.0
                        ? 'rgb(255 165 0)'
                        : arlert_type[3] === 3.2
                        ? 'rgba(0,153,102,.75)'
                        : arlert_type[3] === 3.1
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {curent_data.EC}
                </h2>
                {/* <h3 className="itemUnit">µS/cm</h3> */}
              </div>

              <div className="singleItem">
                <img className="imgEC" src={DO} alt="DO" />
                <h2
                  id="DOValue"
                  style={{
                    color:
                    arlert_type[2] === 2
                        ? 'rgb(255 165 0)'
                        :arlert_type[2] === 2.2
                        ? 'rgba(0,153,102,.75)'
                        : arlert_type[2] === 2.1
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {curent_data.DO}
                </h2>
                <h3 className="itemUnit"></h3>
              </div>
            </div>
          </>
        ) : null}
        {chartData ? (
          <>
            <div children="divDetails1">
              <h2>Forecast</h2>
            </div>
            <div className="secContainer">
              <div className="singleItem">
                <img className="imgPH" src={pH_img} alt="pH" />
                <h2
                  id="pHValue"
                  style={{
                    color: forecast_data[2] < 10 ? 'blue' : forecast_data[2] < 30 ? 'orange' : 'red',
                  }}
                >
                  {forecast_data[2]}
                </h2>
                
              </div>

              <div className="singleItem">
                <img className="imgDO" src={DO} alt="DO" />
                <h2
                  id="DOValue"
                  style={{
                    color: forecast_data[3] < 10 ? 'blue' : forecast_data[3] < 30 ? 'orange' : 'red',
                  }}
                >
                  {forecast_data[3]}
                </h2>
                
              </div>

              <div className="singleItem">
                <img className="imgEC" src={EC} alt="EC" />
                <h2
                  id="ECValue"
                  style={{
                    color: forecast_data[1] < 10 ? 'blue' : forecast_data[1] < 30 ? 'orange' : 'red',
                  }}
                >
                  {forecast_data[1]}
                </h2>
                
              </div>

              <div className="singleItem">
                <img className="imgTemp" src={temp} alt="Temp" />
                <h2
                  id="TempValue"
                  style={{
                    color: forecast_data[0] < 10 ? 'blue' : forecast_data[0] < 30 ? 'orange' : 'red',
                  }}
                >
                  {forecast_data[0]}
                </h2>
                
              </div>
            </div>
          </>
        ) : null}
        {chartData ? (
          <>
            <tr className="scale_value">
              <td className="aqi-label aqi-label-title">
                <div>Quality Scale</div>
              </td>
              <td className="aqi-label aqi-label-1">
                <div>Good</div>
              </td>
              <td className="aqi-label aqi-label-2">
                <div>Moderate</div>
              </td>
              <td className="aqi-label aqi-label-3">
                <div>
                  <div>Unhealthy</div>
                </div>
              </td>
              <td className="aqi-label aqi-label-4">
                <div>Dangerous </div>
              </td>
            </tr>
          </>
        ) : null}
      </div>
    </>
  );
};

export default FrameDetail;
