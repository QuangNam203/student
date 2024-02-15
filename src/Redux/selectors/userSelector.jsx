import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state)=> state.user;

const selectUserSelector = createSelector(
    userSelector,
    state => state.userInfo);

const selectTokenSelector = createSelector(
    userSelector,
    state => state.token);

const selectNameSelector = createSelector(
    selectUserSelector,
    state => state.name);
    
export const selectUser = (state)=>{
    return selectUserSelector(state);
}

export const selectToken = (state)=>{
    return selectTokenSelector(state);
}

export const selectName = (state)=>{
    return selectNameSelector(state);
}