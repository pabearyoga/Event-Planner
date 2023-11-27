import React, { useState } from 'react';
import styles from './FilterSelect.module.css';
import { nanoid } from "nanoid";

const FilterSelect = ({ name, handleSelectClick, selectValue, Icon, showOption, optionList, handleOptionSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.inputWrapper} style={showOption ? { width: '170px' } : {}}>
            <button
                name={name}
                className={!showOption ? styles.filterBtn : styles.filterBtnShow}
                onClick={handleSelectClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

            >
                <p className={!showOption && styles.text}>{selectValue}</p>                
                <Icon size={24} color={`${isHovered} ? 'var(--accent)' : 'var(--accent)'`} />
            </button>

            <div>
                {showOption &&
                    <ul className={styles.optionList}>
                        {optionList.map(item => 
                            <button 
                                type="button"
                                category={name}
                                name={item}
                                key={nanoid()}
                                className={name === 'sort by' ? styles.optionListItemSortBy : styles.optionListItem}
                                onClick={handleOptionSelect}
                            >
                                {item}
                            </button>
                        )}     
                    </ul>
                }
            </div>
        </div>

    )
};

export default FilterSelect;