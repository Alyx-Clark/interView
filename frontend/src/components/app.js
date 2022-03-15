import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import "./stylesheets/reset.css"; 
import "./stylesheets/nav.css"; 
import "./stylesheets/modal.css"; 
import "./stylesheets/mainpage.css"; 
import "./stylesheets/session.css"

import AllModals from "./modal/modal_container";
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';

const App = () => (
    <div>
        <AllModals/>
        <NavBarContainer />
        <AuthRoute exact path="/" component={MainPage} />
        <Switch>

        </Switch>
    </div>
);

export default App;