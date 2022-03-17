import React from 'react';
import { Link } from 'react-router-dom'

class VideoItem extends React.Component{
    constructor(props){
        super(props)

    }


    render(){
        const { video, image } = this.props;
        // debugger

        return(
            <div>
                <Link to={`/videos/${video._id}`}><img src={image} /></Link>
                {/* {video.industry} */}
            </div>
        )
    }
}


export default VideoItem;