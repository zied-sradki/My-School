import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./Home.vue"),
      index: 0,
      children: [
        {
          path: "",
          component: () => import("./components/Landing.vue"),
          index: 0,
        },
        {
          path: "Login",
          component: () => import("./components/Login.vue"),
          index: 0,
        },
        {
          path: "Register",
          component: () => import("./components/Login.vue"),
          index: 1,
        },
        {
          path: "Profil",
          component: () => import("./components/profil/Profil.vue"),
          index: 2,
        },
        {
          path: "/ChatContainer",
          component: () => import("./components/profil/ChatContainer.vue"),
          index: 3,
        },
        {
          path: "/ContactUs",
          component: () => import("./components/ContactUs.vue"),
          index: 4,
        },
        {
          path: "/Teacher",
          component: () => import("./components/Teacher/Teacher.vue"),
          index: 5,
        },
        {
          path: "/ChatStructure",
          component: () => import("./components/profil/ChatStructure.vue"),
          index: 6,
        },
        {
          path: "/admin",
          component: () => import("./components/admin/Admin.vue"),
          index: 7,
        },
        {
          path: "/ContactAdmin",
          component: () => import("./components/admin/ContactAdmin.vue"),
          index: 8,
        },
        {
          path: "Updates",
          component: () => import("./components/UpdatesTemplate.vue"),
          index: 9,
        },
        {
          path: "News",
          component: () => import("./components/NewsTemplate.vue"),
          index: 10,
        },
        {
          path: "event",
          component: () => import("./components/EventTemplate.vue"),
          index: 11,
        },
        {
          path: "service",
          component: () => import("./components/ServiceTemplate.vue"),
          index: 12,
        },
        {
          path: "activity",
          component: () => import("./components/ActivityTemplate.vue"),
          index: 13,
        },
        {
          path: "events",
          component: () => import("./components/Events.vue"),
          index: 14,
        },
        {
          path: "courses",
          component: () => import("./components/home/Content/Courses.vue"),
          index: 15,
        },
        {
          path: "classes",
          component: () => import("./components/home/Content/Classes.vue"),
          index: 15,
        },
        {
          path: "activites",
          component: () => import("./components/home/Content/Activites.vue"),
          index: 15,
        },
        {
          path: "NewsItem",
          component: () => import("./components/home/Content/NewsItem.vue"),
          index: 15,
        },
      ],
    },
  ],
});
