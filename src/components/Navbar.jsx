import React, { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    if (query) onSearch(query);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="icon-btn">☰</button>
        <a href="/" className="logo-link">▷ YouTube</a>
      </div>

      <div className="nav-center">
        <form className="search-container" onSubmit={submitSearch}>
          <input 
            className="search-input"
            placeholder="Search" 
            value={query}
            onChange={function(e) { setQuery(e.target.value); }}
          />
          <button className="search-btn">⌕</button>
        </form>
        <button type="button" className="mic-btn">🎙</button>
      </div>

      <div className="nav-right">
        <button className="create-btn">＋ Create</button>
        <button className="icon-btn">⍾</button>
        <div className="avatar">A</div>
      </div>
    </nav>
  );
}
