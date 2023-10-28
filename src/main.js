import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './components/HomeComp.vue' 
import ChatPage from './components/ChatComp.vue' 
import NotFoundPage from './components/NotFound.vue' 
import QuoteApi from "./components/QuoteApiComp.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatPage,
    },
    {
        path: "/quote",
        name: "Quote",
        component: QuoteApi,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

const app = createApp(App)
app.use(router)
app.mount('#app')
