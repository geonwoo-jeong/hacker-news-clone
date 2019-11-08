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
    FETCH_NEWS_LIST(context) {
      fetchNewsList().then(response =>
        context.commit("SET_NEWS_LIST", response.data)
      );
    },
    FETCH_JOB_LIST(context) {
      fetchJobList().then(response =>
        context.commit("SET_JOB_LIST", response.data)
      );
    },
    FETCH_ASK_LIST(context) {
      fetchAskList().then(response =>
        context.commit("SET_ASK_LIST", response.data)
      );
    }
  }
});
