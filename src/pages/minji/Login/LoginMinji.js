import React, { useState } from 'react';
import './LoginMinji.scss';
import { Link } from 'react-router-dom';

function LoginMinji() {
  //id, pw가 입력되어 있을 때, id @ 포함, pw 5자리 이상일 때 로그인 버튼 활성화

  const [id, setUserId] = useState('');
  const [pw, setUserPw] = useState('');

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const loginBtn = () => {
    if (!!(id && pw)) {
      //로그인 버튼 활성화
    }
  };

  return (
    <div className="page-login">
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
                id="id"
                type="text"
                defaultValue={id}
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={saveUserId}
              />
            </div>
            <div className="inputBox">
              <input
                id="psword"
                type="password"
                defaultValue={pw}
                placeholder="비밀번호"
                onChange={saveUserPw}
              />
            </div>
            <div className="loginBtn">
              <button
                type="button"
                className="disableBtn"
                id="loginBtn"
                disabled={false}
              >
                <span className="logintext" onClick={loginBtn}>
                  로그인
                </span>
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
