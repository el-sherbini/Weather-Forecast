# Weather-Forecast

> Weather-Forecast is a task for MentorGraphics to get weather data by user's location, built with React.js, Redux, TailwindCSS.

## Installation and Setup Instructions

To clone this repository. You will need `node` and `npm` installed globally on your machine.

### Installation:

Clone the repo:

```sh
git clone https://github.com/el-sherbini/Weather-Forecast
```

Run terminal command:

```sh
npm install
```

### Enter your Environment Variables in `.env` file, you can get one from [_here_](https://www.worldweatheronline.com/developer/).

```sh
REACT_APP_WEATHER_API_KEY = "YOUR WEATHER API KEY"
```

### To Run App:

```sh
npm satrt
```

### To Visit App:

```sh
localhost:3000
```

## Technologies Used

- React.js
- Redux
- Tailwind CSS
- Chart.js
- D3.js
- React-icons
- Spinners-react
- Worldweatheronline API
- Ipinfo API

## Features

- Responsive layout
- Light Mode & Dark Mode
- Get current weather condition data (Temperature, Humidity, ...) for the user's country
- Chart for user's country temperature during the current day (Celsius and Fahrenheit)
- Choose from the nearest user's cities to show their current weather condition
- Get the history of the weather last 7 days for the chosen city
- Chart for the average temperature during the year for the chosen city (Celsius and Fahrenheit)
