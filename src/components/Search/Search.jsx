import css from './Search.module.css';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.searchImg}>
                <FiSearch size={24} color='var(--accent)' />
            </div>

            <input
                type="text"
                className={css.search}
                name="filter"
                // value={filters}
                placeholder="Search by keywords"
                // onChange={handleFilterChange}
                required
            />
        </div>
    )
    
};

export default Search;