import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import studentSlice from "./reducers/studentSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        student: studentSlice.reducer
    }
});
export default store;

