import React from 'react'

class ShowVideoDisplay extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(prevProp){
    this.props.fetchVideo(this.props.videoId)
    // debugger
  }
  
  // componentDidUpdate(prevProp) {
  //   debugger
  //   if(this.props.match.params.videoId !== prevProp.match.params.videoId){
  //      this.props.fetchVideo(this.props.match.params.videoId);
  //   }
  //   debugger
  // }


  render(){
    const { video } = this.props;
    // debugger
    return(
      <div className='playing-video'>
        {
          video ? <video src={`/api/videos/stream/${video.file}`} controls autoPlay></video> : null
        }
      </div>
    )
  }
}

export default ShowVideoDisplay;