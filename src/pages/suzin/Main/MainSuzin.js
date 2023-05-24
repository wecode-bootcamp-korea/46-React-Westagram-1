import React, { useState } from 'react';
import { FOOTER_BOX } from './footerInfoData';
import './MainSuzin.scss';

function MainSuzin() {
  const [comment, setComment] = useState('');
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <nav className="navigation">
        <div id="logoBox">
          <img
            className="logoImage"
            src="./images/suzin/인스타로고.png"
            alt="인스타로고"
          />
          <span id="subject">Westagram</span>
        </div>

        <div id="searchBox">
          <input className="searchInput" type="text" placeholder="검색" />
          <img
            className="searchIcon"
            src="./images/suzin/search.png"
            alt="검색"
          />
        </div>

        <div id="imageBox">
          <img
            className="logoImage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색"
          />
          <img
            className="logoImage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트"
          />
          <img
            className="logoImage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="마이페이지"
          />
        </div>
      </nav>

      <main className="feedMain">
        <div className="feeds">
          <article>
            <div id="articleTop">
              <div id="articleTopLeft">
                <img
                  class="profileImage"
                  src="./images/suzin/wecode_logo_1590553949.webp"
                  alt="프로필"
                />
                <div className="userLine">
                  <p className="subject">wecode_bootcamp</p>
                  <p className="additional">Wecode - 위코드</p>
                </div>
              </div>
              <img id="moreIcon" src="./images/suzin/더보기.png" alt="더보기" />
            </div>
            <img
              id="articleImg"
              src="./images/suzin/article사진.avif"
              alt="과일"
            />
            <div id="feedIcon">
              <div id="iconLeft">
                <img
                  className="icon"
                  src="./images/suzin/favorite.png"
                  alt="좋아요"
                />
                <img
                  className="icon"
                  src="./images/suzin/comment.png"
                  alt="채팅"
                />
                <img
                  className="icon"
                  src="./images/suzin/download.png"
                  alt="공유"
                />
              </div>
              <div id="iconRight">
                <img
                  className="icon"
                  src="./images/suzin/bookmark.png"
                  alt="저장"
                />
              </div>
            </div>
            <div id="articleBottom">
              <div id="feedLikeBox">
                <img
                  id="likeBoxImg"
                  src="./images/suzin/flower.avif"
                  alt="사진"
                />
                <p id="likeBoxText">aineworld님 외 10명이 좋아합니다</p>
              </div>
              <div id="content">
                <span className="userName">wecode_bootcamp </span>
                <span>과일처럼 상큼한 여러분~</span>
                <span id="more">더 보기</span>
              </div>
              <ul>
                <li className="commentList">
                  <div className="commentListLeft">
                    <span className="userName">zosuzin</span>
                    <span className="mainWrite"> 완전 맛있겠다~~~</span>
                  </div>
                  <div className="commentListRight">
                    <img
                      className="logoImageSmall"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt="하트"
                    />
                    <button className="deleteBtn">삭제</button>
                  </div>
                </li>
                <li className="commentList">
                  <div className="commentListLeft">
                    <span className="userName">bts_RM</span>
                    <span className="mainWrite"> 상큼 YO~~</span>
                  </div>
                  <div className="commentListRight">
                    <img
                      className="logoImageSmall"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt="하트"
                    />
                    <button className="deleteBtn">삭제</button>
                  </div>
                </li>
              </ul>
              <div id="time">42분 전</div>
            </div>
            <div id="commentBox">
              <input
                id="comment"
                type="text"
                placeholder="   댓글 달기..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <button className="commentBt">게시</button>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="user">
            <img
              className="profileImage"
              src="./images/suzin/wecode_logo_1590553949.webp"
              alt="프로필"
            />
            <div className="userLine">
              <p className="subject">wecode_bootcamp</p>
              <p className="additional">Wecode | 위코드</p>
            </div>
          </div>

          <div className="stories">
            <div className="storiesTop">
              <p>스토리</p>
              <p className="allSee">모두 보기</p>
            </div>
            <div className="user">
              <img
                className="profileImage"
                src="https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="프로필"
              />
              <div className="userLine">
                <p className="subject">yumy</p>
                <p className="additional">16분 전</p>
              </div>
            </div>

            <div className="user">
              <img
                className="profileImage"
                src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="프로필"
              />
              <div className="userLine">
                <p className="subject">drink</p>
                <p className="additional">3시간 전</p>
              </div>
            </div>

            <div className="user">
              <img
                className="profileImage"
                src="https://plus.unsplash.com/premium_photo-1682088221085-a99b7aa535b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="프로필"
              />
              <div className="userLine">
                <p className="subject">hyuk</p>
                <p className="additional">20시간 전</p>
              </div>
            </div>
          </div>
          <div className="stories">
            <div className="storiesTop">
              <p>회원님을 위한 추천</p>
              <p className="allSee">모두 보기</p>
            </div>
            <div className="userTwoBox">
              <div className="userTwo">
                <img
                  className="profileImage"
                  src="https://images.unsplash.com/photo-1682686581580-d99b0230064e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="프로필"
                />
                <div className="recommend">
                  <div className="recommendName">
                    <p className="subject">joaaaaah</p>
                    <p className="additional">yumy님 외 2명이 팔로우합니다</p>
                  </div>
                </div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="userTwoBox">
              <div className="userTwo">
                <img
                  className="profileImage"
                  src="https://images.unsplash.com/photo-1683526976156-1a3f1a315049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                  alt="프로필"
                />
                <div className="recommend">
                  <div className="recommendName">
                    <p className="subject">rampart</p>
                    <p className="additional">drink님 외 12명이 팔로우합니다</p>
                  </div>
                </div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="userTwoBox">
              <div className="userTwo">
                <img
                  className="profileImage"
                  src="https://images.unsplash.com/photo-1683669260701-2a12766c2bb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="프로필"
                />
                <div className="recommend">
                  <div className="recommendName">
                    <p className="subject">shawn</p>
                    <p className="additional">jimmy님 외 1명이 팔로우합니다</p>
                  </div>
                </div>
              </div>
              <button>팔로우</button>
            </div>

            <footer>
              <p id="footerTop">
                {FOOTER_BOX.map(footerInf => {
                  return <a key={footerInf.id}>{footerInf.title}</a>;
                })}
              </p>
              @ 2019 INSTAGRAM
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainSuzin;
