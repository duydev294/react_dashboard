import React from 'react';
import './frame.css';

const CommonComponent = ({ title }) => {
  return (
    <div className="common-component">
      <h1>{title}</h1>
    </div>
  );
};

export default CommonComponent;
