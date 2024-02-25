import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import studentSlice from "./reducers/studentSlice";
import specificationSlice from "./reducers/specificationSlice";
import scoreSlice from "./reducers/scoreSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        student: studentSlice.reducer,
        specification: specificationSlice.reducer,
        score: scoreSlice.reducer
    }
});
export default store;

