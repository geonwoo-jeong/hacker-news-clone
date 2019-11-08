import Vue from "vue";
import Vuex from "vuex";
import { fetchAskList, fetchJobList, fetchNewsList } from "../api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: []
  },
  getters: {
    asks(state) {
      return state.asks;
    }
  },
  mutations: {
    SET_NEWS_LIST(state, news) {
      state.news = news;
    },
    SET_JOB_LIST(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK_LIST(state, asks) {
      state.asks = asks;
    }
  },
  actions: {
    FETCH_NEWS_LIST({ commit }) {
      fetchNewsList().then(response => commit("SET_NEWS_LIST", response.data));
    },
    FETCH_JOB_LIST({ commit }) {
      fetchJobList().then(response => commit("SET_JOB_LIST", response.data));
    },
    FETCH_ASK_LIST({ commit }) {
      fetchAskList().then(response => commit("SET_ASK_LIST", response.data));
    }
  }
});
