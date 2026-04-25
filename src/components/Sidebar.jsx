import React from 'react';

export default function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-link active" onClick={props.onHomeClick} style={{cursor: 'pointer'}}>
          <div className="sidebar-icon">⌂</div>
          Home
        </div>
        <div className="sidebar-link">
          <div className="sidebar-icon">🗲</div>
          Shorts
        </div>
      </div>
      
      <div className="sidebar-divider"></div>
      
      <div className="sidebar-section">
        <h3 className="sidebar-heading">You</h3>
        <div className="sidebar-link">
          <div className="sidebar-icon">웃</div>
          Your channel
        </div>
        <div className="sidebar-link">
          <div className="sidebar-icon">◷</div>
          History
        </div>
        <div className="sidebar-link">
          <div className="sidebar-icon">♥️</div>
          Liked videos
        </div>
      </div>
    </aside>
  );
}
