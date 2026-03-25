import { useSelector, useDispatch } from "react-redux";
import { setUnit } from "./redux/weatherSlice";

function App() {

  const dispatch = useDispatch();
  const unit = useSelector(state => state.weather.unit);

  return (
    <div>

      <h1>Weather Dashboard</h1>

      <h2>Temperature Unit: {unit}</h2>

      <button onClick={() => dispatch(setUnit("F"))}>
        Change to Fahrenheit
      </button>

    </div>
  );
}

export default App;