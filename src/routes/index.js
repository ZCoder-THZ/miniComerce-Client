import { createRouter, createWebHistory } from 'vue-router';
import Articles from '../components/Articles.vue'
import Home from '../components/Home.vue'
import Filter from '../components/Filter.vue'
import Detail from '../components/Detail.vue'
const routes = [
    {
        path: '/',
        component: Home,
        name: Home
    },
    {
        path: '/detail',
        component: Detail,
        name: Detail
    },
    {
        path: '/filter',
        component: Filter,
        name: Filter
    },

    {
        path: '/articles',
        component: Articles,
        name: Articles
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
