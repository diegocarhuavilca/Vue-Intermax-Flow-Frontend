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
    path: "/portabilidad-numerica",
    name: "Portabilidad Numerica",
    component: () => import("../views/legal/PortabilidadNumerica.vue"),
    meta: {
      title: "Portabilidad Numerica | Flow",
    },
  },
  {
    path: "/indicadores-de-calidad",
    name: "Indicadores de Calidad",
    component: () => import("../views/legal/IndicadoresCalidad.vue"),
    meta: {
      title: "Indicadores de Calidad | Flow",
    },
  },
  {
    path: "/red-casos-de-emergencia",
    name: "Uso de la Red en Caso de Emergencia",
    component: () => import("../views/legal/RedCasosEmergencia.vue"),
    meta: {
      title: "Uso de Red en Casos de Emergencia | Flow",
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
  {
    path: "/proteccion-datos",
    name: "Proteccion Datos",
    component: () => import("../views/legal/ProteccionDatos.vue"),
    meta: {
      title: "Ley de Proteccion de Datos | Flow",
    },
  },
  {
    path: "/terminos-y-condiciones",
    name: "Terminos y Condiciones",
    component: () => import("../views/legal/TerminosCondiciones.vue"),
    meta: {
      title: "Terminos y Condiciones | Flow",
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
