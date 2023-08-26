import { configureStore } from "@reduxjs/toolkit";
import filters from '../components/booksFilter/filtersSlice';
import search from '../components/booksSearch/searchSlice';
import data from "../services/serviceSlice";


const store = configureStore({
    reducer: { filters, search, data },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;