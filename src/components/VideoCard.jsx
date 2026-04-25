import React from 'react';

export default function VideoCard(props) {
  var video = props.video;
  
  if (!video.snippet) {
    return null;
  }

  var videoId = video.id;
  if (video.id.videoId) {
    videoId = video.id.videoId;
  }

  var title = video.snippet.title;
  var channelTitle = video.snippet.channelTitle;
  
  var thumbnail = "";
  if (video.snippet.thumbnails.high) {
    thumbnail = video.snippet.thumbnails.high.url;
  } else if (video.snippet.thumbnails.medium) {
    thumbnail = video.snippet.thumbnails.medium.url;
  }
  
  var dateString = new Date(video.snippet.publishedAt).toLocaleDateString();

  return (
    <div onClick={function() { props.onVideoSelect(video); }} className="video-card">
      <div className="thumbnail-container">
        <img src={thumbnail} alt={title} className="thumbnail" />
        <span className="video-duration">10:00</span>
      </div>

      <div className="video-info-container">
        <div className="channel-avatar"></div>
        
        <div className="video-text">
          <div className="video-title-row">
            <h3 className="video-title">{title}</h3>
            <button className="menu-btn">⋮</button>
          </div>
          
          <div className="channel-name-container">
            <span>{channelTitle}</span>
            <span style={{ fontSize: '10px', marginLeft: '4px' }}>✓</span>
          </div>
          
          <p className="video-stats">1.2M views • {dateString}</p>
        </div>
      </div>
    </div>
  );
}
