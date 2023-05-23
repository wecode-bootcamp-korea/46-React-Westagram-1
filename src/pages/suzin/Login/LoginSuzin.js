import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './LoginSuzin.scss';

const LoginSuzin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const saveUserId = e => {
    setId(e.target.value);
    console.log(id);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
    console.log(pw);
  };
  return (
    <div id="loginking">
      <main id="loginBox">
        <div id="subjects">Westagram</div>
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일 "
          onChange={saveUserId}
        />
        <input
          type="text"
          className="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />
        {/* <Link to="/main">
          <button class="buttonBox">로그인</button>
        </Link> */}
        <button
          class="buttonBox"
          onClick={() => {
            navigate('/mainsuzin');
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
