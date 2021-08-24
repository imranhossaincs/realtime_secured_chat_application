import React from 'react';
import closeIcon from '../../icons/closeIcon';
import onlineIcon from '../../icons/onlineIcon';
import './InfoBar.css';
const InfoBar = () => {
  return (
    <div className="InfoBar">
      <div className="leftInnnerContainer">
        <img className="onlineIcon" src={onlineIcon} />
        <h1>RoomName</h1>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img scr={closeIcon} alt="close image" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
