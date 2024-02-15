import { createSelector } from "@reduxjs/toolkit";

const tokenSelector = (state)=> state;

const selectTokenSelector = createSelector(
    tokenSelector,
    state => state.token);

// export const selectToken = (state)=>{
//     return selectTokenSelector(state);
// }