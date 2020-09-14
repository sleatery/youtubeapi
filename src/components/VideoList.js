import React from 'react';
import VideoItem from './VideoItem';

const VideoList  = props => {
       const renderlist = props.listvideone.map(video => {
               return     <VideoItem 
                              key={video.id.videoId}
                              onVideoSelect={props.onVideoSelect} 
                              video={video}/>;
});

    return <div className="ui relaxed divided list"> {renderlist} </div>

};

export default VideoList;