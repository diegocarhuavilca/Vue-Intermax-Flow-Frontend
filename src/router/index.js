import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home.vue"),
    meta: {
      title: "Home | Flow",
    },
  },
  {
    path: "/informacion-abonados",
    name: "Informacion Abonados",
    component: () => import("../views/legal/InformacionAbonados.vue"),
    meta: {
      title: "Informacion de Abonados | Flow",
    },
  },

  {
    path: "/neutralidad-de-red",
    name: "Neutralidad de la Red",
    component: () => import("../views/legal/NeutralidadRed.vue"),
    meta: {
      title: "Neutralidad de la Red | Flow",
    },
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
