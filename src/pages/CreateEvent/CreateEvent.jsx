import css from './CreateEvent.module.css';
import { BackBnt } from '../../components/BackBnt/BackBnt'
import Title from '../../components/Title/Title'
import CreateEventForm from '../../components/CreateEventForm/CreateEventForm'




export const CreateEvent = () => {
    return (
        <div className={css.home}>
            <BackBnt></BackBnt>
            <Title>Create new event</Title>
            <CreateEventForm></CreateEventForm>

        </div>
    )
};