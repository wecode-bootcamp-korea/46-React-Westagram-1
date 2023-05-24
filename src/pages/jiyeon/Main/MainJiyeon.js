import React, { useEffect, useState } from 'react';

import './MainJiyeon.scss';
import FeedContents from './feed';

const MainJiyeon = () => {
  const [data, setData] = useState([]);
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setData(result));

    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
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

        {feedData.map(function (feedData) {
          return (
            <div key={feedData.id}>
              <FeedContents feedData={feedData} />
            </div>
          );
        })}
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

            <div className="personalInform">
              <img
                src="/images/jiyeon/KakaoTalk_20230509_143849516.jpg"
                alt="profilePhoto"
              />

              <div className="storyRecommend">
                <span className="bold">_yum_s</span>
                <br />
                <span className="grey">12분 전</span>
              </div>
            </div>

            <div className="personalInform">
              <img
                src="/images/jiyeon/KakaoTalk_20230509_143849516_01.jpg"
                alt="profilePhoto"
              />
              <div className="storyRecommend">
                <span className="bold">drink_eat_dring</span>
                <br />
                <span className="grey">1시간 전</span>
              </div>
            </div>
            <div className="personalInform">
              <img
                src="/images/jiyeon/KakaoTalk_20230509_143849516_02.jpg"
                alt="profilePhoto"
              />
              <div className="storyRecommend">
                <span className="bold">hyukyc</span>
                <br />
                <span className="grey">5시간 전</span>
              </div>
            </div>
            <div className="personalInform">
              <img
                src="/images/jiyeon/KakaoTalk_20230509_143849516_03.jpg"
                alt="profilePhoto"
              />
              <div className="storyRecommend">
                <span className="bold">jminkeek</span>
                <br />
                <span className="grey">16시간 전</span>
              </div>
            </div>
          </div>

          <div className="rightLower">
            <div className="rightTopMenu">
              <span className="grey">회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>

            <div className="personalInform">
              <img
                src="/images/jiyeon/KakaoTalk_20230509_143849516_04.jpg"
                alt="profilePhoto"
              />

              <div className="storyRecommend">
                <span className="bold">ioaaaaa</span>
                <br />
                <span className="grey">ioaaaaa 님 외 2명이...</span>
              </div>
              <button>팔로우</button>
            </div>

            <div className="personalInform">
              <img
                src="/images/jiyeon/KakaoTalk_20230509_143849516.jpg"
                alt="profilePhoto"
              />
              <div className="storyRecommend">
                <span className="bold">jedlsi</span>
                <br />
                <span className="grey">ioaaaaa 님 외 2명이...</span>
              </div>
              <button>팔로우</button>
            </div>
            <div className="personalInform">
              <img
                src="/images/jiyeon/KakaoTalk_20230509_143849516_01.jpg"
                alt="profilePhoto"
              />
              <div className="storyRecommend">
                <span className="bold">ellda</span>
                <br />
                <span className="grey">ioaaaaa 님 외 2명이...</span>
              </div>
              <button>팔로우</button>
            </div>
          </div>

          <div className="grey westagramInform">
            {data.map(data => {
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
