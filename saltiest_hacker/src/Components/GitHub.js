import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"
import { Motion, spring, presets } from "react-motion";

const gitHubUrl = "https://api.github.com/users/chrisjcorbin";

function GitHub() {
  const [userData, setUserData] = useState({});

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
  };

  useEffect(() => {
    getGiHubUserWithAxios();
  }, []);

  return (
    <Motion
      defaultStyle={{
        opacity: 0,
        translateY: 800,
      }}
      style={{
        opacity: spring(10),
        translateY: spring(25, presets.wobbly),
      }}
    >
      {(interpolatedStyles) => (
        <div
          style={{
            transform: `translateY(${interpolatedStyles.translateY}px)`,
            opacity: interpolatedStyles.opacity,
          }}
        >
          <header className="GitHub-Header">
            <h1>GitHub User Data</h1>
          </header>
          <div className="user-container">
            <h5 className="info-item">Name: {userData.name}</h5>
            <h5 className="info-item">Location: {userData.location}</h5>
            <h5 className="info-item">Quote: {userData.bio}</h5>
            <h5 className="info-item">Public Repos: {userData.public_repos}</h5>
            <h5 className="info-item">Followers: {userData.followers}</h5>
          </div>
        </div>
      )}
    </Motion>
  );
}

export default GitHub;