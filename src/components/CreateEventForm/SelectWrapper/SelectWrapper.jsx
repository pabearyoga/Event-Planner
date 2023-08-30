import styles from '../CreateEventForm.module.css';
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import { nanoid } from "nanoid";

const SelectWrapper = ({label, name, validation, handleSelectClick, selectValue, showOption, optionList, handleOptionSelect}) => {
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.label}>{label}</div>
            <button
                name={name}
                className={`${validation ? styles.input : styles.inputInvalid}`}
                onClick={handleSelectClick}

            >
                {selectValue}
            </button>

            {!validation && <div className={styles.invalidInputeMessage}></div>}

            {showOption ? <button className={styles.refreshBtn}><GoChevronUp size={24} color={`${validation ? 'var(--accent)' : 'var(--hight)'}`} /></button> : <button className={styles.refreshBtn}><GoChevronDown size={24} color={`${validation ? 'var(--accent)' : 'var(--hight)'}`} /></button>}

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

export default SelectWrapper;