import { createSlice } from "@reduxjs/toolkit";

const positionsSlice = createSlice({
    name: 'positions',
    initialState: [],
    reducers: {
        addPosition: (_, action) => {
            return action.payload
        },
    }
});

export const {addPosition} = positionsSlice.actions;
export const positionReducer = positionsSlice.reducer;

export const selectorFilterPositions = (state, filters = []) => {

    if(filters.length === 0) return state.positions;
    
    return state.positions.filter(pos => {
        const allCardFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        return filters.every(filter => allCardFilters.includes(filter))
    })
};
