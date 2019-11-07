import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      component: NewsView
    },
    {
      path: "/jobs",
      component: JobsView
    },
    {
      path: "/ask",
      component: AskView
    },
    {
      path: "/user",
      component: UserView
    },
    {
      path: "/item",
      component: ItemView
    }
  ]
});
