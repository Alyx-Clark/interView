import React from 'react';
import ShowFeedbackIndexItem from './show_feedbacks_item';

class VideoShow extends React.Component {

  componentDidMount() {
    this.props.fetchVideoFeedbacks('622fee0353e5b6c175fd7611')
  }

  render() {
    if (this.props.feedbacks === {}) return null;
    // debugger
    return (
      <div className='feedbacks-container'>
        {(Object.keys(this.props.feedbacks)).map(key => (
          <ShowFeedbackIndexItem
            positive={this.props.feedbacks[key].positive}
            negative={this.props.feedbacks[key].negative}
            feedbackerId={this.props.feedbacks[key].user}
            feedbackId={this.props.feedbacks[key]._id}
            videoId={this.props.feedbacks[key].video}
            date={this.props.feedbacks[key].date}
            key={this.props.feedbacks[key]._id}
            deleteVideoFeedbacks={this.props.deleteVideoFeedbacks}
            currentUser={this.props.currentUser}
          />
        ))}
      </div>
    )
  }
}

export default VideoShow;