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
      <div className='listingSeclection'>
        {apiData ? (
          <>
            <h1>Device {apiData.name} </h1>
            <div children='divDetails1'>
              <h2>Current</h2>
            </div>
            <div className='secContainer'>
              <div className='singleItem'>
                <img className='imgPH' src={pH} alt='pH' />
                <h2
                  id='pHValue'
                  style={{
                    color:
                      apiData.main.temp < 10
                        ? 'blue'
                        : apiData.main.temp < 30
                        ? 'orange'
                        : 'red',
                  }}
                >
                  {apiData.main.temp}
                </h2>
                <h3 className='itemUnit'>pH</h3>
              </div>

              <div className='singleItem'>
                <img className='imgDO' src={DO} alt='pH' />
                <h2 id='DOValue'>{apiData.main.humidity}</h2>
                <h3 className='itemUnit'>mg/L</h3>
              </div>

              <div className='singleItem'>
                <img className='imgEC' src={EC} alt='pH' />
                <h2 id='ECValue'>{apiData.wind.speed}</h2>
                <h3 className='itemUnit'>µS/cm</h3>
              </div>

              <div className='singleItem'>
                <img className='imgTemp' src={temp} alt='Temp' />
                <h2 id='TempValue'>{apiData.main.feels_like}</h2>
                <h3 className='itemUnit'>°C</h3>
              </div>
            </div>
          </>
        ) : null}

        {/* <div className="forecastContainer">
        
              <div className="singleItem">
                <img className="imgPH" src={pH} alt="pH"/>
                <h2 id="pHValue">{deviceData}</h2>
                <h3>pH</h3>
              </div>       

              <div className="singleItem">
                <img className="imgDO" src={DO} alt="pH"/>
                <h2 id="DOValue">23</h2>
                <h3>mg/L</h3>
              </div>

              <div className="singleItem">
                <img className="imgEC" src={EC} alt="pH"/>
                <h2 id="ECValue">25</h2>
                <h3>µS/cm</h3>
              </div>

              <div className="singleItem">
                <img className="imgTemp" src={temp} alt="Temp"/>
                <h2 id="TempValue">36</h2>
                <h3>°C</h3>
              </div>

      </div> */}
      </div>
    </>
  );
};

export default FrameDetail;
