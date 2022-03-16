import React from "react";

class ShowRubrics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchVideoRubrics('622fee0353e5b6c175fd7611');
    }

    render() {
        let professionalismRating = 0;
        let confidenceRating = 0;
        let contentRating = 0;
        let voiceRating = 0;

        if (this.props.rubrics === undefined || this.props.rubrics.length === 0 || this.props.rubrics.length === undefined) {
            professionalismRating = 0;
            confidenceRating = 0;
            contentRating = 0;
            voiceRating = 0;
        } else {
            this.props.rubrics.forEach(function (rubric) {
                professionalismRating += rubric.professionalism;
                confidenceRating += rubric.confidence;
                contentRating += rubric.content;
                voiceRating += rubric.voice;

                professionalismRating /= this.props.rubrics.length;
                professionalismRating = professionalismRating.toFixed();
        
                confidenceRating /= this.props.rubrics.length;
                confidenceRating = confidenceRating.toFixed();
        
                contentRating /= this.props.rubrics.length;
                contentRating = contentRating.toFixed();
        
                voiceRating /= this.props.rubrics.length;
                voiceRating = voiceRating.toFixed();
            });
        };

        debugger

        return (
            <div className="rubric">
                <div className="professionalism-rating">professionalismRating</div>
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
