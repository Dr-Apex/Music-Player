import React from 'react';
import data from './tracks.json';
import './PlayList.css';
import history from '../history';


const PlayList = () => {
  let tracks = [];
  tracks = data.tracks;

  const renderListItem = (tracks) => {
    return (
      <li
        key={tracks.id}
      >
        <div className="number">{tracks.id}</div>
        <div className="title">{tracks.title}</div>
        <div className="duration">{tracks.duration}</div>
      </li>
    );
  };

  let trackks = tracks.map(renderListItem);
  return (
    <div className="list">
      <div
        style={{ marginTop: "9px", fontSize: "18px", cursor: "pointer", display: "inline-block" }}
        onClick={() => history.push('/')}>|||</div>
      <div style={{ fontSize: "35px", float: "right", marginRight: "85px" }}>Playlist</div>
      <ul className="PlayList">
        {trackks}
      </ul>
    </div>
  );
};

export default PlayList;
