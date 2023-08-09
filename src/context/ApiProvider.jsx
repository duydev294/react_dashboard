import React, { createContext, useReducer } from 'react';

// Tạo context
export const ApiContext = createContext();

const initialState = {
  apiData: null,
  chartData: null,
};

const actions = {
  GET_API_DATA: 'GET_API_DATA',
  GET_CHART_DATA: 'GET_CHART_DATA',
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_API_DATA:
      return {
        ...state,
        apiData: action.data,
      };
    case actions.GET_CHART_DATA:
      return {
        ...state,
        chartData: action.data,
      };
    default:
      return state;
  }
};

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    apiData: state.apiData,
    chartData: state.chartData,
    getChartData: async (API, num_data) => {
      try {
        console.log(API);
        const response = await fetch('http://sanslab1.ddns.net:5002/api/device/get/data_by_key', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ API_key: API, num_data: num_data }),
        });
        const data = await response.json();
        console.log(data);
        dispatch({ type: actions.GET_CHART_DATA, data });
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
