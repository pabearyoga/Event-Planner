import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Locale from '../Locale/Locale';

import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <NavLink to="/">
                    <Logo></Logo>
                </NavLink>
                <div className={css.settings}>
                    <Search></Search>
                    <Locale></Locale>
                </div>
            </div>
        </header>
    )
};

export default Header;