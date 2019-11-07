import axios from "axios";

// HTTP Request & Response
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

// API Functions
const fetchNewsList = () => axios.get(`${config.baseUrl}news/1.json`);
const fetchAskList = () => axios.get(`${config.baseUrl}ask/1.json`);
const fetchJobList = () => axios.get(`${config.baseUrl}jobs/1.json`);

// Exports
export { fetchNewsList, fetchAskList, fetchJobList };
