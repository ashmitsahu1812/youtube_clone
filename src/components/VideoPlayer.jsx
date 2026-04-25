import React from 'react';

export default function VideoPlayer(props) {
  var video = props.video;

  if (!video || !video.snippet) {
    return null;
  }

  var videoId = video.id;
  if (video.id.videoId) {
    videoId = video.id.videoId;
  }

  var title = video.snippet.title;
  var channelTitle = video.snippet.channelTitle;
  var description = video.snippet.description;
  var dateStr = new Date(video.snippet.publishedAt).toLocaleDateString();

  var embedUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

  return (
    <div className="video-player-container">
      <div className="iframe-container">
        <iframe
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-player-info">
        <h2 className="player-title">{title}</h2>
        <div className="player-channel">
          <div className="channel-avatar"></div>
          <span className="channel-name">{channelTitle}</span>
          <span style={{ fontSize: '12px', marginLeft: '4px' }}>✓</span>
        </div>
        <div className="player-description">
          <p>1.2M views • {dateStr}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
