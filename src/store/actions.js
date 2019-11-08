import {
  fetchAskList,
  fetchJobList,
  fetchNewsList,
  fetchUserInfo
} from "../api";

export default {
  FETCH_NEWS_LIST({ commit }) {
    fetchNewsList().then(response => commit("SET_NEWS_LIST", response.data));
  },
  FETCH_JOB_LIST({ commit }) {
    fetchJobList().then(response => commit("SET_JOB_LIST", response.data));
  },
  FETCH_ASK_LIST({ commit }) {
    fetchAskList().then(response => commit("SET_ASK_LIST", response.data));
  },
  FETCH_USER_INFO({ commit }) {
    fetchUserInfo().then(response => commit("SET_USER_INFO", response.data));
  }
};
