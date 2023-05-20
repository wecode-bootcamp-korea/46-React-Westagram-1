import React from 'react';
import './ChatMinji.scss';

const ChatMinji = ({
  inputChat,
  setInputChat,
  list,
  setList,
  btnStatus,
  setBtnStatus,
  disableBtn,
  setBtn,
}) => {
  const inputChange = e => {
    setInputChat(e.target.value);
    setBtnStatus(false);
    setBtn('ableBtn');
  };

  const inputChangeEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      clickBtn();
      setInputChat('');
    }
  };

  const clickBtn = () => {
    setList([...list, inputChat]);
    setInputChat('');
  };
  return (
    <div className="article-footer-footer">
      <input
        type="text"
        className="chatinput"
        placeholder="댓글달기.."
        onChange={inputChange}
        onKeyUp={inputChangeEnter}
        value={inputChat}
      />
      <button
        type="button"
        className={disableBtn}
        disabled={btnStatus}
        onClick={clickBtn}
      >
        게시
      </button>
    </div>
  );
};

export default ChatMinji;
