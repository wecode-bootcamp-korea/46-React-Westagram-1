import React from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './LoginSuzin.scss';

const LoginSuzin = () => {
  const navigate = useNavigate();
  return (
    <div id="loginking">
      <main id="loginBox">
        <div id="subjects">Westagram</div>
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일 "
        />
        <input type="text" className="password" placeholder="비밀번호" />
        {/* <Link to="/main">
          <button class="buttonBox">로그인</button>
        </Link> */}
        <button
          class="buttonBox"
          onClick={() => {
            navigate('/main');
          }}
        >
          로그인
        </button>
        <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
      </main>
    </div>
  );
};

export default LoginSuzin;
