import React from 'react';

import './MainJiyeon.scss';

const Story = props => {
  return (
    <div className="personalInform">
      <img src={props.storyData.profileImg} alt="profilePhoto" />
      <div className="storyRecommend">
        <span className="bold">{props.storyData.name}</span>
        <br />
        <span className="grey">{props.storyData.when}</span>
      </div>
    </div>
  );
};

export default Story;
