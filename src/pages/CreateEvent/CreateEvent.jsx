import css from './CreateEvent.module.css';
import { BackBnt } from '../../components/BackBnt/BackBnt'
import Title from '../../components/Title/Title'
import CreateEventForm from '../../components/CreateEventForm/CreateEventForm'

import { NavLink } from 'react-router-dom';




const CreateEvent = () => {
    return (
        <div className={css.home}>
            <NavLink to="/">
                <BackBnt></BackBnt>
            </NavLink>
            <Title>Create new event</Title>
            <CreateEventForm></CreateEventForm>

        </div>
    )
};

export default CreateEvent