import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'HomePage',
        component: () =>
            import ( /* webpackChunkName: "HomePage" */ '../views/HomePage.vue')
    },
    {
        path: '/home',
        name: 'PageContainer',
        component: () =>
            import ( /* webpackChunkName: "PageContainer" */ '../views/PageContainer.vue'),
        children: [{
            path: '/role-models',
            name: 'home',
            component: () =>
                import ( /* webpackChunkName: "RoleModels" */ '../views/RoleModels.vue')
        }, ]

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router