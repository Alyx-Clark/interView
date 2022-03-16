import React from 'react';
import ShowFeedbackIndexItem from './show_feedbacks_item';

class VideoShow extends React.Component {

  componentDidMount() {
    this.props.fetchVideoFeedbacks('622fee0353e5b6c175fd7611')
  }

  render() {
    var positiveShow = 'unshow';
    var negativeShow = 'unshow';

    const showPositive = () => {
      positiveShow = 'show';
      negativeShow = 'unshow'
  }

    const showNegative = () => {
      negativeShow = 'show'; 
      positiveShow = 'unshow'
    }

    if (this.props.feedbacks === {}) return null;
    return (
      <div className='feedbacks-container'>
        <div className='feedback-class'>
          <button className="positive-title" onClick={showPositive}>YOU DID GREAT!</button>
          <button className='negative-title' onClick={showNegative}>STILL NEED TO IMPROVE</button>
        </div>
        
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
            positiveShow={positiveShow}
            negativeShow={negativeShow}
          />
        ))}
      </div>
    )
  }
}

export default VideoShow;