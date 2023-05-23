import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import Feed from '../Feed/Feed';
import ReCommend from '../ReCommend/ReCommend';
import Story from '../Story/Story';
import { TAG_LIST } from '../uiData/tag';
import './MainMinji.scss';

function MainMinji() {
  const [userInfoList, setUserInfoList] = useState([]);
  const [commentData, setCommentData] = useState([{}]);

  useEffect(() => {
    fetch('/data/minji/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
    fetch('/data/minji/comment.json')
      .then(response => response.json())
      .then(result => setCommentData(result));
  }, []);
  return (
    <div className="page-main">
      <div className="body-top">
        {/* 네비게이션 컨포넌트 */}
        <Nav />
      </div>
      <div className="body-bottom">
        {/* 메인 콘텐츠 내용 */}
        <main className="main-minji">
          <div>
            {userInfoList.map(userinfo => {
              const comments = commentData.filter(
                comment => comment.feedId === userinfo.id
              );
              return (
                <div key={userinfo.id}>
                  <Feed comments={comments} userinfo={userinfo} />
                </div>
              );
            })}
          </div>
          <div />
          {/* main 우측 컨텐츠 */}
          <div className="main-right">
            <div className="right-header">
              <div className="inner">
                <div className="inner">
                  <img
                    className="logoimg"
                    src="images/minji/wecodelogo.jpeg"
                    alt="wecodelogo"
                  />
                </div>
                <div className="inner-div">
                  <div className="inner-top">
                    <span className="bord-word">wecode_bootcamp</span>
                  </div>
                  <div className="inner-top">
                    <span className="gray-word">WeCode | 위코드</span>
                  </div>
                </div>
              </div>
              <div className="right-body">
                <div className="main-article-header">
                  <div className="article-inner">
                    <div className="article-inner-left">
                      <span className="gray-word">스토리</span>
                    </div>
                    <div className="article-inner-right">
                      <span className="bord-word">모두 보기</span>
                    </div>
                  </div>
                </div>
                {/* 스토리 컴포넌트 */}
                <Story />
              </div>
              <div className="right-footer">
                <div className="main-article-header">
                  <div className="article-inner">
                    <div className="article-inner-left">
                      <span className="gray-word">회원님을 위한 추천</span>
                    </div>
                    <div className="article-inner-right">
                      <span className="bord-word">모두 보기</span>
                    </div>
                  </div>
                </div>
                {/* 회원 추천 컴포넌트 */}
                <ReCommend />
              </div>
              <div className="tag-area">
                <br />
                <span className="gray-word">
                  <ul className="tag-ul">
                    {TAG_LIST.map(tagList => {
                      return (
                        <li className="tag-li" key={tagList.id}>
                          {tagList.tagName}
                        </li>
                      );
                    })}
                  </ul>
                </span>
              </div>
              <div>
                <span className="gray-word">@ 2019 INSTAGRAM</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainMinji;
