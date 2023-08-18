import styles from '../CreateEventForm.module.css';
import {IoIosClose} from 'react-icons/io'


const InputTextarea = ({label, name, inputValue, handleInputChange, onClick}) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
                
            <textarea
            name={name}
            value={inputValue}
            onChange={handleInputChange}
            className={styles.input}
            />
                
            <btn className={styles.refreshBtn} onClick={onClick} ><IoIosClose size={24} color='var(--accent)'/></btn>
        </div> 
    )
};

export default InputTextarea;