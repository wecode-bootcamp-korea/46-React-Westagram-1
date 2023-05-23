import React, { useState } from 'react';
import ChatMinji from '../Chat/ChatMinji';
import './Feed.scss';

const Feed = ({ comments, userinfo }) => {
  const [inputChat, setInputChat] = useState('');
  const [list, setList] = useState([]);
  const [btnStatus, setBtnStatus] = useState(true);
  const [disableBtn, setBtn] = useState('disableBtn');
  return (
    <div className="feed">
      <div className="main-main">
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
                  <span className="bord-word">외 10명</span>이 좋아합니다.
                </div>
              </div>
              <div className="article-footer-body">
                <div className="article-inner-left">
                  <div className="word">
                    <span className="bord-word">{userinfo.name}</span> 오늘도
                    커피에 취한다 커피는 짱이다 맨날 먹고 싶다.
                    {comments.map(comment => {
                      return (
                        <p className="p-bold" key={comment.commentId}>
                          {comment.write}
                          {'\n'}
                          <span className="chatShow">{comment.content}</span>
                        </p>
                      );
                    })}
                    {list.map((chat, index) => (
                      <p className="p-bold" key={index}>
                        user{index + 1}
                        <span className="chatShow"> {chat}</span>
                      </p>
                    ))}
                  </div>
                  <span className="addMainComent">더 보기</span>
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
                feedId={userinfo.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
