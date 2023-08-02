import css from './Home.module.css';
import Category from '../../components/Category/Category';
import SortBy from '../../components/SortBy/SortBy';
import { Btn } from '../../components/Btn/Btn';
import Title from '../../components/Title/Title'



export const Home = () => {
    return (
        <div className={css.home}>
            <Title>My events</Title>
            <div className={css.settings}>
                    <Category></Category>
                    <SortBy></SortBy>
                    <Btn>Add new event</Btn>
            </div>
        </div>
    )
};