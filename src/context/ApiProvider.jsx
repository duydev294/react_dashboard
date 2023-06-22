import React, { createContext, useState, useEffect } from 'react';

// Tạo context
export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=1573517&appid=20ec6b44f4246937e3befcf4bfe33e08&units=metric');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <ApiContext.Provider value={{apiData}}>
      {children}
    </ApiContext.Provider>
  );
};
