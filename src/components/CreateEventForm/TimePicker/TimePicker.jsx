import styles from '../CreateEventForm.module.css';
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import TimePickerSwiper from './TimePickerSwiper/TimePickerSwiper';

const TimePick = ({label, name, handleInputChange, selectValue, showOption, onSelectTime}) => {

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.label}>{label}</div>
            <button
                name={name}
                onClick={handleInputChange}
                className={styles.input}

            >
                {selectValue}
            </button>

            {showOption ? <button className={styles.refreshBtn}><GoChevronUp size={24} color='var(--accent)' /></button> : <button className={styles.refreshBtn}><GoChevronDown size={24} color='var(--accent)' /></button>}

            {showOption &&
                <TimePickerSwiper
                onSelectTime={onSelectTime} />
            }
        </div>
    )
}

export default TimePick