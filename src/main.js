import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/Average+Sans.css'

router.beforeEach((to, from, next) => {
    if (to.matched.length < 1) {
        next(false);
        router.push('/');
    } else {
        next();
    }
})

createApp(App)
    .use(router)
    .mount('#app')
