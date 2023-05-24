import React, { useEffect } from 'react';
import { useState } from 'react';

import './MainJiyeon.scss';

const WriteNewComment = props => {
  return (
    <div className="existComment">
      <span className="bold">neceosecius</span>
      <span>{props.comment}</span>
      <button className="deleteBtn">삭제</button>
      {/* {comment.slice(i, 1)} */}
      <img className="heartIcon" src="/images/jiyeon/heart.png" alt="comment" />
    </div>
  );
};

const FeedContents = props => {
  console.log(props);
  // const [feedData, setFeedData] = useState();
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [addComment, setAddComment] = useState();

  console.log(comment);

  const addCommentEnter = e => {
    if (e.key === 'Enter' && inputValue.length > 0) {
      let copy = [...comment];
      comment.push(inputValue);
      setAddComment(copy);
      setInputValue('');
      console.log(comment);
    }
  };

  const addComments = () => {
    if (inputValue.length > 0) {
      let copy = [...comment];
      comment.push(inputValue);
      setAddComment(copy);
      setInputValue('');
    }
  };

  return (
    <article className="articles">
      <div className="feedTop">
        <div className="personal">
          <img
            className="personalProfile"
            src={`${props.feedData.profileImg}`}
            alt="personalProfile"
          />
          <span className="personalId">{props.feedData.name}</span>
        </div>
        <img
          src="/images/jiyeon/more_horiz_FILL0_wght400_GRAD0_opsz48.png"
          alt="more"
        />
      </div>
      <img src={props.feedData.feedImg} alt="cat" />
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
            <span className="bold">{props.feedData.likeName}</span> 님
            <span className="bold">외 {props.feedData.likeCount}명</span>이
            좋아합니다
          </span>
        </div>
        <div className="comment">
          <span className="bold">yeonnn</span> {props.feedData.FeedContents}
          <span className="grey">...더 보기</span>
          <div className="grey">댓글 127개 모두 보기</div>
        </div>
        <div className="existComment">
          <span className="bold">{props.feedData.likeName}</span>
          <span>귀여워💕</span>
          <button className="deleteBtn">삭제</button>
          <img
            className="heartIcon"
            src="/images/jiyeon/heart.png"
            alt="comment"
          />
        </div>

        {comment.map(function (a, i) {
          return (
            <WriteNewComment comment={a} key={i} index={i} />
            // 인자 comment => a / a => a / comment => comment : comment 배열 내 index 내에서 또 index 를 돌려요!
            // index = i, key = i, props.index 만 작동 돼요!!
          );
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
  );
};
export default FeedContents;
