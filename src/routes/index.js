import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      component: NewsView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView
    },
    {
      path: "/user",
      component: UserView
    },
    {
      path: "/item",
      component: ItemView
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    }
  ]
});
