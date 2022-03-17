import React from 'react';
import ShowFeedbacksContainer from './show_feedbacks_container';
import ShowRubricsContainer from './show_rubrics_container';
import RubricFormContainer from './show_rubric_form_container';

class VideoShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        return (
            <div>
                <ShowFeedbacksContainer videoId={this.props.videoId}/>
                <ShowRubricsContainer videoId={this.props.videoId} />
                <RubricFormContainer videoId={this.props.videoId}/>
            </div>
        );
    }
}

export default VideoShowPage;