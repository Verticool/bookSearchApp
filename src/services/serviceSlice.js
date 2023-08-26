import { createSlice } from '@reduxjs/toolkit';
import { fetchDataFromApi } from './BooksService';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        data: null,
        error: null,
        offset: 0
    },
    reducers: {
        setOffset: (state, action) => {
            state.offset = action.payload
        },
        loadMore: (state, action) => {
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataFromApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDataFromApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataFromApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;
