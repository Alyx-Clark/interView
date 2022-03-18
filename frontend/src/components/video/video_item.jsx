import React from 'react';
import { Link } from 'react-router-dom'

class VideoItem extends React.Component{
    constructor(props){
        super(props)

    }


    render(){
        const { video, image } = this.props;
    

        return(
            <div className='vi-img-container'>
                <Link to={`/videos/${video._id}`}><img src={image} className='vi-img' /></Link>
                {/* {video.industry} */}
                {/* <video src={`/api/videos/stream/${video.file}`} controls></video> */}
            </div>
        )
    }
}


export default VideoItem;