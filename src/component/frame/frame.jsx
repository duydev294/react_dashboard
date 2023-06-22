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
                <h2 
                  id='DOValue'
                  style={{
                    color:
                    apiData.main.humidity < 10
                        ? 'blue'
                        : apiData.main.humidity < 30
                        ? 'orange'
                        : 'red',
                  }}
                >
                  {apiData.main.humidity}
                </h2>
                <h3 className='itemUnit'>mg/L</h3>
              </div>

              <div className='singleItem'>
                <img className='imgEC' src={EC} alt='pH' />
                <h2 
                  id='ECValue'
                  style={{
                    color:
                    apiData.wind.speed < 10
                        ? 'blue'
                        : apiData.wind.speed < 30
                        ? 'orange'
                        : 'red',
                  }}
                >
                  {apiData.wind.speed}
                </h2>
                <h3 className='itemUnit'>µS/cm</h3>
              </div>

              <div className='singleItem'>
                <img className='imgTemp' src={temp} alt='Temp' />
                <h2 
                  id='TempValue'
                  style={{
                    color:
                    apiData.main.feels_like < 10
                        ? 'blue'
                        : apiData.main.feels_like < 30
                        ? 'orange'
                        : 'red',
                  }}
                >
                  {apiData.main.feels_like}
                </h2>
                <h3 className='itemUnit'>°C</h3>
              </div>
            </div>
          </>
        ) : null}
        {apiData ? (
          <>
            <div children='divDetails1'>
              <h2>Forecast</h2>
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
                <h2 
                  id='DOValue'
                  style={{
                    color:
                    apiData.main.humidity < 10
                        ? 'blue'
                        : apiData.main.humidity < 30
                        ? 'orange'
                        : 'red',
                  }}
                >
                  {apiData.main.humidity}
                </h2>
                <h3 className='itemUnit'>mg/L</h3>
              </div>

              <div className='singleItem'>
                <img className='imgEC' src={EC} alt='pH' />
                <h2 
                  id='ECValue'
                  style={{
                    color:
                    apiData.wind.speed < 10
                        ? 'blue'
                        : apiData.wind.speed < 30
                        ? 'orange'
                        : 'red',
                  }}
                >
                  {apiData.wind.speed}
                </h2>
                <h3 className='itemUnit'>µS/cm</h3>
              </div>

              <div className='singleItem'>
                <img className='imgTemp' src={temp} alt='Temp' />
                <h2 
                  id='TempValue'
                  style={{
                    color:
                    apiData.main.feels_like < 10
                        ? 'blue'
                        : apiData.main.feels_like < 30
                        ? 'orange'
                        : 'red',
                  }}
                >
                  {apiData.main.feels_like}
                </h2>
                <h3 className='itemUnit'>°C</h3>
              </div>
            </div>
          </>
        ) : null}

        <div className='chart'>
        <span className="block green" style={{width: '16.6em'}}>
          <span className="value">Tốt</span>
        </span>
        <span className="block yellow" style={{width: '16.6em'}}>
          <span className="value">Trung bình</span>
        </span>
        <span className="block orange" style={{width: '16.6em'}}>
          <span className="value">Kém</span>
        </span>
        <span className="block red" style={{width: '16.6em'}}>
          <span className="value">Xấu</span>
        </span>
        <span className="block purple" style={{width: '16.6em'}}>
          <span className="value">Rất xấu</span>
        </span>
        <span className="block brown" style={{width: '16.6em'}}>
          <span className="value">Nguy hại</span>
        </span>
        </div>
      </div>

      
    </>
  );
};

export default FrameDetail;
