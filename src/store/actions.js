import { fetchUserInfo, fetchItemInfo, fetchList } from "../api";

export default {
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName).then(({ data }) => commit("SET_LIST", data));
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
