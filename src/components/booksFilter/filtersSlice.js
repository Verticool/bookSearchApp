import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    activeFilters: '*',
    activeSort: 'relevance'
});

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            state.activeFilters = action.payload;
        },
        sortChanged: (state, action) => {
            state.activeSort = action.payload
        }
    }
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const { selectAll } = filtersAdapter.getSelectors(state => state.filters);

export const {
    filtersChanged,
    sortChanged
} = actions;