import css from './EventDetails.module.css';
import { BackBnt } from '../../components/BackBnt/BackBnt'
import Title from '../../components/Title/Title'
import EventDetailsItem from '../../components/EventDetailsItem/EventDetailsItem'

import { NavLink } from 'react-router-dom';


const EventDetails = () => {
    return (
        <div >
            <NavLink to="/">
                <BackBnt></BackBnt>
            </NavLink>
            <div className={css.eventDetailWrapper}>
                <div>
                    <Title style={{marginRight: 'auto'}}>Create new event</Title>
                    <EventDetailsItem></EventDetailsItem>
                </div>
            </div>

        </div>
    )
};

export default EventDetails