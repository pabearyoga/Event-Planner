import css from './Locale.module.css';


const Locale = () => {
    return (           
        <select className={css.locale}>
            <option value='UK'>UK</option>
            <option value='UK'>UA</option>
        </select>   
    )
    
};

export default Locale;