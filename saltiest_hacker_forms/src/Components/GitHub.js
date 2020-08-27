import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"

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
        <div className="GitHub">
            <header className="GitHub-Header">
                <h2>GitHub User Data</h2>
            </header>
            <div className="user-container">
                <h5 className="info-item">Name: {userData.name}</h5>
                <h5 className="info-item">Location: {userData.location}</h5>
                <h5 className="info-item">Quote: {userData.bio}</h5>
                <h5 className="info-item">Public Repos: {userData.public_repos}</h5>
                <h5 className="info-item">Followers: {userData.followers}</h5>
            </div>
        </div>
    );
}

export default GitHub;