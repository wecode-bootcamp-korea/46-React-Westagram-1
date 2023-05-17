import React from 'react';
import './LoginKris.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginKris() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-container">
        <div class="westagram-logo">
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
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              required
            />
          </div>
          <div className="login-button">
            <button
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
