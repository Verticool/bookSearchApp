import './booksSearch.sass';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { performSearch } from './searchSlice';
import { fetchDataFromApi } from '../../services/BooksService';

const BooksSearch = () => {

    const [onSearchText, setSearchText] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(performSearch(onSearchText.replace(' ', '+')));
        dispatch(fetchDataFromApi());
    }

    return (
        <div className="booksSearch">
            <form className="booksSearch__form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text"
                    name="name"
                    className="booksSearch__form_control"
                    id="name"
                    placeholder="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default BooksSearch;