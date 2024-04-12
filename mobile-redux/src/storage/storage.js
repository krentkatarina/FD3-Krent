import { configureStore } from "@reduxjs/toolkit";

import clientsReducer from "./clientSlice";

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});