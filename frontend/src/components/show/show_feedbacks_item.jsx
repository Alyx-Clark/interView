import React from "react";
import moment from "moment";

class ShowFeedbackIndexItem extends React.Component {

  constructor(props) {
    super(props)

    this.renderOptionButtons = this.renderOptionButtons.bind(this);
  }

  handleEditClick() {
    if (!this.props.history.location.pathname.includes('edit')) {
      if (this.props.history.location.pathname.slice(-1) === '/') {
        this.props.history.push(`${this.props.history.location.pathname}edit/${this.props.feedbackId}`)
      } else {
        this.props.history.push(`${this.props.history.location.pathname}/edit/${this.props.feedbackId}`)
      }
    }
  }

  renderOptionButtons() {
    if (this.props.currentUser.id === this.props.feedbackerId) {
      return (
        <div className="feedback-buttons">
          <button className="feedback-delete"
            onClick={() => this.props.deleteVideoFeedbacks(this.props.feedbackId)}>
            Delete
          </button>
          <button className="feedback-edit"
          onClick={() => this.handleEditClick()}>
            Edit
          </button>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    const randomColors = ['#FFE4E1', '#FFA07A', '#F5DEB3', '#8FBC8F', '#B0C4DE', '#87CEEB', '#D8BFD8']
    return (
      <div className="feedback">

        <div className="initial-profile">
          <button style={{ backgroundColor: randomColors[Math.floor(Math.random() * randomColors.length)]}}>{this.props.feedbackerFullName[0].toUpperCase()}</button>
        </div>

        <div className={`feedback-items-container ${this.props.positiveShow}`}>
          <p className="feedbacker-full-name">{this.props.feedbackerFullName}</p>
          <p className="feedback-date">Feedback on {moment(this.props.date).format('MMMM Do YYYY')}</p>
          <br/>
          <p className="feedback-positive">{this.props.positive}</p>
        </div>

        <div className={`feedback-items-container ${this.props.negativeShow}`}>
          <p className="feedbacker-full-name">{this.props.feedbackerFullName}</p>
          <p className="feedback-date">Feedback on {moment(this.props.date).format('MMMM Do YYYY')}</p>
          <br/>
          <p className="feedback-negative">{this.props.negative}</p>
        </div>

        <div className='feedback-button-wrapper'>
          <div className={` ${this.props.positiveShow}`}>
            {this.renderOptionButtons()}
          </div>
        </div>
        
        <div className="feedback-button-wrapper">
          <div className={`${this.props.negativeShow}`}>
            {this.renderOptionButtons()}
          </div>
        </div>

      </div>
    )
  }
}

export default ShowFeedbackIndexItem;