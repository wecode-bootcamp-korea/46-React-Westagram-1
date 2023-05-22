import React, { useState } from 'react';
import './ReCommend.scss';

function Story() {
  const [userData, setUserData] = useState([
    {
      id: 'joaaahye',
      img: 'images/minji/userImg/joaaahye.jpeg',
      otherUser: 'llwnn08',
      likeNum: '2',
    },
    {
      id: 'hy31_ooe',
      img: 'images/minji/userImg/hy31_ooe.jpg',
      otherUser: 'oslib__ii_',
      likeNum: '3',
    },
    {
      id: 'eldij_uu',
      img: 'images/minji/userImg/eldij_uu.jpeg',
      otherUser: 'aineworld',
      likeNum: '6',
    },
  ]);
  return (
    <div className="recommend">
      {userData.map(user => {
        return (
          <div key={user.id} className="right-body-bottom">
            <div className="main-article-header">
              <div className="article-inner">
                <div className="right-inner-left">
                  <img className="logoimg" src={user.img} alt={user.id} />
                  <div className="inner-div">
                    <div className="inner-top">
                      <span className="bord-word">{user.id}</span>
                    </div>
                    <div className="inner-top">
                      <div className="word-dot">
                        <span className="gray-word-dot">
                          {user.otherUser}님 외 {user.likeNum}명이 좋아합니다.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-inner-right">
                  <span className="followWord">팔로우</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
