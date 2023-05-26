import React from 'react';
import './LoginJiyeon.scss';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/jiyeon/mixin.scss';

import { useState } from 'react';

const LoginJiyeon = () => {
  // const [value, setValue] = useState();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  // const [loginBtnstate, setLoginBtnstate] = useState(false);
  const navigate = useNavigate();
  const saveUserId = e => {
    setUserId(e.target.value);
  };
  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const loginFetch = () => {
    fetch('http://10.58.52.71:3000/users/signin', {
      method: 'POST',
      headers: { 'content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === 'INVALID_USER') {
          alert('다시 입력해주세요');
        } else {
          localStorage.setItem('TOKEN', result.token);
          navigate('/MainJiyeon');
        }
        // console.log(result);
        // if (result.message === 'SIGN_UP_SUCCESS 🐣') {
        //   navigate('/MainJiyeon');
        // } else {
        //   alert('다시 입력해주세요');
        // }
      });
  };

  const loginBtn = () => {
    //if (id.indexOf(@) && pw.length > 4) =>true
    return userId.includes('@') && userPw.length > 4 ? true : false;
  };

  return (
    <>
      <div id="wrapLogin">
        <h1>Westagram</h1>
        <input
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          defaultValue={userId}
          onChange={saveUserId}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          defaultValue={userPw}
          onChange={saveUserPw}
        />
        <button
          disabled={!loginBtn()}
          className={loginBtn() ? 'activeBtn' : ''} //***
          onClick={loginFetch}
        >
          로그인
        </button>
        <a id="findPassword" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </>
  );
};

export default LoginJiyeon;
