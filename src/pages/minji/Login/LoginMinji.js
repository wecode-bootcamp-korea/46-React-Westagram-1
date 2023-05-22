import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginMinji.scss';

function LoginMinji() {
  //id, pw가 입력되어 있을 때, id @ 포함, pw 5자리 이상일 때 로그인 버튼 활성화

  const [id, setUserId] = useState('');
  const [pw, setUserPw] = useState('');
  const [btnStatus, setBtnStatus] = useState(true);
  const [disableBtn, setBtn] = useState('disableBtn');

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  if (id.includes('@') && pw.length > 4) {
    if (btnStatus) {
      setBtnStatus(false);
      setBtn('ableBtn');
    }
  } else {
    if (!btnStatus) {
      setBtnStatus(true);
      setBtn('disableBtn');
    }
  }

  return (
    <div className="loginMinji">
      <div className="main-inner">
        <div className="inner">
          <div className="inner-header">
            <h1>
              <span className="lobster">Westagram</span>
            </h1>
          </div>
          <form className="form">
            <div className="inputBox">
              <input
                type="text"
                className="id"
                defaultValue={id}
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={saveUserId}
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                className="psword"
                defaultValue={pw}
                placeholder="비밀번호"
                onChange={saveUserPw}
              />
            </div>
            <div className="loginBtn">
              <button type="button" className={disableBtn} disabled={btnStatus}>
                <span className="logintext">로그인</span>
              </button>
            </div>
          </form>
          <div className="inner-footer">
            <Link className="link" to="/main">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMinji;
