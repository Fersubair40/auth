import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

ReactDOM.render(
    <BrowserRouter>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        <Route path = "/Login" component = {Login}/> 
        <Route path = "/Register"component = {Register}/>
    </div>
     
    </BrowserRouter>, document.getElementById('root')
)

