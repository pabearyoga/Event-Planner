import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import { Btn } from '../../components/Btn/Btn';
import Title from '../../components/Title/Title'
import EventCardList from '../../components/EventCardList/EventCardList';

import { getAllEvents } from '../../utils/services/eventService';

import { NavLink } from 'react-router-dom';

import {CiFilter} from 'react-icons/ci'
import { LuSettings2 } from 'react-icons/lu'

import { useUser } from '../../hooks/userContext';





const Home = () => {

    const [events, setEvents] = useState([]);
    const [category, setCategory] = useState('Category')
    const [sortBy, setSortBy] = useState('Sort by')
    const [sortByUpDown, setSortByUpDown] = useState()
    const [showCategoryOption, setShowCategoryOption] = useState(false)
    const [showSortByOption, setShowSortByOption] = useState(false)

    const categoryList = ['All', 'Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport', 'Other'] 
    const sortByList = ['by name', 'by name', 'by data', 'by data', 'by priority', 'by priority']

    const { search } = useUser();

    console.log(search)

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
        setShowSortByOption(false)
    }

    const sortBySelectClick = () => {
        setShowSortByOption(prevShowSortByOption => !prevShowSortByOption)
        setShowCategoryOption(false)

    }

    const handleOptionSelect = (e) => {
        switch (e.target.name) {
            case "All":
            case "Art":
            case "Music":
            case "Business":
            case "Conference":
            case "Workshop":
            case "Party":
            case "Sport":
            case "Other":
                setCategory(e.target.name.toLowerCase())
                break;
            case "by name":
            case "by data":
            case "by priority":
                if (e.target.nextSibling !== null && e.target.name === e.target.nextSibling.name) {
                    setSortByUpDown('up')
                } else {
                    setSortByUpDown('down')
                }
                setSortBy(e.target.name)
                break;

            default:
                return;
        }
    }

        const filterEventsByKeyword = (events, search) => {
            if (!search) {
                return events; // Якщо ключове слово порожнє, повертаємо всі події
            }

            search = search.toLowerCase(); // Перетворюємо ключове слово у нижній регістр

            return events.filter(event => {
                const eventName = event.name.toLowerCase();
                const eventDescription = event.description.toLowerCase();

                return eventName.includes(search) || eventDescription.includes(search);
            });
        };

      const searchFilterAndSortEvents = () => {
          let filteredEvents = events;
          
        // Фільтрація подій за ключовим словом
        filteredEvents = filterEventsByKeyword(filteredEvents, search);
          
        // Фільтрація подій за категорією
        if (category !== 'all' && category !== 'Category') {
            filteredEvents = events.filter(event => event.category === category);
        }

        // Сортування подій
        switch (sortBy) {
            case 'by name':
                    if (sortByUpDown === 'up') {
                    filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
                    } else {
                    filteredEvents.sort((a, b) => b.name.localeCompare(a.name));
                    }
                break;
            case 'by data':
                    if (sortByUpDown === 'up') {
                    filteredEvents.sort((a, b) => a.data.localeCompare(b.data));
                    } else {
                    filteredEvents.sort((a, b) => b.data.localeCompare(a.data));
                    }
                break;
            case 'by priority':
                    if (sortByUpDown === 'up') {
                    filteredEvents.sort((a, b) => a.priority.localeCompare(b.priority));
                    } else {
                    filteredEvents.sort((a, b) => b.priority.localeCompare(a.priority));
                    }
                break;
            default:
                break;
        }

        return filteredEvents;
    };

    const filteredAndSortedEvents = searchFilterAndSortEvents();

    return (
        <div className={css.home}>
            <div className={css.homeHeader}>

                <div className={css.settings}>
                    <FilterSelect
                        name='category'
                        selectValue={category}
                        handleSelectClick={categorySelectClick}
                        Icon={CiFilter}
                        showOption={showCategoryOption}
                        optionList={categoryList}
                        handleOptionSelect={handleOptionSelect}
                    ></FilterSelect>
                    <FilterSelect
                        name='sort by'
                        selectValue={sortBy}
                        handleSelectClick={sortBySelectClick}
                        Icon={LuSettings2}
                        showOption={showSortByOption}
                        optionList={sortByList}
                        handleOptionSelect={handleOptionSelect}
                    ></FilterSelect>
                    <NavLink to="create">
                        <Btn>Add new event</Btn>
                    </NavLink>
                </div>               
            </div>

            <Title>My events</Title>
            <EventCardList eventData={filteredAndSortedEvents}></EventCardList>
        </div>
    )
};

export default Home