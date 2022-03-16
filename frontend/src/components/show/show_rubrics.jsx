import React from "react";

class ShowRubrics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideoRubrics('622fee0353e5b6c175fd7611');
    }

    render() {
        let professionalismRating = 0;
        let confidenceRating = 0;
        let contentRating = 0;
        let voiceRating = 0;

        if (this.props.rubrics === undefined || this.props.rubrics === 0) {
            rating = 0.toFixed();
        } else {
            this.props.rubrics.forEach(function (rubric) {
                professionalismRating += rubric.professionalism;
                confidenceRating += rubric.confidence;
                contentRating += rubric.confidence;
                voiceRating += rubric.confidence;
            });
        };

        professionalismRating /= this.props.rubrics.length;
        professionalismRating = rating.toFixed();

        confidenceRating /= this.props.rubrics.length;
        confidenceRating = rating.toFixed();

        contentRating /= this.props.rubrics.length;
        contentRating = rating.toFixed();

        voiceRating /= this.props.rubrics.length;
        voiceRating = rating.toFixed();

        return (
            <div className="rubric">
                <div className="professionalism-rating">rofessionalismRating</div>
                <div className="confidence-rating">confidenceRating</div>
                <div className="content-rating">contentRating</div>
                <div className="voice-rating">voiceRating</div>
            </div>
        )
    }
}

export default ShowRubrics;

// source
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tofixed2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment
