import React from 'react';

export default function VideoGrid({ videos, onVideoSelect }) {
  if (!videos || videos.length === 0) {
    return <div className="video-grid-empty">No videos found.</div>;
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div 
          key={video.id.videoId} 
          className="video-card"
          onClick={() => onVideoSelect(video)}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.title} 
            className="video-thumbnail"
          />
          <div className="video-info">
            <h4 className="video-title">{video.snippet.title}</h4>
            <p className="video-channel">{video.snippet.channelTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
