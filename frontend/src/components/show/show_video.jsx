import React from 'react';
import ShowFeedbacksContainer from './show_feedbacks_container';
import ShowRubricsContainer from './show_rubrics_container';
import RubricFormContainer from './show_rubric_form_container';
import ShowVideoDisplay from './show_video_display';

import VideoItem from '../video/video_item'
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

class VideoShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

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

        const { videos } = this.props;

        return (
            <div className='show-video-background'>
                <div className='mainbox'>
                    <div className='playing-video-container'>
                        <ShowVideoDisplay video={this.props.video} />
                        <ShowFeedbacksContainer videoId={this.props.videoId} history={this.props.history}/>
                    </div>
                    <div className='sidebar'>
                        <ShowRubricsContainer videoId={this.props.videoId} />
                        <RubricFormContainer videoId={this.props.videoId} />
                        <br className='checkout-other'/>
                        <div className='other-videos-container'>
                            <div className='other-thumbnails-container'>
                            {
                                videos.map((video, idx) => (
                                    <VideoItem key={idx} video={video} image={pics[idx]} />
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoShowPage;