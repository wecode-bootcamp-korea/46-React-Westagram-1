import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Stories.scss';

const Stories = () => {
  const [storyList, setStoryList] = useState([]);

  useEffect(() => {
    fetch('/data/kris/storiesData.json')
      .then(res => res.json())
      .then(result => setStoryList(result));
  }, []);

  return storyList.map(story => {
    return (
      <div className="stories" key={storyList.id}>
        <div className="stories-user-profile">
          <img src={story.profileImage} alt="profile" />
        </div>

        <div className="stories-username-and-time">
          <Link to="" className="stories-username">
            {story.username}
          </Link>
          <br />
          <span className="stories-time">{story.time} 전</span>
        </div>
      </div>
    );
  });
};

export default Stories;
