import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import "./stylesheets/reset.css"; 
import "./stylesheets/nav.css"; 
import "./stylesheets/modal.css"; 
import "./stylesheets/mainpage.css"; 
import "./stylesheets/session.css";
import "./stylesheets/show_feedback.css"

import AllModals from "./modal/modal_container";
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';

import ShowFeedbacksContainer from './show/show_feedbacks_container';

const App = () => (
    <div>
        <AllModals/>
        <NavBarContainer/>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            {/* <ProtectedRoute exact path="/tweets"></ProtectedRoute> */}
        </Switch>
        <ShowFeedbacksContainer />
    </div>
);

export default App;