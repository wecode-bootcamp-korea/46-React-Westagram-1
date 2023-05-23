import React, { useState, useEffect } from 'react';
import ChatMinji from '../Chat/ChatMinji';
import ReCommend from '../ReCommend/ReCommend';
import Story from '../Story/Story';
import { TAG_LIST } from '../uiData/tag';
import './MainMinji.scss';

function MainMinji() {
  const [inputChat, setInputChat] = useState('');
  const [list, setList] = useState([]);
  const [btnStatus, setBtnStatus] = useState(true);
  const [disableBtn, setBtn] = useState('disableBtn');
  const [userInfoList, setUserInfoList] = useState([]);
  const [commentData, setCommentData] = useState([{}]);
  const mainCommentView = () => {
    alert('더 보기 클릭');
  };

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
        <nav className="navbar">
          {/* 네비게이션 내용 */}
          <div className="navbar-left">
            <img
              className="logo"
              src="images/minji/iconImg/instagram.png"
              alt="instagram_logo"
            />
            <p className="p-bold">|</p>{' '}
            <span className="lobster">Westagram</span>
          </div>
          <div className="navbar-middle">
            <div className="search-bar">
              <input id="input_search" type="search" placeholder="검색" />
              <ul className="user-search" id="user-ul">
                {/* <li className="userli" id="user1">
                  wecode10
                </li>
                <li className="userli" id="user2">
                  hwikl__i
                </li>
                <li className="userli" id="user3">
                  day_lu_
                </li> */}
              </ul>
            </div>
          </div>
          <div className="navbar-right">
            <img
              className="imgicons"
              src="images/minji/iconImg/explore.png"
              alt="explore"
            />
            <img
              className="imgicons"
              src="images/minji/iconImg/heart.png"
              alt="heart"
            />
            <img
              className="imgicons"
              src="images/minji/iconImg/profile.png"
              alt="profile"
            />
          </div>
        </nav>
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
                <div className="main-main" key={userinfo.id}>
                  <div className="main-feeds">
                    <div className="main-article-header">
                      <div className="article-inner">
                        <div className="article-inner-left">
                          <div className="inner">
                            <div className="inner">
                              <img
                                className="userimg"
                                src={`images/minji/userImg/${userinfo.name}.jpg`}
                                alt={userinfo.name}
                              />
                            </div>
                            <div className="inner">
                              <span className="bord-word">{userinfo.name}</span>
                            </div>
                          </div>
                        </div>
                        <div className="article-inner-right">
                          <img
                            className="imgicons"
                            src="images/minji/iconImg/dot.png"
                            alt="dotimg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="main-article-body">
                      <img
                        className="feedimg"
                        src={`images/minji/feedImg/${userinfo.id}.jpg`}
                        alt={`${userinfo.name}-feedimg`}
                      />
                    </div>
                    <div className="main-article-footer">
                      <div className="article-inner">
                        <div className="article-inner-left">
                          <div className="inner">
                            <div className="inner">
                              <img
                                className="logo"
                                src="images/minji/iconImg/heart.png"
                                alt="heart"
                              />
                              <img
                                className="logo"
                                src="images/minji/iconImg/chat.png"
                                alt="chat"
                              />
                              <img
                                className="logo"
                                src="images/minji/iconImg/share.png"
                                alt="share"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="article-inner-right">
                          <img
                            className="imgicons"
                            src="images/minji/iconImg/bookmarks.png"
                            alt="bookmarks"
                          />
                        </div>
                      </div>
                      <div className="footer-inner">
                        <div className="article-footer-header">
                          <div className="inner">
                            <img
                              className="userimg"
                              src={`images/minji/userImg/${userinfo.name}.jpg`}
                              alt={userinfo.name}
                            />
                            <span className="bord-word">aineworld</span> 님{' '}
                            <span className="bord-word">외 10명</span>이
                            좋아합니다.
                          </div>
                        </div>
                        <div className="article-footer-body">
                          <div className="article-inner-left">
                            <div className="word">
                              <span className="bord-word">{userinfo.name}</span>{' '}
                              오늘도 커피에 취한다 커피는 짱이다 맨날 먹고 싶다.
                              {comments.map(comment => {
                                return (
                                  <p className="p-bold" key={comment.commentId}>
                                    {comment.write}
                                    {'\n'}
                                    <span className="chatShow">
                                      {comment.content}
                                    </span>
                                  </p>
                                );
                              })}
                              {/* {
                                  list.map((chat, index) => (
                                    <p className="p-bold" key={index}>
                                      user{index + 1}
                                      <span className="chatShow"> {chat}</span>
                                    </p>
                                  ));
                                } */}
                            </div>
                            <span
                              className="addMainComent"
                              onClick={mainCommentView}
                            >
                              더 보기
                            </span>
                          </div>
                          {/* <div className="article-inner-right">
                      <button className="logobtn" id="heartBtn" type="button">
                            <img
                              className="likeimg"
                              id="nolike"
                              src="images/minji/heart.png"
                              alt="좋아요 하트"
                            />
                          </button>
                    </div> */}
                          <div className="feedTime">
                            <span className="gray-word">42분 전</span>
                          </div>
                        </div>

                        <ChatMinji
                          inputChat={inputChat}
                          setInputChat={setInputChat}
                          list={list}
                          setList={setList}
                          btnStatus={btnStatus}
                          setBtnStatus={setBtnStatus}
                          disableBtn={disableBtn}
                          setBtn={setBtn}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
