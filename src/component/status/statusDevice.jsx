import React, { useContext } from 'react';
import '../status/status.css';
import { ApiContext } from '../../context/ApiProvider';

const StatusTable = () => {
  const { apiData } = useContext(ApiContext);

  return (
    <>
      {apiData ? (
        <>
          <div className="heading flex">Detailed status</div>
          <p>{apiData.weather[0].description}</p>
        </>
      ) : null}
    </>
  );
};

export default StatusTable;
