import React, { useContext } from 'react';
import '../status/status.css';
import { ApiContext } from '../../context/ApiProvider';

const StatusTable = () => {
  const { apiData } = useContext(ApiContext);

  return (
    <>
      <div className='heading flex'>Detailed status</div>
      {apiData ? <p>{apiData.weather[0].description}</p> : null}
    </>
  );
};

export default StatusTable;
