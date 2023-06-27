import React from 'react';

const WAQIProjectInfo = () => {
  return (
    <div className="ui section center first" style={{ padding: '10px' }} id="waqi-project-info">
      <p>The website is brought to you by the World Air Quality Index project</p>
      <div className="ui subtitle">
        <a href="https://aqicn.org/contact/">WAQI.info: World Air Quality Index</a>
        <br />
        <img
          alt="waqi logo"
          src="/images/logo.png"
          style={{ height: '16px', verticalAlign: 'bottom', padding: '2px' }}
        />
        <img
          alt="waqi logo"
          src="/images/logo.png"
          style={{ height: '16px', verticalAlign: 'bottom', padding: '2px' }}
        />
        <img
          alt="waqi logo"
          src="/images/logo.png"
          style={{ height: '16px', verticalAlign: 'bottom', padding: '2px' }}
        />
      </div>
      <p>The above map shows the real-time air quality for more than 10,000 stations in the world.</p>
    </div>
  );
};

export default WAQIProjectInfo;
