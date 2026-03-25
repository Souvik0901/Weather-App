import { useDispatch, useSelector } from "react-redux";

import { setUnit }
from "../redux/weatherSlice";

function UnitToggle() {

  const dispatch = useDispatch();

  const unit =
    useSelector(
      state => state.weather.unit
    );

  return (

    <div className="unit-toggle">

      <button
        onClick={() =>
          dispatch(setUnit("C"))
        }

        style={{
          opacity:
            unit === "C" ? 1 : 0.6
        }}
      >
        °C
      </button>

      <button
        onClick={() =>
          dispatch(setUnit("F"))
        }

        style={{
          opacity:
            unit === "F" ? 1 : 0.6
        }}
      >
        °F
      </button>

    </div>

  );

}

export default UnitToggle;
