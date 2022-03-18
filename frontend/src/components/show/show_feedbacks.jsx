import React from 'react';
import ShowFeedbackIndexItem from './show_feedbacks_item';
import CreateFeedbackFormContainer from './create_feedback_form_container';
import EditFeedbackFormContainer from './edit_feedback_form_container.js';
import { Switch, Route } from 'react-router-dom';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveShow: true, 
      negativeShow: false
    }
  }

  positiveSwitch(){
    this.setState({ positiveShow: true });
    this.setState({ negativeShow: false });
  }

  negativeSwitch(){
    this.setState({ negativeShow: true});
    this.setState({ positiveShow: false })
  }

  componentDidMount() {
    this.props.fetchVideoFeedbacks(this.props.videoId)
  }

  render() {
    let positiveShow = this.state.positiveShow ? "show" : "unshow";
    let negativeShow = this.state.negativeShow ? "show" : "unshow";
    let positiveStyle = this.state.positiveShow ? "rgb(50, 130, 100)" : "gray"; 
    let negativeStyle = this.state.negativeShow ? "rgb(50, 130, 100)" : "gray"; 
    let positiveBorder = this.state.positiveShow ? "solid 3px rgb(50, 130, 100)" : "none"; 
    let negativeBorder = this.state.negativeShow ? "solid 3px rgb(50, 130, 100)" : "none"; 

    if (this.props.feedbacks === {}) return null;
    return (
      <div className='feedbacks-container'>
        <div className='feedback-class'>
          <button className="positive-title" style={{borderBottom: positiveBorder, color: positiveStyle}} onClick={this.positiveSwitch.bind(this)}>YOU DID GREAT ON THESE</button>
          <button className='negative-title' style={{borderBottom: negativeBorder, color: negativeStyle }} onClick={this.negativeSwitch.bind(this)}>STILL NEED TO IMPROVE</button>
        </div>

        <div>
              <CreateFeedbackFormContainer videoId={this.props.videoId} />
        </div>

        <div className='feedback-index-item-container'>
          {(Object.keys(this.props.feedbacks)).map(key => (
            <ShowFeedbackIndexItem
              positive={this.props.feedbacks[key].positive}
              negative={this.props.feedbacks[key].negative}
              feedbackerId={this.props.feedbacks[key].userId}
              feedbackerFullName={this.props.feedbacks[key].userFullName}
              feedbackId={this.props.feedbacks[key]._id}
              videoId={this.props.feedbacks[key].video}
              date={this.props.feedbacks[key].date}
              key={this.props.feedbacks[key]._id}
              deleteVideoFeedbacks={this.props.deleteVideoFeedbacks}
              currentUser={this.props.currentUser}
              positiveShow={positiveShow}
              negativeShow={negativeShow}
              history={this.props.history}
            />
          ))}
          <Switch>
            <Route path="/videos/:videoId/edit/:feedbackId" component={EditFeedbackFormContainer} history={this.props.history} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default VideoShow;