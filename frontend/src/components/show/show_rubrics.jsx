import React from "react";

class ShowRubrics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideoRubrics(this.props.videoId);
    }

    render() {

        if (this.props.avgrubrics.professionalismRating === undefined || this.props.avgrubrics.professionalismRating === false) {
            return (
                <div className="rubric">
                    <div className="details">

                        <h3 className="professionalism-rating">Professionalism</h3>
                        <div className="professionalism-rating-bar" style={{ width: "15%" }}>
                            <span className="rating-ani">0</span>
                        </div>

                        <h3 className="confidence-rating">Confidence</h3>
                        <div className="confidence-rating-bar" style={{ width: "15%" }}>
                            <span className="rating-ani">0</span>
                        </div>

                        <h3 className="content-rating">Content</h3>
                        <div className="content-rating-bar" style={{ width: "15%" }}>
                            <span className="rating-ani">0</span>
                        </div>

                        <h3 className="voice-rating">Voice</h3>
                        <div className="voice-rating-bar" style={{ width: "15%" }}>
                            <span className="rating-ani">0</span>
                        </div>

                    </div>

                    <div className="average">
                        <h3>0</h3>
                        <span>/ 5</span>
                    </div>
                </div>
            );
        }

        let proWidth = Math.floor((this.props.avgrubrics.professionalismRating / 5) * 100) + '%';
        let confWidth = Math.floor((this.props.avgrubrics.confidenceRating / 5) * 100) + '%';
        let contWidth = Math.floor((this.props.avgrubrics.contentRating / 5) * 100) + '%';
        let voiWidth = Math.floor((this.props.avgrubrics.voiceRating / 5) * 100) + '%';
        let average = (
            (Math.floor(this.props.avgrubrics.professionalismRating)
                + Math.floor(this.props.avgrubrics.confidenceRating)
                + Math.floor(this.props.avgrubrics.contentRating)
                + Math.floor(this.props.avgrubrics.voiceRating)) / 4
        ).toFixed(1); 

        return (
            <div className="rubric">
                <div className="details">

                    <h3 className="professionalism-rating">Professionalism</h3>
                    <div className="professionalism-rating-bar" style={{ width: proWidth }}>
                        <span className="rating-ani">{(this.props.avgrubrics.professionalismRating).toFixed(1)}</span>
                    </div>

                    <h3 className="confidence-rating">Confidence</h3>
                    <div className="confidence-rating-bar" style={{ width: confWidth }}>
                        <span className="rating-ani">{(this.props.avgrubrics.confidenceRating).toFixed(1)}</span>
                    </div>

                    <h3 className="content-rating">Content</h3>
                    <div className="content-rating-bar" style={{ width: contWidth }}>
                        <span className="rating-ani">{(this.props.avgrubrics.contentRating).toFixed(1)}</span>
                    </div>

                    <h3 className="voice-rating">Voice</h3>
                    <div className="voice-rating-bar" style={{ width: voiWidth }}>
                        <span className="rating-ani">{(this.props.avgrubrics.voiceRating).toFixed(1)}</span>
                    </div>

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
