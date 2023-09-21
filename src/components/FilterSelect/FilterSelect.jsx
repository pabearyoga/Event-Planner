import React, { useState } from 'react';
import styles from './FilterSelect.module.css';
import {CiFilter} from 'react-icons/ci'
import { nanoid } from "nanoid";

const FilterSelect = ({ name, handleSelectClick, selectValue, Icon, showOption, optionList, handleOptionSelect }) => {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div className={styles.inputWrapper}>
            <button
                name={name}
                className={!showOption ? styles.filterBtn : styles.filterBtnShow}
                onClick={handleSelectClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

            >
                <p>{selectValue}</p>                
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
                                className={styles.optionListItem}
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