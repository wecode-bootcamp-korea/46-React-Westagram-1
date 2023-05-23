import React, { useEffect, useState } from 'react';

import './MainJiyeon.scss';

const WriteNewComment = props => {
  return (
    <div id="existComment">
      <span className="bold">neceosecius</span>
      <span>{props.comment[props.index]}</span>
      <button className="deleteBtn">삭제</button>
      {/* {comment.slice(i, 1)} */}
      <img className="heartIcon" src="/images/jiyeon/heart.png" alt="comment" />
    </div>
  );
};

const MainJiyeon = () => {
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [addComment, setAddComment] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  const addComments = () => {
    if (inputValue.length > 0) {
      let copy = [...comment];
      comment.push(inputValue);
      setAddComment(copy);
      setInputValue('');
    }
  };
  const addCommentEnter = e => {
    if (e.key === 'Enter' && inputValue.length > 0) {
      let copy = [...comment];
      comment.push(inputValue);
      setAddComment(copy);
      setInputValue('');
      console.log(comment);
    }
  };

  return (
    <>
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
          <div className="feeds">
            <article className="articles">
              <div className="feedTop">
                <div className="personal">
                  <img
                    className="personalProfile"
                    src="/images/jiyeon/KakaoTalk_20230508_214810406.jpg"
                    alt="personalProfile"
                  />
                  <span className="personalId">yeonnn</span>
                </div>
                <img
                  src="/images/jiyeon/more_horiz_FILL0_wght400_GRAD0_opsz48.png"
                  alt="more"
                />
              </div>
              <img src="/images/jiyeon/cat.jpg" alt="cat" />
              <div className="feedBottom">
                <div className="feedBottomLeft">
                  <img src="/images/jiyeon/heart.png" alt="heart" />
                  <img src="/images/jiyeon/chat.png" alt="comment" />
                  <img src="/images/jiyeon/upload.png" alt="share" />
                </div>
                <img src="/images/jiyeon/ribbon.png" alt="bookmark" />
              </div>
              <div className="commentBox">
                <div className="howMuchLike">
                  <img
                    className="likeProfile"
                    src="/images/jiyeon/KakaoTalk_20230508_214810406.jpg"
                    alt="likeProfile"
                  />

                  <span>
                    <span className="bold">aineworld</span> 님
                    <span className="bold">외 10명</span>이 좋아합니다
                  </span>
                </div>
                <div className="comment">
                  <span className="bold">yeonnn</span> 세상에서 제일 귀여운 지구
                  <span className="grey">...더 보기</span>
                  <div className="grey">댓글 127개 모두 보기</div>
                </div>
                <div className="existComment">
                  <span className="bold">neceosecius</span>
                  <span>귀여워💕</span>
                  <button className="deleteBtn">삭제</button>
                  <img
                    className="heartIcon"
                    src="/images/jiyeon/heart.png"
                    alt="comment"
                  />
                </div>
                {comment.map(function (a, i) {
                  return <WriteNewComment comment={a} index={i} />;
                })}
                <div className="realCommentBox"></div>
                <div className="grey">42분 전</div>
              </div>

              <div className="line2"></div>
              <input
                className="newComment"
                type="text"
                placeholder="댓글 달기..."
                value={inputValue}
                onChange={e => {
                  setInputValue(e.target.value);
                }}
                onKeyDown={addCommentEnter}
              />
              <button onClick={addComments}>게시</button>
            </article>
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
    </>
  );
};

export default MainJiyeon;
