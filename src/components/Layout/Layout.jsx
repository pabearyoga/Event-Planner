import css from './Layout.module.css';
import  Header  from '../Header/Header'


export const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main className={css.container}>{children}</main>
        </>
    )
};