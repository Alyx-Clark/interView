import React from "react";

class ShowRubrics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger;
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
            // debugger;
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

        // debugger;
        let proWidth = Math.floor((professionalismRating / 5) * 100) + '%'
        let confWidth = Math.floor((confidenceRating / 5) * 100) + '%'
        let contWidth = Math.floor((contentRating / 5) * 100) + '%'
        let voiWidth = Math.floor((voiceRating / 5) * 100) + '%'
        let average = Math.round(
                (Math.floor(professionalismRating)
                + Math.floor(confidenceRating)
                + Math.floor(contentRating)
                + Math.floor(voiceRating)) / 4 
            ).toFixed(1); 
        
        return (
            <div className="rubric">
                <div className="details">
                    
                    <h3 className="professionalism-rating">Professionalism</h3>
                    <div className="professonalism-rating-bar" style={{ width: proWidth }}>
                        <span className="rating-ani">{professionalismRating}</span>
                    </div>
                    <br/>
                
                    <h3 className="confidence-rating">Confidence</h3>
                    <div className="confidence-rating-bar" style={{ width: confWidth }}>
                        <span className="rating-ani">{confidenceRating}</span>
                    </div>
                    <br />
                
                    <h3 className="content-rating">Content</h3>
                    <div className="content-rating-bar" style={{ width: contWidth }}>
                        <span className="rating-ani">{contentRating}</span>
                    </div>
                    <br />

                    <h3 className="voice-rating">Voice</h3>
                    <div className="voice-rating-bar" style={{ width: voiWidth }}>
                        <span className="rating-ani">{voiceRating}</span>
                    </div>
                    <br />
                 
                </div>
                <div className="average">
                    <h3>{average}</h3>
                    <span>/ 5</span>
                </div>
            </div>
        );
    }
}

export default ShowRubrics;
