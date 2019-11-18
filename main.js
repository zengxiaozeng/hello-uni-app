import Vue from 'vue'
import App from './App'
import store from './store'
import 'static/iconFont.css'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
