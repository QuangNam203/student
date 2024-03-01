import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import studentSlice from "./reducers/studentSlice";
import specificationSlice from "./reducers/specificationSlice";
import scoreSlice from "./reducers/scoreSlice";
import classSlice from "./reducers/classSlice";
import subjectSlice from "./reducers/subjectSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        student: studentSlice.reducer,
        specification: specificationSlice.reducer,
        score: scoreSlice.reducer,
        class: classSlice.reducer,
        subject: subjectSlice.reducer,
    }
});
export default store;

