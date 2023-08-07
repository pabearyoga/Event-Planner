import styles from '../CreateEventForm.module.css';
import {IoIosClose} from 'react-icons/io'


const InputFile = ({label, inputValue, handleInputChange, onClick}) => {
    return (
                <div className={styles.inputWrapper}>
                  <label className={styles.label}>{label}</label>
                  <div className={styles.fileInputWrapper}>
                      {inputValue}
                    <input type="file" accept="image/*" name="photo" onChange={handleInputChange}
                    />

                  </div>
                    <button className={styles.refreshBtn} onClick={onClick} ><IoIosClose size={24} color='var(--accent)'/></button>
                </div>

    )
};

export default InputFile;