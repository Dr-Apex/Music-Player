import React, { useContext } from 'react';
import MusicContext from '../context/MusicContext';

const Controls = ({playing}) => {
  const handleClick = useContext(MusicContext);

  return (
    <div className="Controls">
      <i
        id="prev"
        className="fa fa-fw fa-fast-backward"
        onClick={(e) => handleClick(e.target.id)}
      />
      {!playing &&
        <i
          id="play"
          onClick={(e) => handleClick(e.target.id)}
          className="fa fa-fw fa-play"
        />}
      {playing &&
        <i
          id="pause"
          onClick={(e) => handleClick(e.target.id)}
          className="fa fa-fw fa-pause"
        />}
      <i
        id="next"
        className="fa fa-fw fa-fast-forward"
        onClick={(e) => handleClick(e.target.id)}
      />
    </div>
  );
};

export default Controls;
