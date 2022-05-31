import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountry = createAsyncThunk(
  "weather/getCountry",
  async (args) => {
    try {
      return fetch(
        `http://api.worldweatheronline.com/premium/v1/search.ashx?q=${args.latitude},${args.longitude}&num_of_results=30&key=80baa668310b4929a81193903222605&format=json`
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

const initialState = {
  temp_C: null,
  humidity: null,
  windspeedKmph: null,
  weatherDesc: null,
  hourly: null,
  sunset: null,
  sunrise: null,

  areaName: null,
  country: null,

  countryCities: null,

  climateAverage: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [getCountry.pending]: (state, action) => {
      state.isLoading = true;
      console.log(action);
    },
    [getCountry.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.country = action.payload.search_api.result[0].country[0].value;
      state.countryCities = action.payload.search_api.result;
    },
    [getCountry.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action);
    },

    [getCityWeather.pending]: (state, action) => {
      state.isLoading = true;
      console.log(action);
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

      state.areaName = action.payload.data.nearest_area[0].areaName[0].value;
      state.country = action.payload.data.nearest_area[0].country[0].value;

      state.climateAverage = action.payload.data.ClimateAverages[0].month;
    },
    [getCityWeather.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default weatherSlice.reducer;
