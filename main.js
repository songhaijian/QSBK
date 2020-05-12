import Vue from 'vue'
import App from './App'
import request from "./utils/request.js"
import utils from "./commen/utils.js"

Vue.config.productionTip = false
Vue.prototype.request = request
Vue.prototype.utils = utils

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
