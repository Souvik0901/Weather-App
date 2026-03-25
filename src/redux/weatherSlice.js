import { createSlice } from "@reduxjs/toolkit";

const savedFavorites =
  JSON.parse(localStorage.getItem("favorites")) || [];

const weatherSlice = createSlice({

  name: "weather",

  initialState: {
    favorites: savedFavorites,
    selectedCity: null,
    unit: "C"
  },

  reducers: {

    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },

    addFavorite: (state, action) => {

      const exists = state.favorites.find(
        c => c.name === action.payload.name
      );

      if(!exists) {
        state.favorites.push(action.payload);

        localStorage.setItem(
          "favorites",
          JSON.stringify(state.favorites)
        );
      }

    },

    removeFavorite: (state, action) => {

      state.favorites =
        state.favorites.filter(
          c => c.name !== action.payload
        );

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites)
      );

    },

    setUnit: (state, action) => {
      state.unit = action.payload;
    }

  }

});

export const {
  setSelectedCity,
  addFavorite,
  removeFavorite,
  setUnit
} = weatherSlice.actions;

export default weatherSlice.reducer;