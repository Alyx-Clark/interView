import React from 'react';
import ShowFeedbacksContainer from './show_feedbacks_container';
import ShowRubricsContainer from './show_rubrics_container';
import RubricFormContainer from './show_rubric_form_container';

class VideoShowPage extends React.Component {
    render() {
        return (
            <div>
                <ShowFeedbacksContainer />
                <ShowRubricsContainer />
                <RubricFormContainer />
            </div>
        );
    }
}

export default VideoShowPage;