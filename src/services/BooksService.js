import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchDataFromApi = createAsyncThunk(
    'data/fetchDataFromApi',
    async (_, thunkAPI) => {
        const _apiKey = '';
        const _apiBase = 'https://www.googleapis.com/books/v1/';


        const state = thunkAPI.getState();
        const searchState = state.search;
        const filterState = state.filters;
        const offset = data.offset;
        const searchText = searchState.searchText;
        const activeFilters = filterState.activeFilters;
        const activeSort = filterState.activeSort;
        console.log(`${searchText}, ${activeFilters}, ${activeSort}`)


        const res = await fetch(`${_apiBase}volumes?q=${searchText}+subject:${activeFilters}&orderBy=${activeSort}&maxResults=${8}&key=${_apiKey}`)

        const data = await res.json()
        return data.items.map(_transformBooks);
    }

)

const _transformBooks = (data) => {
    return {
        id: data.id,
        title: data.volumeInfo.title,
        author: data.volumeInfo.authors ? data.volumeInfo.authors[0] : "Unknown author",
        description: data.volumeInfo.description || "There is no description",
        pageCount: data.volumeInfo.pageCount || 0,
        category: data.volumeInfo.categories ? data.volumeInfo.categories[0] : "Unknown category",
        language: data.volumeInfo.language || "Language undefined",
        smallPic: data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.smallThumbnail : "",
        bigPic: data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
    };
};




