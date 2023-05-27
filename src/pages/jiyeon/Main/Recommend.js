import React from 'react';

const Recommend = props => {
  return (
    <div className="personalInform">
      <img src={props.recommend.profileImg} alt="profilePhoto" />
      <div className="storyRecommend">
        <span className="bold">{props.recommend.name}</span>
        <br />
        <span className="grey">ioaaaaa 님 외 {props.recommend.num}명이...</span>
      </div>
      <button>팔로우</button>
    </div>
  );
};

export default Recommend;
