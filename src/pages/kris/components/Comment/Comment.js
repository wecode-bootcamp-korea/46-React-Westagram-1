import React from 'react';
import './Comment.scss';

const Comment = ({ commentList }) => {
  return (
    <div className="comment">
      {commentList.map((comment, index) => {
        return (
          <div className="comment-posted" key={index}>
            <span className="comment-posted-author">front.end</span>
            <span className="comment-posted text">{comment}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Comment;
