import styles from '../CreateEventForm.module.css';
import {IoIosClose} from 'react-icons/io'


const InputText = ({label, name, inputValue, validation, handleInputChange, onClick}) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
            type="text"
            name={name}
            value={inputValue}
            onChange={handleInputChange}
            className={`${validation ? styles.input : styles.inputInvalid}`} />
            {!validation && <div className={styles.invalidInputeMessage}></div>}
            <btn className={styles.refreshBtn} onClick={onClick} ><IoIosClose size={24} color={`${validation ? 'var(--accent)' : 'var(--hight)'}`} /></btn>
        </div>
    )
};

export default InputText;

