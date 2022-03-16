import React from "react";
import moment from "moment";

class ShowFeedbackIndexItem extends React.Component {

  constructor(props) {
    super(props)

    this.renderOptionButtons = this.renderOptionButtons.bind(this);
  }

  renderOptionButtons() {
    if (this.props.currentUser.id === this.props.feedbackerId) {
      return (
        <div className="feedback-buttons">
          <button className="feedback-delete"
            onClick={() => this.props.deleteVideoFeedbacks(this.props.feedbackId)}>
            Delete
          </button>
          <button className="feedback-edit">Edit</button>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="feedback">

        <p className="feedbacker-full-name">{this.props.feedbackerFullName}</p>

        <div className={`positive-container ${this.props.positiveShow}`}>
          <p className="feedback-positive">{this.props.positive}</p>
          <p className="feedback-date">Feedback on {moment(this.props.date).format('MMMM Do YYYY')}</p>
          {this.renderOptionButtons()}
        </div>

        <div className={`negative-container ${this.props.negativeShow}`}>
          <p className="feedback-negative">{this.props.negative}</p>
          <p className="feedback-date">Feedback on{moment(this.props.date).format('MMMM Do YYYY')}</p>
          {this.renderOptionButtons()}
        </div>

      </div>
    )
  }
}

export default ShowFeedbackIndexItem;