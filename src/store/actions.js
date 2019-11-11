import { fetchUserInfo, fetchItemInfo, fetchList } from "../api";

export default {
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit("SET_LIST", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_USER_INFO({ commit }, user) {
    try {
      const response = await fetchUserInfo(user);
      commit("FETCH_USER_INFO", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM_INFO({ commit }, item) {
    try {
      const response = await fetchItemInfo(item);
      commit("SET_ITEM_INFO", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
