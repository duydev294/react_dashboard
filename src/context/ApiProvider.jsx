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
    getAPIData: async (id) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=20ec6b44f4246937e3befcf4bfe33e08&units=metric`,
        );
        const data = await response.json();
        dispatch({ type: actions.GET_API_DATA, data });
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
    getChartData: async (id) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=20ec6b44f4246937e3befcf4bfe33e08&units=metric`,
        );
        const data = await response.json();
        dispatch({ type: actions.GET_CHART_DATA, data });
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
