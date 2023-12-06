import css from './CreateEvent.module.css';
import { BackBnt } from '../../components/BackBnt/BackBnt'
import CreateEventForm from '../../components/CreateEventForm/CreateEventForm'

import { NavLink } from 'react-router-dom';




const CreateEvent = () => {
    return (
        <div className={css.home}>
            <NavLink to="/">
                <BackBnt></BackBnt>
            </NavLink>

            <CreateEventForm></CreateEventForm>
        </div>
    )
};

export default CreateEvent