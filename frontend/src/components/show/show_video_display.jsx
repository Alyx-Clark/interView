import React from 'react'

export default function show_video_display(props) {
    // debugger
    return (
    <div className='playing-video'>
            <video src={`/api/videos/stream/${props.video.file}`} controls autoPlay muted></video>
    </div>
  )
}
