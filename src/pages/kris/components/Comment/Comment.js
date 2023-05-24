import React from 'react';
import './Comment.scss';

const Comment = props => {
  return (
    <>
      {props.commentList.map((text, index) => (
        <div className="comment-posted" key={index}>
          <span className="comment-posted-author">front.end</span>
          <span className="comment-posted text">{text}</span>
        </div>
      ))}
    </>
  );
};
export default Comment;
