import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>
    import('@/views/home.vue')
  },{
    path:'/informacion-abonados',
    name: 'Informacion Abonados',
    component:()=>
    import('../views/legal/InformacionAbonados.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
