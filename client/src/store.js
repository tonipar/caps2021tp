import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cars from "./containers/Cars/carsSlice";

const reducer = {
  cars,
};

const logger = createLogger({
  collapsed: true,
  level: {
    prevState: (log) => console.log(`Previous Store State:`, log),
    action: (log) => console.log(`Action:`, log),
    nextState: (log) => console.log(`Next Store State:`, log),
  },
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
