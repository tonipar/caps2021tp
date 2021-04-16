import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCars = createAsyncThunk("cars/getCars", async (thunkAPI) => {
  return fetch("/api/cars").then((response) => response.json());
});
export const addCar = createAsyncThunk("cars/addCar", async (car, thunkAPI) => {
  return fetch("/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  }).then((response) => response.json());
});
export const deleteCar = createAsyncThunk(
  "cars/deleteCar",
  async (id, thunkAPI) => {
    return fetch(`/api/cars/${id}`, {
      method: "DELETE",
    }).then(() => id);
  }
);

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    loading: false,
    carList: [],
    error: undefined,
  },
  reducers: {
    clearCarList: (state) => {
      return {
        ...state,
        carList: [],
      };
    },
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
    [addCar.fulfilled]: (state, action) => {
      return {
        ...state,
        carList: [...state.carList, action.payload],
      };
    },
    [deleteCar.fulfilled]: (state, action) => {
      return {
        ...state,
        carList: state.carList.filter((car) => car.id !== action.payload),
      };
    },
  },
});

export const { clearCarList } = carsSlice.actions;

export default carsSlice.reducer;
