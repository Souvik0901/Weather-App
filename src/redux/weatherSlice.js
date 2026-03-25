import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    cities: [],
    unit: "C"
  },
  reducers: {

    setCities: (state, action) => {
      state.cities = action.payload;
    },

    setUnit: (state, action) => {
      state.unit = action.payload;
    }

  }
});

export const { setCities, setUnit } = weatherSlice.actions;

export default weatherSlice.reducer;