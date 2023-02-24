import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./Pages/HomePage.vue";
import JobDetail from "./components/JobDetail.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { name: "JobDetails", path: "/job/:id", component: JobDetail },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
