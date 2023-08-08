import  DatePicker  from "../DatepickerCalendar/Datepicker";
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import styles from '../../CreateEventForm.module.css';

console.log(Date())

const DatePickerInput = ({label, name, handleSelectClick, selectValue, showOption, onClose, onSelectDate}) => {
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.label}>{label}</div>
            <button
                name={name}
                className={styles.input}
                onClick={handleSelectClick}

            >
                {selectValue}
            </button>

            {showOption ? <button className={styles.refreshBtn}><GoChevronUp size={24} color='var(--accent)' /></button> : <button className={styles.refreshBtn}><GoChevronDown size={24} color='var(--accent)' /></button>}

            {showOption &&
                <DatePicker
                onClose={onClose}
                onSelectDate={onSelectDate}
                />}
        </div>
            
    )
};


export default DatePickerInput