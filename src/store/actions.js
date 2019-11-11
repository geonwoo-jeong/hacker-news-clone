import { fetchUserInfo, fetchItemInfo, fetchList } from "../api";

export default {
  async FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName).then(({ data }) => commit("SET_LIST", data));
  },
  async FETCH_USER_INFO({ commit }, user) {
    return fetchUserInfo(user).then(response =>
      commit("SET_USER_INFO", response.data)
    );
  },
  async FETCH_ITEM_INFO({ commit }, item) {
    return fetchItemInfo(item).then(response =>
      commit("SET_ITEM_INFO", response.data)
    );
  }
};
