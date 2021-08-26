import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import {
    VueReCaptcha
} from "vue-recaptcha-v3";

createApp(App).use(router).use(VueReCaptcha, {
    siteKey: "6Lel4c4bAAAAAPx-Uof6k7_y5tPCepAxYgTUS8_l"
}).mount('#app')