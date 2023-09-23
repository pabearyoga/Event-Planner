import React, { useState } from 'react';

import css from './Search.module.css';
import { FiSearch } from 'react-icons/fi';

const Search = () => {

    const [search, setSearch] = useState();
    console.log(search)
    return (
        <div className={css.wrapper}>
            <div className={css.searchImg}>
                <FiSearch size={24} color='var(--accent)' />
            </div>

            <input
                type="text"
                className={css.search}
                name="filter"
                value={search}
                placeholder="Search by keywords"
                onChange={(e) => setSearch(e.target.value)}
                required
            />
        </div>
    )
    
};

export default Search;