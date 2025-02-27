import { configureStore } from "@reduxjs/toolkit";
import learnerReducer from "../features/learnerSlice";

export const store = configureStore({
	reducer: {
		learner: learnerReducer,
	},
});
