import React from "react";

class ShowRubrics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;
        // this.props.fetchVideoRubrics('622fee0353e5b6c175fd7611');
        this.props.fetchVideoRubrics(this.props.videoId);
    }

    render() {
        let professionalismRating = 0;
        let confidenceRating = 0;
        let contentRating = 0;
        let voiceRating = 0;

        if (this.props.rubrics.data === undefined || this.props.rubrics.data.length === 0 || this.props.rubrics.data.length === undefined) {
            professionalismRating = 0;
            confidenceRating = 0;
            contentRating = 0;
            voiceRating = 0;
        } else {
            debugger;
            let length = this.props.rubrics.data.length 
            this.props.rubrics.data.forEach(rubric => professionalismRating += rubric.professionalism);
            professionalismRating /= length;
            professionalismRating = professionalismRating.toFixed();

            this.props.rubrics.data.forEach(rubric => confidenceRating += rubric.confidence);
            confidenceRating /= length;
            confidenceRating = confidenceRating.toFixed();

            this.props.rubrics.data.forEach(rubric => contentRating += rubric.content);
            contentRating /= length;
            contentRating = contentRating.toFixed();

            this.props.rubrics.data.forEach(rubric => voiceRating += rubric.voice);
            voiceRating /= length;
            voiceRating = voiceRating.toFixed();
        };

        debugger;

        return (
            <div className="rubric">
                <div className="professionalism-rating">Professionalism: {professionalismRating}</div>
                <div className="confidence-rating">Confidence: {confidenceRating}</div>
                <div className="content-rating">Content: {contentRating}</div>
                <div className="voice-rating">Voice: {voiceRating}</div>
            </div>
        );
    }
}

export default ShowRubrics;

// source
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment
