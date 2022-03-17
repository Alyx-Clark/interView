import React from 'react';
import ShowFeedbacksContainer from './show_feedbacks_container';
import CreateFeedbackFormContainer from './create_feedback_form_container';
import EditFeedbackFormContainer from './edit_feedback_form_container.js'
import ShowRubricsContainer from './show_rubrics_container';
import RubricFormContainer from './show_rubric_form_container';
import { Switch, Route } from 'react-router-dom';
// import { Route } from 'express';

class VideoShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='show-video-background'>
                <div className='mainbox'>
                    <div className='playing-video-container'>
                        <img src="video.jpeg"></img>
                        <ShowFeedbacksContainer videoId={this.props.videoId} history={this.props.history}/>
                    </div>
                <Switch>
                    <Route path="/videos/:videoId/edit/:feedbackId" component={EditFeedbackFormContainer} history={this.props.history} />
                    <CreateFeedbackFormContainer videoId={this.props.videoId} />
                </Switch>
                    <div className='sidebar'>
                        <ShowRubricsContainer videoId={this.props.videoId} />
                        <RubricFormContainer videoId={this.props.videoId}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoShowPage;