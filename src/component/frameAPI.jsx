import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiProvider';

const Frame = () => {
  const apiData = useContext(ApiContext);

  const userName = apiData;

  return <div>{userName}</div>;
};

export default Frame;
