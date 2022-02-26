import { weatherData } from './weather.gateway';

export const CITIES_DATA_RECIEVED = 'CITIES_DATA_RECIEVED';

export const citiesDataRecieved = (citiesData) => ({
  type: CITIES_DATA_RECIEVED,
  payload: { citiesData },
});

export const getWeatherData = () =>
  function (dispatch) {
    weatherData().then((citiesData) => {
      dispatch(citiesDataRecieved(citiesData));
    });
  };
