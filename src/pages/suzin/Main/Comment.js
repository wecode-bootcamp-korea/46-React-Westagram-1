import React from 'react';

function Comment(props) {
  return (
    <li className="commentList" key={props.index}>
      <div className="commentListLeft">
        <span className="userName">bts_Sugar</span>
        <span className="mainWrite">{props.value}</span>
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
  );
}

export default Comment;
