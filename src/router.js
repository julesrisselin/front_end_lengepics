import { createMemoryHistory, createRouter } from 'vue-router'

import Test from './test.vue'

const routes = [
    { path: '/test', component: Test },
]


const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router