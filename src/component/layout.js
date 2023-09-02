import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}
