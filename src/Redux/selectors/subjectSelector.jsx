import { createSelector } from "@reduxjs/toolkit";

const subjectSelector = (state)=> state.class;

const selectSubjectSelector = createSelector(
    subjectSelector,
    state => state.classes);
//  page
const selectPageSelector = createSelector(
    subjectSelector,
    state => state.page);
//size
const selectSizeSelector = createSelector(
    subjectSelector,
    state => state.size);
// totalSize
const selectTotalSizeSelector = createSelector(
    subjectSelector,
    state => state.totalSize);

const selectSearchSelector = createSelector(
    subjectSelector,
    state => state.search);

export const selectSubject = (state)=>{
    return selectSubjectSelector(state);
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