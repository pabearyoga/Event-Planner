import styles from '../CreateEventForm.module.css';
import {IoIosClose} from 'react-icons/io'


const InputText = ({label, inputValue, handleInputChange, onClick}) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
            type="text"
            name="title"
            value={inputValue}
            onChange={handleInputChange}
            className={styles.input}
            />
            <button className={styles.refreshBtn} onClick={onClick} ><IoIosClose size={24} color='var(--accent)'/></button>
        </div>
    )
};

export default InputText;