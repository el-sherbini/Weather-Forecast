import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountry = createAsyncThunk(
  "weather/getCountry",
  async (args) => {
    try {
      return fetch(
        `http://api.worldweatheronline.com/premium/v1/search.ashx?q=${args.latitude},${args.longitude}&popular=yes&num_of_results=50&key=80baa668310b4929a81193903222605&format=json`
      ).then((res) => res.json());
    } catch (err) {
      console.log(err);
    }
  }
);

export const getCityWeather = createAsyncThunk(
  "weather/getCityWeather",
  async (args) => {
    try {
      return fetch(
        `http://api.worldweatheronline.com/premium/v1/weather.ashx?q=${args.city}&num_of_days=1&includelocation=yes&tp=1&key=80baa668310b4929a81193903222605&format=json`
      ).then((res) => res.json());
    } catch (err) {
      console.log(err);
    }
  }
);

export const getCityHistoryWeather = createAsyncThunk(
  "weather/getCityHistoryWeather",
  async (args) => {
    try {
      return fetch(
        `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?q=${args.city}&date=${args.startDate}&enddate=${args.endDate}&tp=1&key=80baa668310b4929a81193903222605&format=json`
      ).then((res) => res.json());
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  temp_C: null,
  humidity: null,
  windspeedKmph: null,
  weatherDesc: null,
  hourly: null,
  sunset: null,
  sunrise: null,

  city: null,
  country: null,

  countryCities: null,

  climateAverage: null,

  cityHistoryWeather: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [getCountry.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCountry.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.country = action.payload.search_api.result[0].country[0].value;
      state.countryCities = action.payload.search_api.result;
    },
    [getCountry.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [getCityWeather.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCityWeather.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;

      state.temp_C = action.payload.data.current_condition[0].temp_C;
      state.humidity = action.payload.data.current_condition[0].humidity;
      state.windspeedKmph =
        action.payload.data.current_condition[0].windspeedKmph;
      state.weatherDesc =
        action.payload.data.current_condition[0].weatherDesc[0].value;
      state.hourly = action.payload.data.weather[0].hourly;
      state.sunrise = action.payload.data.weather[0].astronomy[0].sunrise;
      state.sunset = action.payload.data.weather[0].astronomy[0].sunset;

      state.city = action.payload.data.nearest_area[0].areaName[0].value;

      state.climateAverage = action.payload.data.ClimateAverages[0].month;
    },
    [getCityWeather.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [getCityHistoryWeather.pending]: (state, action) => {
      state.isRendered = false;
    },
    [getCityHistoryWeather.fulfilled]: (state, action) => {
      console.log(action);
      state.cityHistoryWeather = action.payload.data.weather;
    },
    [getCityHistoryWeather.rejected]: (state, action) => {
      state.isRendered = false;
    },
  },
});

export default weatherSlice.reducer;
