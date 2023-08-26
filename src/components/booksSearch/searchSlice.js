import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const searchAdapter = createEntityAdapter();

const initialState = searchAdapter.getInitialState({
    searchText: '',
})

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        performSearch: (state, action) => {
            state.searchText = action.payload
        },
    }
})

const { actions, reducer } = searchSlice;

export default reducer;

export const { selectAll } = searchAdapter.getSelectors(state => state.search);

export const {
    performSearch
} = actions;