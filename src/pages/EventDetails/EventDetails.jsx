import css from './EventDetails.module.css';
import { BackBnt } from '../../components/BackBnt/BackBnt'
import EventDetailsItem from '../../components/EventDetailsItem/EventDetailsItem'

import { NavLink } from 'react-router-dom';


const EventDetails = () => {
    return (
            <div className={css.eventDetailWrapper}>
                <NavLink to="/">
                    <BackBnt></BackBnt>
                </NavLink>
                <EventDetailsItem></EventDetailsItem>
            </div>
    )
};

export default EventDetails