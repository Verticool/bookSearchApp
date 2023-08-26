import './booksListItem.sass';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const BooksListItem = () => {


    const { data } = useSelector(state => state.data);

    

    function renderView(data) {
        if (!data || data.length === 0) {
            return <></>
        }
        const items = data.map((item, i) => {
            const { title, author, bigPic } = item;
            return (
                <div className="booksListItem">
                    <img src={bigPic} alt="book_img" />
                    <div className="booksListItem__descr">
                        <div className="booksListItem_title">{title}</div>
                        <div className="booksListItem_author">{author}</div>
                    </div>
                </div>
            )
        })
        return (
            <>
                {items}
            </>
        )
    }

    const items = renderView(data);
    return (
        <>
            {items}
        </>
    )
}

export default BooksListItem;