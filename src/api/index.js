import axios from "axios";

// HTTP Request & Response
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

// API Functions
const fetchNewsList = () => axios.get(`${config.baseUrl}news/1.json`);
const fetchAskList = () => axios.get(`${config.baseUrl}ask/1.json`);
const fetchJobList = () => axios.get(`${config.baseUrl}jobs/1.json`);
const fetchList = pageName => axios.get(`${config.baseUrl}${pageName}/1.json`);

const fetchUserInfo = username =>
  axios.get(`${config.baseUrl}user/${username}.json`);
const fetchItemInfo = item => axios.get(`${config.baseUrl}item/${item}.json`);

// Exports
export {
  fetchNewsList,
  fetchAskList,
  fetchJobList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo
};
