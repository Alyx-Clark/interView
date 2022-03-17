import React from "react";

class ShowRubrics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideoRubrics(this.props.videoId);
        debugger;
    }

    render() {
        debugger;
        if (this.props.avgrubrics.professionalismRating === undefined || this.props.avgrubrics.professionalismRating === false) {
            return (
                <div className="rubric">
                    <div className="professionalism-rating">Professionalism: 0</div>
                    <div className="confidence-rating">Confidence: 0</div>
                    <div className="content-rating">Content: 0</div>
                    <div className="voice-rating">Voice: 0</div>
                </div>
            );
        }

        return (
            <div className="rubric">
                <div className="professionalism-rating">Professionalism: {(this.props.avgrubrics.professionalismRating).toFixed()}</div>
                <div className="confidence-rating">Confidence: {(this.props.avgrubrics.confidenceRating).toFixed()}</div>
                <div className="content-rating">Content: {(this.props.avgrubrics.contentRating).toFixed()}</div>
                <div className="voice-rating">Voice: {(this.props.avgrubrics.voiceRating).toFixed()}</div>
            </div>
        );
    }
}

export default ShowRubrics;
