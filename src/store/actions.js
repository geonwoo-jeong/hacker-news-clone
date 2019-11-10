import {
  fetchAskList,
  fetchJobList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemInfo
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
  FETCH_USER_INFO({ commit }, user) {
    fetchUserInfo(user).then(response =>
      commit("SET_USER_INFO", response.data)
    );
  },
  FETCH_ITEM_INFO({ commit }, item) {
    fetchItemInfo(item).then(response =>
      commit("SET_ITEM_INFO", response.data)
    );
  }
};
