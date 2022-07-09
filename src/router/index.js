import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/home',
    name: 'HomePage',
    component: () =>
        import ( /* webpackChunkName: "HomePage" */ '../views/HomePage.vue')
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router