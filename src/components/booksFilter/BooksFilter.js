import './booksFilter.sass';
import { useDispatch, useSelector } from 'react-redux';
import { filtersChanged, sortChanged } from './filtersSlice';


const BooksFilter = () => {

    const { activeFilters, activeSort } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    return (
        <div className="booksFilter">
            <label htmlFor="category" className="booksFilter_label">Category</label>
            <select onChange={(e) => dispatch(filtersChanged(e.target.value === 'All' ? '*' : e.target.value))} value={activeFilters} name="category" id="category">
                <option value="All">All</option>
                <option value="Arts">Arts</option>
                <option value="Fiction">Fiction</option>
                <option value="Humor">Humor</option>
                <option value="Science">Science</option>
            </select>
            <label htmlFor="sorting">Sorting by</label>
            <select onChange={(e) => dispatch(sortChanged(e.target.value))} value={activeSort} name="sorting" id="sorting">
                <option value="Relevance">Relevance</option>
                <option value="Newest">Newest</option>
            </select>
        </div>
    )
}

export default BooksFilter;