import BooksSearch from '../booksSearch/BooksSearch';
import BooksList from '../booksList/BooksList';
import BooksFilter from '../booksFilter/BooksFilter';
import { useEffect } from 'react';
import './mainPage.sass';

const MainPage = () => {

    useEffect(() => {
        console.log();
    }, []);
    
    return (
        <section className='mainPage'>
            <div className='mainPage__wrapper'>
                <header>Search for books</header>
                <BooksSearch />
                <BooksFilter />
                <BooksList />
            </div>
        </section>
    )
}

export default MainPage;