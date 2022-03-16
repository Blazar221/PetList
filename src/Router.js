import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import App from "./App";
import AboutMe from "./AboutMe";


const BasicRoute = () => (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact path="/about" element={<AboutMe/>}/>
        </Routes>
    </HashRouter>
);


export default BasicRoute;