import { useParams, useNavigate } from "react-router-dom"

import css from './EditEvent.module.css';
import { BackBnt } from '../../components/BackBnt/BackBnt'
import Title from '../../components/Title/Title'
import CreateEventForm from '../../components/CreateEventForm/CreateEventForm'
import { useState, useEffect } from "react";

import { NavLink } from 'react-router-dom';
import { getEventById } from "../../utils/services/eventService";


const EditEvent = () => {
    const [event, setEvent] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {
    const fetchEvents = async () => {
    try {
        const evenData = await getEventById(id);
        setEvent(evenData);
    } catch (error) {
        console.error(error.message);
    }
    }

    fetchEvents();
    }, []); 
    // console.log(event)

    return (
        <div className={css.home}>
            <NavLink to="/">
                <BackBnt></BackBnt>
            </NavLink>
            <Title>Create new event</Title>
            <CreateEventForm event={event}></CreateEventForm>

        </div>
    )
};

export default EditEvent