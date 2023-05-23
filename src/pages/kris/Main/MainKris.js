import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment/Comment';
import { COMPANY_LINK_LIST } from '../../kris/components/CompanyLink/CompanyLink';
import './MainKris.scss';

function MainKris() {
  const [postList, setPostList] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleCommentInput = e => {
    setCommentInput(e.target.value);
  };

  const handleCommentPost = () => {
    if (commentInput !== '') {
      setCommentList([...commentList, commentInput]);
      setCommentInput('');
    }
  };
  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      handleCommentPost();
    }
  };

  useEffect(() => {
    fetch('/data/kris/feedData.json')
      .then(res => res.json())
      .then(result => setPostList(result));
  }, []);

  return (
    <div className="main">
      <nav>
        <div className="navbar-logo">
          <img
            className="instagram-icon"
            src="/images/kris/instagram.png"
            alt="instagram-icon"
          />
          <Link to="" className="navbar-westagram">
            Westagram
          </Link>
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
          {postList.map(post => (
            <article className="feed-article" key={post.id}>
              <div className="feed-info">
                <div className="feed-info-profile">
                  <img src={post.authorProfileImage} alt="author-profile" />
                </div>
                <div className="feed-info-author">
                  <Link to="">{post.author}</Link>
                </div>
              </div>
              <div className="feed-image">
                <img src={post.feedImage} alt="feed-image" />
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
                <span className="feed-text-author">{post.author}</span>
                <span className="feed-text-writing">{post.feedText}</span>
              </div>
              <div className="feed-comment-posted-container">
                <Comment commentList={commentList} id={post.id} />
              </div>
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
          ))}
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
              <Link to="">front.end</Link>
              <br />
              <span className="my-name">Kris</span>
            </div>
          </section>

          <article className="stories">
            <header className="stories-header">
              <span>스토리</span>
              <Link to="">모두 보기</Link>
            </header>

            <div className="stories-info">
              <div className="stories-user-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>
              <div className="stories-username-and-time">
                <Link to="" className="stories-username">
                  github.init
                </Link>
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
                <Link to="" className="stories-username">
                  developer.io
                </Link>
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
                <Link to="" className="stories-username">
                  stackoverflow_official
                </Link>
                <br />
                <span className="stories-time">10시간 전</span>
              </div>
            </div>
          </article>

          <article className="recommendations">
            <header className="recommendations-header">
              <span>회원님을 위한 추천</span>
              <Link to="">모두 보기</Link>
            </header>

            <div className="recommendations-info">
              <div className="recommendations-user-profile">
                <img
                  src="https://cdn.pixabay.com/photo/2023/05/15/12/44/food-7994980_960_720.jpg"
                  alt="profile"
                />
              </div>
              <div className="recommendations-username-and-mutual">
                <Link to="" className="recommendations-username">
                  sleepy.sleepy
                </Link>
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
                <Link to="" className="recommendations-username">
                  hungry.hungry
                </Link>
                <br />
                <span className="recommendations-mutual">
                  iphone14.pro 외 70...
                </span>
              </div>
              <button className="follow-button">팔로우</button>
            </div>
          </article>

          <section className="company-info">
            <div className="company-link-container">
              {COMPANY_LINK_LIST.map(companyLink => {
                return (
                  <>
                    <Link key={companyLink.id} to="" className="company-link">
                      {companyLink.linkName}
                    </Link>
                    <span>・</span>
                  </>
                );
              })}
            </div>
            <div className="company-copyright">
              <Link to="">© 2023 INSTAGRAM</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainKris;
