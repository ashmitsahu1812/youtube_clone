import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import CategoryPills from './components/CategoryPills';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

export default function App() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react tutorial'); 
  const [category, setCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(function() {
    getVideos();
  }, [searchQuery, category]);

  async function getVideos() {
    let q = searchQuery;
    if (q === '' && category !== 'All') {
      q = category;
    } else if (q === '' && category === 'All') {
      q = 'popular';
    }

    const key = import.meta.env.VITE_YOUTUBE_API_KEY;
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=" + q + "&type=video&key=" + key;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.items) {
        setVideos(data.items);
      } else {
        setVideos([]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleSearch(q) {
    setSearchQuery(q);
    setCategory('All');
    setSelectedVideo(null);
  }

  function handleHomeClick() {
    setSelectedVideo(null);
  }

  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} />
      
      <div className="main-content">
        <Sidebar onHomeClick={handleHomeClick} />
        
        <div className="feed-container">
          
          {selectedVideo === null ? (
            <CategoryPills 
              selectedCategory={category} 
              onSelectCategory={function(c) { 
                setCategory(c); 
                setSearchQuery(''); 
                setSelectedVideo(null); 
              }} 
            />
          ) : null}

          <main className="feed">
            {selectedVideo !== null ? (
              <VideoPlayer video={selectedVideo} />
            ) : (
              <VideoGrid videos={videos} onVideoSelect={function(vid) { 
                setSelectedVideo(vid); 
              }} />
            )}
          </main>
          
        </div>
      </div>
    </div>
  );
}
