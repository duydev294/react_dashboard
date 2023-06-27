import React, { useContext } from 'react';
import '../frame/frame.css';
import './frame.scss';

import pH from '../../Assets/pH.png';
import { ApiContext } from '../../context/ApiProvider';
import DO from '../../Assets/DO.png';
import EC from '../../Assets/EC.png';
import temp from '../../Assets/temp.png';

const FrameDetail = () => {
  const { apiData } = useContext(ApiContext);
  return (
    <>
      <div className="listingSeclection">
        {apiData ? (
          <>
            <h1>Device {apiData.name} </h1>
            <div children="divDetails1">
              <h2>Current</h2>
            </div>
            <div className="secContainer">
              <div className="singleItem">
                <img className="imgPH" src={pH} alt="pH" />
                <h2
                  id="pHValue"
                  style={{
                    color:
                      apiData.main.temp < 25
                        ? 'rgb(255 165 0)'
                        : apiData.main.temp < 32
                        ? 'rgba(0,153,102,.75)'
                        : apiData.main.temp < 40
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {apiData.main.temp}
                </h2>
                <h3 className="itemUnit">pH</h3>
              </div>

              <div className="singleItem">
                <img className="imgDO" src={DO} alt="pH" />
                <h2
                  id="DOValue"
                  style={{
                    color:
                      apiData.main.humidity < 25
                        ? 'rgb(255 165 0)'
                        : apiData.main.humidity < 32
                        ? 'rgba(0,153,102,.75)'
                        : apiData.main.humidity < 40
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {apiData.main.humidity}
                </h2>
                <h3 className="itemUnit">mg/L</h3>
              </div>

              <div className="singleItem">
                <img className="imgEC" src={EC} alt="pH" />
                <h2
                  id="ECValue"
                  style={{
                    color:
                      apiData.wind.speed < 25
                        ? 'rgb(255 165 0)'
                        : apiData.wind.speed < 32
                        ? 'rgba(0,153,102,.75)'
                        : apiData.wind.speed < 40
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {apiData.wind.speed}
                </h2>
                <h3 className="itemUnit">µS/cm</h3>
              </div>

              <div className="singleItem">
                <img className="imgTemp" src={temp} alt="Temp" />
                <h2
                  id="TempValue"
                  style={{
                    color:
                      apiData.main.feels_like < 25
                        ? 'rgb(255 165 0)'
                        : apiData.main.feels_like < 32
                        ? 'rgba(0,153,102,.75)'
                        : apiData.main.feels_like < 40
                        ? 'rgb(255 165 0)'
                        : 'rgba(255, 2, 74, 0.75)',
                  }}
                >
                  {apiData.main.feels_like}
                </h2>
                <h3 className="itemUnit">°C</h3>
              </div>
            </div>
          </>
        ) : null}
        {apiData ? (
          <>
            <div children="divDetails1">
              <h2>Forecast</h2>
            </div>
            <div className="secContainer">
              <div className="singleItem">
                <img className="imgPH" src={pH} alt="pH" />
                <h2
                  id="pHValue"
                  style={{
                    color: apiData.main.temp < 10 ? 'blue' : apiData.main.temp < 30 ? 'orange' : 'red',
                  }}
                >
                  {apiData.main.temp}
                </h2>
                <h3 className="itemUnit">pH</h3>
              </div>

              <div className="singleItem">
                <img className="imgDO" src={DO} alt="pH" />
                <h2
                  id="DOValue"
                  style={{
                    color: apiData.main.humidity < 10 ? 'blue' : apiData.main.humidity < 30 ? 'orange' : 'red',
                  }}
                >
                  {apiData.main.humidity}
                </h2>
                <h3 className="itemUnit">mg/L</h3>
              </div>

              <div className="singleItem">
                <img className="imgEC" src={EC} alt="pH" />
                <h2
                  id="ECValue"
                  style={{
                    color: apiData.wind.speed < 10 ? 'blue' : apiData.wind.speed < 30 ? 'orange' : 'red',
                  }}
                >
                  {apiData.wind.speed}
                </h2>
                <h3 className="itemUnit">µS/cm</h3>
              </div>

              <div className="singleItem">
                <img className="imgTemp" src={temp} alt="Temp" />
                <h2
                  id="TempValue"
                  style={{
                    color: apiData.main.feels_like < 10 ? 'blue' : apiData.main.feels_like < 30 ? 'orange' : 'red',
                  }}
                >
                  {apiData.main.feels_like}
                </h2>
                <h3 className="itemUnit">°C</h3>
              </div>
            </div>
          </>
        ) : null}
        {apiData ? (
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
