import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from "../views/TabsPage.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "kolam",
        component: () => import("@/views/KolamPage.vue"),
      },
    ],
  },
  {
    path: "/kolam/register",
    component: () => import("@/views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
