import { createSlice } from "@reduxjs/toolkit";

const learnerInitialState = {
	id: null,
	username: "",
	personalInfo: {},
	technologies: {},
	projects: [],
};

const learnerInfoSlice = createSlice({
	name: "learnerInfo",
	initialState: learnerInitialState,
	reducers: {
		saveLearnerInfo: (store, actions) => {
			// console.log(actions);

			store.id = actions.payload.id;
			store.username = actions.payload.username;
			store.personalInfo = actions.payload.personalInfo;
			store.technologies = actions.payload.technologies;
			store.projects = actions.payload.projects;
		},
	},
});

// console.log(learnerInfoSlice);

export const { saveLearnerInfo } = learnerInfoSlice.actions;
export default learnerInfoSlice.reducer;
