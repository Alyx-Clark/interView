import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';

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
      this.props.history.push(`/videos/${this.props.match.params.videoId}`)
    }
  }

  update(field) {
    return e => this.props.feedback[field] = e.currentTarget.value;
  }

  render() {
    return (
      <div className='feedback-form-wrapper'>
        <div className="create-feedback-input-container">
          <input
            id='feedback-positive-input'
            placeholder="What did the interviewer do well?"
            defaultValue={this.props.feedback.positive}
            onChange={this.update('positive')}
          />
          <input
            id='feedback-negative-input'
            placeholder="How can the interviewer improve?"
            defaultValue={this.props.feedback.negative}
            onChange={this.update('negative')}
          />
        </div>
          <button
            className="feedback-submit-buttton"
            onClick={this.handleSubmit}>
            Give your feedbacks!
          </button>
      </div>
    )
  }
}

export default FeedbackForm;