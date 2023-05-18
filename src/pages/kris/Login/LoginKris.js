import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginKris.scss';

function LoginKris() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const saveUserID = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const inputIsValid = userId.includes('@') && userPw.trim().length >= 5;

  return (
    <div className="login">
      <div className="login-container">
        <div className="westagram-logo">
          <a href="">Westagram</a>
        </div>
        <div className="login-input-and-button">
          <div className="login-input">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              required
              onChange={saveUserID}
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              required
              onChange={saveUserPw}
            />
          </div>
          <div className="login-button">
            <button
              disabled={!inputIsValid}
              style={{ backgroundColor: inputIsValid ? '#0995f6' : '' }}
              onClick={() => {
                navigate('/mainkris');
              }}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="password-reset">
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginKris;
