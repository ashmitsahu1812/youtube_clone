import React from 'react';

export default function VideoPlayer({ video }) {
  if (!video) return null;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-player-container">
      <div className="video-player">
        <iframe
          title="Video Player"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-details">
        <h2 className="video-title">{video.snippet.title}</h2>
        <p className="video-channel">{video.snippet.channelTitle}</p>
        <p className="video-description">{video.snippet.description}</p>
      </div>
    </div>
  );
}
