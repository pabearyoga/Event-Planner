import css from './Layout.module.css';
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';


export const Layout = () => {
    return (
        <>
            <Header></Header>
            <main className={css.container}>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};