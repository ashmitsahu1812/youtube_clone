# YouTube Clone

A fully responsive, modern YouTube clone built with React, Vite, and the YouTube Data API v3. This project features video searching, category filtering, and a sleek dark-themed UI that mimics the real YouTube experience.

## 🚀 Live Demo
Check out the live application here: [YouTube Clone on Vercel](https://youtube-clone-virid-iota.vercel.app/)

## ✨ Features
- **Video Search**: Search for any video using the YouTube search bar.
- **Category Filtering**: Quickly filter videos using category pills (All, React, Music, Gaming, etc.).
- **Video Player**: Integrated YouTube player for a seamless viewing experience.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Dark Mode UI**: Clean and premium dark interface.
- **Real-time Data**: Fetches real video data directly from the YouTube Data API v3.

## 🛠️ Tech Stack
- **Frontend**: React (v19)
- **Bundler**: Vite
- **Styling**: Vanilla CSS
- **API**: YouTube Data API v3

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ashmitsahu1812/youtube_clone.git
   cd youtube_clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your YouTube API Key:
   ```env
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 🔑 Environment Variables
This project requires a YouTube Data API v3 key. You can obtain one from the [Google Cloud Console](https://console.cloud.google.com/).

| Variable | Description |
|----------|-------------|
| `VITE_YOUTUBE_API_KEY` | Your YouTube Data API v3 key |

## 📁 Project Structure
```
yt-clone/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Sidebar, etc.)
│   ├── assets/           # Static assets
│   ├── App.jsx           # Main application logic
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Public assets
├── index.html            # HTML template
└── vite.config.js        # Vite configuration
```

## 📄 License
This project is for educational purposes. Feel free to use and modify it!
