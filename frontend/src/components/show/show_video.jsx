import React from 'react';
import ShowFeedbacksContainer from './show_feedbacks_container';
import ShowRubricsContainer from './show_rubrics_container';
import RubricFormContainer from './show_rubric_form_container';

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
                        <ShowFeedbacksContainer videoId={this.props.videoId}/>
                    </div>
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