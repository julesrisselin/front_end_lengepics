import { createMemoryHistory, createRouter } from 'vue-router'

import home from './Views/home.vue'
import currentChallenge from './Views/currentChallenge.vue'
import participations from './Views/participations.vue'
import currentParticipations from './Views/currentParticipations.vue'
import login from './Views/login.vue'

const routes = [
    { path: '/', component: home },
    {path: '/currentChallenge', component: currentChallenge},
    {path: '/participations', component: participations},
    {path: '/currentParticipations', component: currentParticipations},
    {path: '/login', component: login},
]


const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router