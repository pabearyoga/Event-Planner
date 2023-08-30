import  DatePicker  from "../DatepickerCalendar/Datepicker";
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import styles from '../../CreateEventForm.module.css';

console.log(Date())

const DatePickerInput = ({label, name, validation, handleSelectClick, selectValue, showOption, onClose, onSelectDate}) => {
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

            {showOption &&
                <DatePicker
                onClose={onClose}
                onSelectDate={onSelectDate}
                />}
        </div>
            
    )
};


export default DatePickerInput