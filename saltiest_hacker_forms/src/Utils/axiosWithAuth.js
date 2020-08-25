import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "https://salty-hacker-1-bw.herokuapp.com",
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
};