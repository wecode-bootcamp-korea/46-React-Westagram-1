import React from 'react';
import './LoginJiyeon.scss';
import { Link } from 'react-router-dom';
import '../../../styles/jiyeon/mixin.scss';

import { useState } from 'react';

const LoginJiyeon = () => {
  // const [value, setValue] = useState();
  const [id, setUserId] = useState('');
  const [pw, setUserPw] = useState('');
  const [loginBtnstate, setLoginBtnstate] = useState(false);

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const loginBtn = () => {
    //if (id.indexOf(@) && pw.length > 4) =>true
    return id.includes('@') && pw.length > 4 ? true : false;
  };

  return (
    <>
      <div id="wrapLogin">
        <h1>Westagram</h1>
        <input
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          defaultValue={id}
          onChange={saveUserId}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          defaultValue={pw}
          onChange={saveUserPw}
        />
        <Link to="../MainJiyeon">
          <button
            disabled={!loginBtn()}
            className={loginBtn() ? 'activeBtn' : ''}
          >
            로그인
          </button>
        </Link>
        <a id="findPassword" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </>
  );
};

export default LoginJiyeon;
