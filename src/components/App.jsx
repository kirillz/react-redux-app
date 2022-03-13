import React from 'react';
import './app.scss';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";

const App = () => {
    const dispatch = useDispatch()


    return (
    <BrowserRouter>
        <h3>TOP звезд на GitHub</h3>
        <div className="container">
            <Routes>
                <Route exact path="/"  element={<Main />}/>
            </Routes>
        </div>
    </BrowserRouter>

    );
};

export default App;