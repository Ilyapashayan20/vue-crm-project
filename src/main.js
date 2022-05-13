import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import 'materialize-css'
import 'materialize-css/dist/js/materialize.min'
 

const app = createApp(App)

app.use(store).use(router).mount('#app')
