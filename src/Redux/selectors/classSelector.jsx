import { createSelector } from "@reduxjs/toolkit";

const classSelector = (state)=> state.class;

const selectClassSelector = createSelector(
    classSelector,
    state => state.classes);
//  page
const selectPageSelector = createSelector(
    classSelector,
    state => state.page);
//size
const selectSizeSelector = createSelector(
   classSelector,
    state => state.size);
// totalSize
const selectTotalSizeSelector = createSelector(
    classSelector,
    state => state.totalSize);

const selectSearchSelector = createSelector(
    classSelector,
    state => state.search);

export const selectClass = (state)=>{
    return selectClassSelector(state);
}
export const selectPage = (state)=>{
    return selectPageSelector(state);
}
export const selectSize = (state)=>{
    return selectSizeSelector(state);
}
export const selectTotalSize = (state)=>{
    return selectTotalSizeSelector(state);
}
export const selectSearch = (state)=>{
    return selectSearchSelector(state);
}