import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
import Category from '../../components/Category/Category';
import SortBy from '../../components/SortBy/SortBy';
import { Btn } from '../../components/Btn/Btn';
import Title from '../../components/Title/Title'
import EventCardList from '../../components/EventCardList/EventCardList';

import { getAllEvents } from '../../utils/services/eventService';


import { NavLink } from 'react-router-dom';



const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
        try {
            const eventList = await getAllEvents();
            setEvents(eventList);
        } catch (error) {
            console.error(error.message);
        }
        }

        fetchEvents();
    }, []); 

    return (
        <div className={css.home}>
            <div className={css.homeHeader}>

                <div className={css.settings}>
                    <Category></Category>
                    <SortBy></SortBy>
                    <NavLink to="create">
                        <Btn>Add new event</Btn>
                    </NavLink>
                </div>               
            </div>

            <Title>My events</Title>
            <EventCardList eventData={events}></EventCardList>
        </div>
    )
};

export default Home