import React, { useState } from 'react';
import './MainKris.scss';

function MainKris() {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleCommentInput = e => {
    setCommentInput(e.target.value);
  };

  const handleCommentPost = () => {
    if (commentInput !== '') {
      console.log('지우기전', commentInput);
      setCommentList([...commentList, commentInput]);
      setCommentInput('');
    }
  };

  console.log('지워지기', commentInput);

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      handleCommentPost();
    }
  };

  return (
    <div className="main">
      <nav>
        <div className="navbar-logo">
          <img
            className="instagram-icon"
            src="/images/kris/instagram.png"
            alt="instagram-icon"
          />
          <a href="" className="navbar-westagram">
            Westagram
          </a>
        </div>
        <div className="navbar-search">
          <img
            className="navbar-search-icon"
            src="/images/kris/search.png"
            alt="search-icon"
          />
          <input type="text" placeholder="검색" />
        </div>
        <div className="navbar-icons">
          <img
            className="navbar-icon-explore"
            src="/images/kris/explore.png"
            alt="icon-explore"
          />
          <img
            className="navbar-icon-heart"
            src="/images/kris/heart.png"
            alt="icon-heart"
          />
          <img
            className="navbar-icon-profile"
            src="https://cdn.pixabay.com/photo/2023/05/15/11/43/sydney-7994809_960_720.jpg"
            alt="'icon-profile"
          />
        </div>
      </nav>

      <main>
        <div className="main-feeds">
          <article className="feed-article">
            <div className="feed-info">
              <div className="feed-info-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>

              <div className="feed-info-author">
                <a href="">back.end</a>
              </div>
            </div>
            <div className="feed-image">
              <img
                src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                alt="feed-image"
              />
            </div>
            <div className="feed-interaction">
              <img
                className="interaction-icon"
                src="/images/kris/heart.png"
                alt="heart-icon"
              />
              <img
                className="interaction-icon"
                src="/images/kris/comment.png"
                alt="comment-icon"
              />
              <img
                className="interaction-icon"
                src="/images/kris/share.png"
                alt="share-icon"
              />
            </div>
            <div className="feed-text">
              <span className="feed-text-author">back.end</span>
              <span className="feed-text-writing">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae lobortis arcu, ac suscipit elit. Integer eu ligula in
                libero euismod dignissim id at lacus.{' '}
              </span>
            </div>
            <div className="feed-comment-posted-container" />
            {commentList.map(text => {
              return <div className="comment-posted">{text}</div>;
            })}
            <div className="feed-add-comment">
              <input
                type="text"
                id="comment"
                name="comment"
                placeholder="댓글 달기..."
                onChange={handleCommentInput}
                onKeyUp={handleKeyUp}
                value={commentInput}
              />
              <button className="comment-button" onClick={handleCommentPost}>
                게시
              </button>
            </div>
          </article>
        </div>

        <div className="main-right">
          <section className="right-my-info">
            <div className="right-my-info-profile">
              <img
                src="https://cdn.pixabay.com/photo/2023/05/15/11/43/sydney-7994809_960_720.jpg"
                alt="profile"
              />
            </div>

            <div className="right-my-info-username-and-name">
              <a href="">front.end</a>
              <br />
              <span className="my-name">Kris</span>
            </div>
          </section>

          <article className="stories">
            <header className="stories-header">
              <span>스토리</span>
              <a href="">모두 보기</a>
            </header>

            <div className="stories-info">
              <div className="stories-user-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>
              <div className="stories-username-and-time">
                <a href="" className="stories-username">
                  github.init
                </a>
                <br />
                <span className="stories-time">1분 전</span>
              </div>
            </div>
            <div className="stories-info">
              <div className="stories-user-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>
              <div className="stories-username-and-time">
                <a href="" className="stories-username">
                  developer.io
                </a>
                <br />
                <span className="stories-time">2시간 전</span>
              </div>
            </div>
            <div className="stories-info">
              <div className="stories-user-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>
              <div className="stories-username-and-time">
                <a href="" className="stories-username">
                  stackoverflow_official
                </a>
                <br />
                <span className="stories-time">10시간 전</span>
              </div>
            </div>
          </article>

          <article className="recommendations">
            <header className="recommendations-header">
              <span>회원님을 위한 추천</span>
              <a href="">모두 보기</a>
            </header>

            <div className="recommendations-info">
              <div className="recommendations-user-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>
              <div className="recommendations-username-and-mutual">
                <a href="" className="recommendations-username">
                  sleepy.sleepy
                </a>
                <br />
                <span className="recommendations-mutual">
                  macbook.pro 외 5...
                </span>
              </div>
              <button className="follow-button">팔로우</button>
            </div>

            <div className="recommendations-info">
              <div className="recommendations-user-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>
              <div className="recommendations-username-and-mutual">
                <a href="" className="recommendations-username">
                  hungry.hungry
                </a>
                <br />
                <span className="recommendations-mutual">
                  iphone14.pro 외 70...
                </span>
              </div>
              <button className="follow-button">팔로우</button>
            </div>
          </article>

          <section className="company-info">
            <div className="company-links">
              <a href="">소개</a>
              <a href="">도움말</a>
              <a href="">홍보 센터</a>
              <a href="">API</a>
              <a href="">채용 정보</a>
              <a href="">개인정보처리방침</a>
              <a href="">약관</a>
              <a href="">디렉토리</a>
              <a href="">해시태그</a>
              <a href="">언어</a>
            </div>

            <div className="company-copyright">
              <a href="">© 2023 INSTAGRAM</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainKris;
