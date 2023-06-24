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
                        : 'rgba(102,0,153,.75)',
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
            <tr>
              <td className="aqi-label aqi-label-title">
                <div>Quality Scale</div>
              </td>
              <td
                className="aqi-label aqi-label-1"
                data-balloon-pos="up"
                data-balloon={
                  "<div class='tooltip-header aqi-label-1'>Good</div><img src='/images/emoticons/aqi-label-1.svg' style='width:42px;height:42px'><p>Air quality is considered satisfactory, and air pollution poses little or no risk</p>"
                }
              >
                <div>Good</div>
              </td>
              <td
                className="aqi-label aqi-label-2"
                data-balloon-pos="up"
                data-balloon={
                  "<div class='tooltip-header aqi-label-2'>Moderate</div><img src='/images/emoticons/aqi-label-2.svg' style='width:42px;height:42px'><p>Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p>"
                }
              >
                <div>Moderate</div>
              </td>
              <td
                className="aqi-label aqi-label-3"
                data-balloon-pos="up"
                data-balloon={
                  "<div class='tooltip-header aqi-label-3'>Unhealthy for sensitive groups</div><img src='/images/emoticons/aqi-label-3.svg' style='width:42px;height:42px'><p>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</p>"
                }
              >
                <div>
                  <div>Unhealthy</div>
                </div>
              </td>
              <td
                className="aqi-label aqi-label-4"
                data-balloon-pos="up"
                data-balloon={
                  "<div class='tooltip-header aqi-label-4'>Unhealthy</div><img src='/images/emoticons/aqi-label-4.svg' style='width:42px;height:42px'><p>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</p>"
                }
              >
                <div>Unhealthy</div>
              </td>
              <td
                className="aqi-label aqi-label-5"
                data-balloon-pos="up"
                data-balloon={
                  "<div class='tooltip-header aqi-label-5'>Very Unhealthy</div><img src='/images/emoticons/aqi-label-5.svg' style='width:42px;height:42px'><p>Health warnings of emergency conditions. The entire population is more likely to be affected.</p>"
                }
              >
                <div>
                  <div>Very Unhealthy</div>
                </div>
              </td>
              <td
                className="aqi-label aqi-label-6"
                data-balloon-pos="up"
                data-balloon={
                  "<div class='tooltip-header aqi-label-6'>Hazardous</div><img src='/images/emoticons/aqi-label-6.svg' style='width:42px;height:42px'><p>Health alert: everyone may experience more serious health effects</p>"
                }
              >
                <div>Hazardous</div>
              </td>
            </tr>
          </>
        ) : null}
      </div>
    </>
  );
};

export default FrameDetail;
