import { WeatherItem } from "./components/weatherItem";
import "./weather.css";
import "./reset.css";
import { data } from "./weather";

function App() {
  return (
    <div>
      <div className="item-wrapper">
        {data.map((v) => (
          <WeatherItem data={v} />
        ))}
      </div>
    </div>
  );
}

export default App;
