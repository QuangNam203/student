import { createSelector } from "@reduxjs/toolkit";

const studentSelector = (state)=> state.student;

const selectUserSelector = createSelector(
    studentSelector,
    state => state.students);
//  page
const selectPageSelector = createSelector(
    studentSelector,
    state => state.page);
//size
const selectSizeSelector = createSelector(
    studentSelector,
    state => state.size);
// totalSize
const selectTotalSizeSelector = createSelector(
    studentSelector,
    state => state.totalSize);

export const selectStudents = (state)=>{
    return selectUserSelector(state);
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