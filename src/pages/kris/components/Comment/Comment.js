import React from 'react';
import './Comment.scss';

const Comment = props => {
  return (
    <>
      {props.commentList.map((text, index) => (
        <div className="comment-posted" key={index}>
          {text}
        </div>
      ))}
    </>
  );
};
export default Comment;
