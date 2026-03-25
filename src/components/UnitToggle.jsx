import { useDispatch, useSelector } from "react-redux";

import { setUnit } from "../redux/weatherSlice";

function UnitToggle() {

  const dispatch = useDispatch();
  const unit =
    useSelector(
      state => state.weather.unit
    );

  return (

    <div className="unit-toggle">

      <button onClick={() => dispatch(setUnit("C"))}>
        °C
      </button>

      <button onClick={() => dispatch(setUnit("F"))}>
        °F
      </button>

    </div>

  );

}

export default UnitToggle;