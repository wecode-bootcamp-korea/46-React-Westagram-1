import React, { useEffect, useState } from 'react';
import Story from './Story';
import FeedContents from './Feed';
import Recommend from './Recommend';

import './MainJiyeon.scss';

const MainJiyeon = () => {
  const [westaData, setWestaData] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [recommendData, setRecommendData] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setWestaData(result));

    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(result => setFeedData(result));

    fetch('/data/storyData.json')
      .then(response => response.json())
      .then(result => setStoryData(result));

    fetch('/data/Recommend.json')
      .then(response => response.json())
      .then(result => setRecommendData(result));
  }, []);

  return (
    <div className="wrapMain">
      <div className="navBottomLine">
        <nav className="navBar">
          <div className="navLeft">
            <img src="/images/jiyeon/Nav/instagram.png" alt="home" />
            <div className="line"></div>
            <h1 className="mainH1">Westagram</h1>
          </div>
          <input className="search" type="text" placeholder="검색" />
          <ul className="searchedID"></ul>
          <div className="navRight">
            <img src="/images/jiyeon/explore.png" alt="explore" />
            <img src="/images/jiyeon/heart.png" alt="heart" />
            <img
              className="profile"
              src="/images/jiyeon/profile.png"
              alt="profile"
            />
          </div>
        </nav>

        <div className="profileBox displayNone">
          <div className="profileBoxTail"></div>
          <div className="profileBoxInnerBox">
            <img
              src="/images/jiyeon/account_circle_FILL0_wght400_GRAD0_opsz48.png"
              alt="profile"
            />
            <span className="profileBoxText">프로필</span>
          </div>
          <div className="profileBoxInnerBox">
            <img
              src="/images/jiyeon/bookmark_FILL0_wght400_GRAD0_opsz48.png"
              alt="bookmark"
            />
            <span className="profileBoxText">저장됨</span>
          </div>
          <div className="profileBoxInnerBox">
            <img
              src="/images/jiyeon/settings_FILL0_wght400_GRAD0_opsz48.png"
              alt="setting"
            />
            <span className="profileBoxText">설정</span>
          </div>
          <div className="profileBoxInnerBox">
            <span className="profileBoxText">로그아웃</span>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="feeds"></div>
        <div className="feedBox">
          {feedData.map(function (feed) {
            return (
              <div key={feed.id}>
                <FeedContents feedData={feed} />
              </div>
            );
          })}
        </div>
        <div className="mainRight">
          <div className="top">
            <img
              className="likeProfile"
              src="/images/jiyeon/KakaoTalk_20230508_214810406.jpg"
              alt="likeProfile"
            />

            <span className="bold">paw_paw</span>
            <br />
            <span className="grey">paw | paw</span>
          </div>

          <div className="rightUpper">
            <div className="rightTopMenu">
              <span className="grey">스토리</span>
              <span>모두 보기</span>
            </div>

            {storyData.map(function (story) {
              return <Story storyData={story} key={story.id} />;
            })}
          </div>

          <div className="rightLower">
            <div className="rightTopMenu">
              <span className="grey">회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            {recommendData.map(function (recommend) {
              return <Recommend recommend={recommend} key={recommend.id} />;
            })}
          </div>

          <div className="grey westagramInform">
            {westaData.map(data => {
              return `${data.name} ・ `;
            })}
            <br />
            <br />ⓒ 2019 WESTAGRAM
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainJiyeon;
