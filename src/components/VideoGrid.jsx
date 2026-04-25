import React from 'react';
import VideoCard from './VideoCard';

export default function VideoGrid(props) {
  if (!props.videos || props.videos.length === 0) {
    return <div className="empty-state">No videos found.</div>;
  }

  return (
    <div className="video-grid">
      {props.videos.map(function(vid, index) {
        return (
          <VideoCard 
            key={index} 
            video={vid} 
            onVideoSelect={props.onVideoSelect} 
          />
        );
      })}
    </div>
  );
}
