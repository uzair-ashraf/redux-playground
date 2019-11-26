import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home';
import SignUp from './sign_up';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.scss';

const App = () => (
    <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-up" component={SignUp} />
    </div>
);

export default App;
