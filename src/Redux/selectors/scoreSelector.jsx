import { createSelector } from "@reduxjs/toolkit";

const scoreSelector = (state)=> state.score;

const SelectScoreSelector = createSelector(
    scoreSelector,
    state => state.scores);
//  page
const selectPageSelector = createSelector(
    scoreSelector,
    state => state.page);
//size
const selectSizeSelector = createSelector(
    scoreSelector,
    state => state.size);
// totalSize
const selectTotalSizeSelector = createSelector(
    scoreSelector,
    state => state.totalSize);

const selectSearchSelector = createSelector(
    scoreSelector,
    state => state.search);

export const selectScores = (state)=>{
    return SelectScoreSelector(state);
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