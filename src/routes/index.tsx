import React from 'react';
import Home from '../modules/home';
import {Route, Routes} from 'react-router-dom';
import About from '../modules/about';
import Contact from '../modules/contact';
import Header from '../components/header';
import Footer from '../components/footer';

const Router = () => {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/contact'} element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
        </React.Fragment>
    );
};

export default Router;
