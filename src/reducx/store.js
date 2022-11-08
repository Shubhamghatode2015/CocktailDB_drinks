import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./festures/cocktailSlice";

export default configureStore({
  reducer: {
    app: cocktailSlice,
  },
});