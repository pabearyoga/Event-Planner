import styles from '../CreateEventForm.module.css';
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import TimePickerSwiper from './TimePickerSwiper/TimePickerSwiper';

const TimePick = ({label, name, validation, handleInputChange, selectValue, showOption, onSelectTime}) => {

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.label}>{label}</div>
            <button
                name={name}
                onClick={handleInputChange}
                className={`${validation ? styles.input : styles.inputInvalid}`}
            >
                {selectValue}
            </button>

            {!validation && <div className={styles.invalidInputeMessage}></div>}

            {showOption ? <button className={styles.refreshBtn}><GoChevronUp size={24} color={`${validation ? 'var(--accent)' : 'var(--hight)'}`} /></button> : <button className={styles.refreshBtn}><GoChevronDown size={24} color={`${validation ? 'var(--accent)' : 'var(--hight)'}`} /></button>}

            {showOption &&
                <TimePickerSwiper
                onSelectTime={onSelectTime} />
            }
        </div>
    )
}

export default TimePick