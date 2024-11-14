# Redux Toolkit Guide

This guide will walk you through the steps of setting up Redux Toolkit in a React application, including creating slices, setting up the store, and connecting components to Redux.

## Documentation

For more in-depth information, refer to [Redux Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started)

<!-- ==================================================  STEP 1  ====================================================================== -->

## STEP 1 : Install Template

- To set up a new React app with Redux Toolkit, you have two options:

- Create a New Redux-Configured App
  This will generate a new React app preconfigured with Redux.

```sh
npx create-react-app my-app --template redux
```

- To ensure you have the latest version:

```sh
npx create-react-app@latest my-app --template redux
```

- Add Redux Toolkit to an Existing App
  If you already have a React app, add Redux Toolkit and React-Redux:

```sh
npm install @reduxjs/toolkit react-redux
```

<!-- =================================================  STEP 2  ======================================================================= -->

## STEP 2 : Setup Store

In this step, we’ll create the Redux store where our global state will be managed.

- Create a store.js file in your project.

- Configure the store with configureStore from Redux Toolkit.

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {}, // reducers will be added here later
});
```

<!-- =================================================  STEP 3  ======================================================================= -->

## STEP 3 : Setup Provider

To allow components in the app to access the Redux store, wrap your application in a Provider component. This step is essential for connecting Redux with React components.

- In main.jsx (or index.js):

```js
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
);
```

<!-- =================================================  STEP 4  ======================================================================= -->

## STEP 4 A : Setup Your First Slice - learnerSlice

4A: Create learnerSlice

A slice in Redux Toolkit represents a part of the Redux state and includes both the state and reducers to handle actions.

- Create a folder named features (e.g., features/learner).

- Inside, create a file called learnerSlice.js.

```js
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
});

// console.log(learnerInfoSlice);

export default learnerInfoSlice.reducer;
```

## STEP 4 B : Setup Your First Reducer -learnerReducer

4B: Add Reducer to Store

To incorporate your slice into the Redux store, import the learnerInfoSlice reducer.

- In store.js:

```js
import { configureStore } from "@reduxjs/toolkit";
import learnerReducer from "../features/learnerSlice";

export const store = configureStore({
	reducer: {
		learner: learnerReducer,
	},
});
```

<!-- ======================================================================================================================== -->

## BONUS : Enable Redux DevTools

- If you haven’t already, install the Redux DevTools browser extension. This tool will help you visualize Redux actions and state changes in real-time.

<!-- ======================================================  STEP 5  ================================================================== -->

## STEP 5 : Access Redux State in a Component

To access Redux state, use useSelector in the component. Here, we demonstrate accessing personalInfo from the Redux store.

- In Hero.jsx:

```js
import React from "react";
import { useAppContext } from "../context/Globalcontext";
import { useSelector } from "react-redux";

const Hero = () => {
	const { data: userdata } = useAppContext();
	const { personalInfo } = useSelector((store) => store.learner);

	return (
		<div
			className="container-fluid bg-secondary d-flex flex-row-reverse justify-content-around align-items-center py-5"
			style={{ height: "40vh" }}>
			{/* HERO IMAGE */}
			<div className=" col-3 d-none d-sm-block">
				{/* <img
          className="image"
          src={personalInfo?.profilePic}
          alt="image"
          width={"250px"}
        /> */}
			</div>

			{/* HERE SECTION USER DETAILS */}
			<div className="content d-flex flex-column justify-content-start col-2 text-light">
				<h2 className=" text-nowrap">{personalInfo?.name}</h2>
				<h4>___________________________</h4>
				<h5 className=" " style={{ width: "10rem" }}>
					{personalInfo?.qualification}
				</h5>
				<p style={{ width: "10rem" }}>Contact: {personalInfo?.contactNo}</p>
				<p style={{ width: "10rem" }}>Email: {personalInfo?.email}</p>
			</div>
		</div>
	);
};

export default Hero;
```

<!-- ==================================================  STEP 6  ====================================================================== -->

## STEP 6 : Add Reducers to the Slice

Add the saveLearnerInfo reducer to learnerInfoSlice, which will update the state with fetched data.

- In learnerSlice.js:

```js
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
			console.log(actions);

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
```

<!-- ==================================================  STEP 7  ====================================================================== -->

## STEP 7 : Dispatch Actions in a Component

To update the Redux state, dispatch actions using useDispatch. Here’s how to fetch data from an API and store it in Redux.

- In LandingPage.js:

```js
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import { saveLearnerInfo } from "../features/learnerSlice";
import axios from "axios";
import { useEffect } from "react";

const LandingPage = () => {
	const dispatch = useDispatch();

	const fetchData = async (username) => {
		if (!username) return;

		try {
			const response = await axios.get(
				`http://localhost:3000/api/v1/user/?username=${username}`,
				{
					headers: {
						"x-api-key": "BESANT_STUDENT_TEST_SERVER_ACCESS_TOKEN_JULY2024",
					},
				}
			);

			// console.log(response.data.data);
			return dispatch(saveLearnerInfo(response.data.data));
		} catch (error) {
			console.log(error);
			return alert(error.message || "Something went wrong");
		}
	};

	useEffect(() => {
		const username = JSON.parse(localStorage.getItem("username"));
		// console.log(username);

		username && fetchData(username);
	}, []);

	return (
		<section
			className="bg-light position-relative"
			style={{ overflowX: "hidden" }}>
			<Navbar />

			<MainSection />

			<Footer />
		</section>
	);
};

export default LandingPage;
```

<!-- ==================================================  STEP 8  ====================================================================== -->

## STEP 8 : Consuming the State in Another Component

In another component, use useSelector to display the data stored in Redux.

- In Hero.js:

```js
import React from "react";
import { useAppContext } from "../context/Globalcontext";
import { useSelector } from "react-redux";

const Hero = () => {
	const { data: userdata } = useAppContext();
	const { personalInfo } = useSelector((store) => store.learner);

	return (
		<div
			className="container-fluid bg-secondary d-flex flex-row-reverse justify-content-around align-items-center py-5"
			style={{ height: "40vh" }}>
			{/* HERO IMAGE */}
			<div className=" col-3 d-none d-sm-block">
				{/* <img
          className="image"
          src={personalInfo?.profilePic}
          alt="image"
          width={"250px"}
        /> */}
			</div>

			{/* HERE SECTION USER DETAILS */}
			<div className="content d-flex flex-column justify-content-start col-2 text-light">
				<h2 className=" text-nowrap">{personalInfo?.name}</h2>
				<h4>___________________________</h4>
				<h5 className=" " style={{ width: "10rem" }}>
					{personalInfo?.qualification}
				</h5>
				<p style={{ width: "10rem" }}>Contact: {personalInfo?.contactNo}</p>
				<p style={{ width: "10rem" }}>Email: {personalInfo?.email}</p>
			</div>
		</div>
	);
};

export default Hero;
```
