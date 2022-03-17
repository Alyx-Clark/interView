import React from 'react';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.props.feedback);

    this.props.feedback['positive'] = '';
    this.props.feedback['negative'] = '';
    document.getElementById('feedback-positive-input').value = '';
    document.getElementById('feedback-negative-input').value = '';

    if (this.props.feedback.feedbackId !== '') {
      this.props.history.push(`/videos/${this.props.feedback.feedbackId}`)
    }
  }

  update(field) {
    return e => this.props.feedback[field] = e.currentTarget.value;
  }

  render() {
    return (
      <div>
        <div className="create-feedback-input-container">
          <textarea
            id='feedback-positive-input'
            placeholder="What did the interviewer do well?"
            defaultValue={this.props.feedback.positive}
            onChange={this.update('positive')}
          />
          <textarea
            id='feedback-negative-input'
            placeholder="How can the interviewer improve?"
            defaultValue={this.props.feedback.negative}
            onChange={this.update('negative')}
          />
          <button
            className="feedback-buttton"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default FeedbackForm;