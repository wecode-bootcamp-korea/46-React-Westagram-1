import React, { useState } from 'react';
import './Story.scss';

function Story() {
  const [userData, setUserData] = useState([
    {
      id: '_yum_s',
      img: 'images/minji/_yum_s.jpeg',
      time: '16',
    },
    {
      id: 'drink_eat_drink',
      img: 'images/minji/drink_eat_drink.jpg',
      time: '3',
    },
    {
      id: 'hyukyc',
      img: 'images/minji/hyukyc.jpeg',
      time: '20',
    },
    {
      id: 'jminkeek',
      img: 'images/minji/jminkeek.jpeg',
      time: '1',
    },
  ]);
  return (
    <div className="story">
      {userData.map(user => {
        return (
          <div key={user.id} className="right-body-bottom">
            <div className="inner">
              <div className="inner">
                <img className="storyimg" src={user.img} alt="user" />
              </div>
              <div className="inner-div">
                <div className="inner-top">
                  <span className="bord-word">{user.id}</span>
                </div>
                <div className="inner-top">
                  <span className="gray-word">{user.time}분 전</span>
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
