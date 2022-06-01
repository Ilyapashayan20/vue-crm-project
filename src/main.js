import { createApp, Vue } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import  Vuelidate from 'vuelidate'
import dateFilter from '@/filters/date.filter'
import 'materialize-css'
import 'materialize-css/dist/js/materialize.min'
import Loader from '@/components/app/Loader'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'


 

firebase.initializeApp({
  apiKey: "AIzaSyBFZw5B6zvgtZm32GnshKAG0w-zCqdP51w",
  authDomain: "vue-crm-90071.firebaseapp.com",
  projectId: "vue-crm-90071",
  storageBucket: "vue-crm-90071.appspot.com",
  messagingSenderId: "359999323607",
  appId: "1:359999323607:web:32971b6c63026cf84d9f92",
  measurementId: "G-M2LYQP6XVK"
})
let app 
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = createApp(App).use(store).use(router).use(Vuelidate).component('Loader',Loader).mount('#app')
  }
})
