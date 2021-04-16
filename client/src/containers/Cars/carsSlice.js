import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCars = createAsyncThunk("cars/getCars", async (thunkAPI) => {
  return fetch("/api/cars").then((response) => response.json());
});

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    loading: false,
    carList: [],
    error: undefined,
  },
  reducers: {
    y: (state) => {},
  },
  extraReducers: {
    [getCars.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: undefined,
        carList: [],
      };
    },
    [getCars.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        carList: action.payload,
      };
    },
    [getCars.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: "Failed to get cars",
      };
    },
  },
});

export const { y } = carsSlice.actions;

export default carsSlice.reducer;
