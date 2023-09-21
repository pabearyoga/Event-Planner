import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import { Btn } from '../../components/Btn/Btn';
import Title from '../../components/Title/Title'
import EventCardList from '../../components/EventCardList/EventCardList';

import { getAllEvents } from '../../utils/services/eventService';

import { NavLink } from 'react-router-dom';

import {CiFilter} from 'react-icons/ci'
import {LuSettings2} from 'react-icons/lu'




const Home = () => {

    const [events, setEvents] = useState([]);
    const [category, setCategory] = useState('Category')
    const [sortBy, setSortBy] = useState('Sort by')
    const [showCategoryOption, setShowCategoryOption] = useState(false)
    const [showSortByOption, setShowSortByOption] = useState(false)

    const categoryList = ['All', 'Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport', 'Other'] 
    const sortByList = ['by name', 'by name', 'by data', 'by data', 'by priority', 'by priority']

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

    const categorySelectClick = () => {
        setShowCategoryOption(prevShowCategoryOption => !prevShowCategoryOption)
    }

    const sortBySelectClick = () => {
        setShowSortByOption(prevShowSortByOption => !prevShowSortByOption)
    }


    return (
        <div className={css.home}>
            <div className={css.homeHeader}>

                <div className={css.settings}>
                    <FilterSelect
                        selectValue={category}
                        handleSelectClick={categorySelectClick}
                        Icon={CiFilter}
                        showOption={showCategoryOption}
                        optionList={categoryList}
                        handleOptionSelect={(e)=> setCategory(e.target.name)}
                    ></FilterSelect>
                    <FilterSelect
                        selectValue={sortBy}
                        handleSelectClick={sortBySelectClick}
                        Icon={LuSettings2}
                        showOption={showSortByOption}
                        optionList={sortByList}
                        handleOptionSelect={(e)=> setSortBy(e.target.name)}
                    ></FilterSelect>
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