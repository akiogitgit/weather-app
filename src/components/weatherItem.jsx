import { dateFormat } from "../utils/dateFormat";
import { generatePrefCodeColor } from "../utils/generatePrefCodeColor";

export const WeatherItem = (weatherData) => {
  const data = weatherData.data;

  return (
    <div
      className="item"
      style={{ background: generatePrefCodeColor(data.name) }}
    >
      <div className="item-info">
        <div className="item-column">
          <p>City Name</p>
          <p>{data.name}</p>
        </div>
        <div className="item-column">
          <p>Weather Condition</p>
          <p>{data.weather[0].main}</p>
        </div>
      </div>

      <div className="item-detail">
        <div className="item-column">
          <p>Date</p>
          <p>{dateFormat(data.dt)}</p>
        </div>
        <div className="item-column">
          <p>Temprature</p>
          <p>{~~(data.main.temp - 273)}℃</p>
        </div>
        <div className="item-column">
          <p>Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
      </div>

      <img className="weather-icon" src="weather.png" />
    </div>
  );
};

export default WeatherItem;
