import React from 'react';

class RubricForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.currentUser.id,
            video: this.props.videoId,
            professionalism: 0,
            confidence: 0,
            content: 0,
            voice: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.createRubric(this.state);
        document.getElementById('professionalism-box').value = '';
        document.getElementById('confidence-box').value = '';
        document.getElementById('content-box').value = '';
        document.getElementById('voice-box').value = '';
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }


    render() {
        return (
            <div className="rubric-form">
                <div className="title">Rubric Score</div>
                <form onSubmit={this.handleSubmit}>
                    <label>Professionalism</label>
                    <br />
                    <input
                        id="professionalism-box"
                        type="number"
                        value={this.state.professionalism}
                        onChange={this.update("professionalism")}
                    />
                    <br />

                    <label>Confidence</label>
                    <br />
                    <input
                        id="confidence-box"
                        type="number"
                        value={this.state.confidence}
                        onChange={this.update("confidence")}
                    />
                    <br />

                    <label>Content</label>
                    <br />
                    <input
                        id="content-box"
                        type="number"
                        value={this.state.content}
                        onChange={this.update("content")}
                    />
                    <br />

                    <label>Voice</label>
                    <br />
                    <input
                        id="voice-box"
                        type="number"
                        value={this.state.voice}
                        onChange={this.update("voice")}
                    />
                    <br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default RubricForm;