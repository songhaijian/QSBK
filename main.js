import Vue from 'vue'
import App from './App'
import request from "./utils/request.js"
import utils from "./commen/utils.js"
import config from "./commen/config.js"

Vue.config.productionTip = false
Vue.prototype.request = request
Vue.prototype.utils = utils
Vue.prototype.config = config

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
