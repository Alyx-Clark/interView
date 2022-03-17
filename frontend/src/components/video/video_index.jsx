import React from 'react'
import VideoItem from './video_item'
import thumbnail1 from '../../thumbnails/thumbnail1.png'
import thumbnail2 from '../../thumbnails/thumbnail2.png'
import thumbnail3 from '../../thumbnails/thumbnail3.png'
import thumbnail4 from '../../thumbnails/thumbnail4.png'
import thumbnail5 from '../../thumbnails/thumbnail5.png'
import thumbnail6 from '../../thumbnails/thumbnail6.png'
import thumbnail7 from '../../thumbnails/thumbnail7.png'
import thumbnail8 from '../../thumbnails/thumbnail8.png'
import thumbnail9 from '../../thumbnails/thumbnail9.png'
import thumbnail10 from '../../thumbnails/thumbnail10.png'
import thumbnail11 from '../../thumbnails/thumbnail11.png'
import thumbnail12 from '../../thumbnails/thumbnail12.png'
import thumbnail13 from '../../thumbnails/thumbnail13.png'
import thumbnail14 from '../../thumbnails/thumbnail14.png'
import thumbnail15 from '../../thumbnails/thumbnail15.png'
import thumbnail16 from '../../thumbnails/thumbnail16.png'
import thumbnail17 from '../../thumbnails/thumbnail17.png'
import thumbnail18 from '../../thumbnails/thumbnail18.png'
import thumbnail19 from '../../thumbnails/thumbnail19.png'
import thumbnail20 from '../../thumbnails/thumbnail20.png'


class VideoIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllVideos();
    }



    render(){
        const pics = [
            thumbnail1,
            thumbnail2,
            thumbnail3,
            thumbnail4,
            thumbnail5,
            thumbnail6,
            thumbnail7,
            thumbnail8,
            thumbnail9,
            thumbnail10,
            thumbnail11,
            thumbnail12,
            thumbnail13,
            thumbnail14,
            thumbnail15,
            thumbnail16,
            thumbnail17,
            thumbnail18,
            thumbnail19,
            thumbnail20
        ]
        const questions = [
            "Tell me about yourself.", 
            "What is your greatest strength?", 
            "What is your greatest weakness?", 
            "Describe a time you handled a stressful situation.", 
            "Tell me about a time when you failed and how you overcame it."
        ]
        const { videos } = this.props;
        return(
            <div style={{marginTop: 200}}>
                <div>
                    <h2>{questions[0]}</h2>
                    <div>
                        {
                            videos.map((video, idx) => (
                                questions[0] === video.question ? 
                                <VideoItem key={idx} video={video} image={pics[idx]} /> : null
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2>{questions[1]}</h2>
                    <div>
                        {
                            videos.map((video, idx) => (
                                questions[1] === video.question ? 
                                <VideoItem key={idx} video={video} image={pics[idx]} /> : null
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2>{questions[2]}</h2>
                    <div>
                        {
                            videos.map((video, idx) => (
                                questions[2] === video.question ? 
                                <VideoItem key={idx} video={video} image={pics[idx]} /> : null
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2>{questions[3]}</h2>
                    <div>
                        {
                            videos.map((video, idx) => (
                                questions[3] === video.question ? 
                                <VideoItem key={idx} video={video} image={pics[idx]} /> : null
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2>{questions[4]}</h2>
                    <div>
                        {
                            videos.map((video, idx) => (
                                questions[4] === video.question ? 
                                <VideoItem key={idx} video={video} image={pics[idx]} /> : null
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default VideoIndex;