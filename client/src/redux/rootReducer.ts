import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import { resetReducer } from "./reset/resetStateReducer";

const rootReducer = combineReducers({
  form: formReducer,
  reset: resetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
