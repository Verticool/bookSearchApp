import './booksList.sass';
import BooksListItem from '../booksListItem/BooksListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchDataFromApi } from '../../services/BooksService';
const BooksList = () => {

    const { searchText } = useSelector(state => state.search);
    const [offset, setOffset] = useState(0);

    const dispatch = useDispatch();

    const loadMore = () => {
        setOffset(offset => offset + 8)
        dispatch(fetchDataFromApi(searchText));
    }


    return (
        <div className="booksList">
            <div className="booksList-grid">
                <BooksListItem />
            </div>
            <button onClick={() => loadMore()} className='booksList__loadMore'>Load more</button>
        </div>
    )
}

export default BooksList;