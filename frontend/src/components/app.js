import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import "./stylesheets/reset.css"; 
import "./stylesheets/nav.css"; 
import "./stylesheets/modal.css"; 
import "./stylesheets/mainpage.css"; 
import "./stylesheets/session.css";
import "./stylesheets/show_feedback.css";
import "./stylesheets/post_video.css";
import "./stylesheets/show_video.css";
import "./stylesheets/video_index.css";
import "./stylesheets/show_rubric.css"; 

import AllModals from "./modal/modal_container";
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import VideoShowPageContainer from './show/show_video_container';
import PostVideoFormContainer from './video/post_video_form_container'
import VideoIndexContainer from './video/video_index_container'


const App = () => (
    <div>
        <AllModals/>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path="/videoindex" component={VideoIndexContainer}/>
            <ProtectedRoute exact path="/users" component={PostVideoFormContainer}/>
            <ProtectedRoute path="/videos/:videoId" component={VideoShowPageContainer} />
        </Switch>
    </div>
);

export default App;

