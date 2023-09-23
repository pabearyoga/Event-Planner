import React, { useState } from 'react';
import { useUser } from '../../hooks/userContext';

import css from './Search.module.css';
import { FiSearch } from 'react-icons/fi';

const Search = () => {


    const { search, changeSearchInput } = useUser();

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
                onChange={changeSearchInput}
                required
            />
        </div>
    )
    
};

export default Search;