import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSuzin.scss';

const LoginSuzin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [bt, setBt] = useState('skyblue');
  const navigate = useNavigate();

  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };

  useEffect(() => {
    id.includes('@') && pw.length > 4 ? setBt('blue') : setBt('skyblue');
  }, [id, pw]);

  ///////////////////

  const signUpFetch = () => {
    fetch('http://10.58.52.155:8000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response =>
        // response값 확인하자! console.log(response);
        response.json()
      )
      .then(result => {
        // result값 확인하자! console.log(result);
        if (result.accessToken !== undefined) {
          alert('로그인 성공');
          localStorage.setItem('access_token :', result.accessToken);
        } else {
          alert('로그인 실패');
        }
      });
  };

  ///////////////////

  return (
    <div className="loginSuzin">
      <main id="loginBox">
        <div id="subjects">Westagram</div>
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일 "
          onChange={saveUserId}
        />
        <input
          type="password"
          className="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />
        <button
          class="buttonBox"
          onClick={() => {
            signUpFetch();
            // navigate('/mainsuzin');
          }}
          style={{ backgroundColor: bt }}
          disabled={bt === 'skyblue'}
        >
          로그인
        </button>
        <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
      </main>
    </div>
  );
};

export default LoginSuzin;
