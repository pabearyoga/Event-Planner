import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Locale from '../Locale/Locale';


const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <Logo></Logo>
                <div className={css.settings}>
                    <Search></Search>
                    <Locale></Locale>
                </div>
            </div>
        </header>
    )
};

export default Header;