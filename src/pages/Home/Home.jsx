import css from './Home.module.css';
import Category from '../../components/Category/Category';
import SortBy from '../../components/SortBy/SortBy';
import { Btn } from '../../components/Btn/Btn';
import Title from '../../components/Title/Title'
import EventCardList from '../../components/EventCardList/EventCardList';

import eventData from '../../utils/eventDB.json'



export const Home = () => {
    return (
        <div className={css.home}>
            <div className={css.homeHeader}>
                <Title>My events</Title>

                <div className={css.settings}>
                    <Category></Category>
                    <SortBy></SortBy>
                    <Btn>Add new event</Btn>
                </div>               
            </div>

            <EventCardList eventData={eventData}></EventCardList>
        </div>
    )
};