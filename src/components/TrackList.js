import React, {useState, useEffect, useContext} from 'react';
import data from './tracks.json';
import MusicContext from '../context/MusicContext';

const TrackList = ({currentTrackIndex}) => {
  const selectTrackNumber = useContext(MusicContext);
  const [tracks, setTracks] = useState([]);
  const [tracksList, setTracksList] = useState('');
  const [activeTrack, setActiveTrack] = useState('');

  const componentDidUpdate = (activeTrack) => {
    let topOfTrackList = tracksList.scrollTop;
    let bottomOfTrackList = tracksList.scrollTop + tracksList.clientHeight;
    let positionOfSelected = activeTrack.offsetTop;
    if (
      topOfTrackList > positionOfSelected ||
      bottomOfTrackList < positionOfSelected
    ) {
      tracksList.scrollTop = positionOfSelected;
    }
  };

  let dataTrack = [];
  dataTrack = data.tracks;

  useEffect(() => {
    setTracks(dataTrack);
    componentDidUpdate(activeTrack);
  }, [activeTrack]);

  const renderListItem = (tracks) => {
    let trackClass = currentTrackIndex === tracks.id
      ? "selected"
      : "";
    return (
      <li
        key={tracks.id}
        className={trackClass}
        ref={cur => {
          if (currentTrackIndex === tracks.id) {
            setActiveTrack(cur);
          }
        }}
        onClick={()=>{selectTrackNumber(tracks.id)}}
      >
        <div className="number">{tracks.id}</div>
        <div className="title">{tracks.title}</div>
        <div className="duration">{tracks.duration}</div>
      </li>
    );
  };

  let trackks = tracks.map(renderListItem);
  return (
    <ul className="TrackList" ref={input => setTracksList(input)}>
      {trackks}
    </ul>
  );
};

export default TrackList;
