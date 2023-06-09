import { configureStore } from "@reduxjs/toolkit";

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addBurger":
            const newState = state.concat([action.price]);
            return newState;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
