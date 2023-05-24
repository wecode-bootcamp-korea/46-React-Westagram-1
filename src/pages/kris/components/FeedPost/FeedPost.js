import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './FeedPost.scss';

const FeedPost = props => {
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

  return (
    <article className="feed-post" key={props.key}>
      <div className="feed-info">
        <div className="feed-info-profile">
          <img src={props.authorProfileImage} alt="author-profile" />
        </div>
        <div className="feed-info-author">
          <Link to="">{props.author}</Link>
        </div>
      </div>
      <div className="feed-image">
        <img src={props.feedImage} alt="feed-image" />
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
        <span className="feed-text-author">{props.author}</span>
        <span className="feed-text-writing">{props.feedText}</span>
      </div>
      <div className="feed-comment-posted-container">
        <Comment commentList={commentList} key={props.key} />
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
  );
};
export default FeedPost;
