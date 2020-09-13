import React, { useState } from 'react';
import data from './tracks.json';
import { Link } from 'react-router-dom';
import { MusicProvider } from '../context/MusicContext.js';
import Controls from './Controls';
import TrackList from './TrackList';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audioElement, setAudioElement] = useState('');

  const playAudio = async() => {
    await audioElement.load();
    audioElement.play();
  };
  const pauseAudio = () => {
    audioElement.pause();
  }
  const selectTrackNumber = (trackId) => {
    setCurrentTrackIndex(trackId);
    setPlaying(true);
    playAudio();
  }
  const handleClick = (type) => {
    switch (type) {
      case "play":
        if (currentTrackIndex === 0) {
          setCurrentTrackIndex(1);
        }
        setPlaying(true);
        setCurrentTrackIndex(currentTrackIndex);
        playAudio();
        break;
      case "pause":
        setPlaying(false);
        pauseAudio();
        break;
      case "prev":
        let currentIndex = currentTrackIndex - 1;
        if (currentIndex <= 0) {
          setPlaying(null);
          setCurrentTrackIndex(null);
        } else {
          setPlaying(true);
          setCurrentTrackIndex(currentIndex);
        }
        playAudio();
        break;
      case "next":
        let recentIndex = currentTrackIndex + 1;
        if (recentIndex > data.tracks.length) {
          setPlaying(null);
          setCurrentTrackIndex(null);
        } else {
          setPlaying(true);
          setCurrentTrackIndex(recentIndex);
        }
        playAudio();
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Link to={`/music/playlist`} className="btn">|||</Link>
      <div className="Artwork" style={{ backgroundImage: "url(logo192.png)" }}>
        <audio ref={(audio) => setAudioElement(audio)} src={"/songs/"+currentTrackIndex+".mp3"}/>
        <MusicProvider value={handleClick}>
          <Controls playing={playing} />
        </MusicProvider>
      </div>
      <MusicProvider value={selectTrackNumber}>
        <TrackList currentTrackIndex={currentTrackIndex} />
      </MusicProvider>
    </div>
  );
};

export default MusicPlayer;
