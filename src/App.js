import { WeatherItem } from './components/weatherItem'
import { data } from './dev/weather'

function App() {
  return (
    <div>
      <div className='item-wrapper'>
        {data.map(v => (
          <WeatherItem data={v} />
        ))}
      </div>
    </div>
  )
}

export default App
