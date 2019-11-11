import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
import NewsView from "../views/NewsView";
import createListView from "../views/CreateListView";

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
      component: createListView("JobsView")
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView")
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
