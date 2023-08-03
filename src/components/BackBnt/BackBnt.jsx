import css from './BackBnt.module.css';
import { BiArrowBack } from 'react-icons/bi';


export const BackBnt = () => {
    return (
        <button className={css.btn}><BiArrowBack size={24} color='var(--accent)' />Back</button>
    )
};