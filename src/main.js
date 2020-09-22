/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




// import VueLocalForage from 'vue-localforage'
// Vue.use(VueLocalForage)

//?
Vue.prototype.$http = axios
axios.defaults.headers.common = {'Authorization':'Bearer '+localStorage.auth}  //not asinc 
axios.defaults.baseURL = "http://10.28.86.195:8000/";

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'

import './registerServiceWorker'
// plugin setup
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(LightBootstrap)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  mode:'history',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// router.beforeEach((to, from, next) => {
//   if (!localStorage.isAuthenticated) {
//       next({
//           path: '/login',
//           query: { redirect: to.fullPath }
//       })
//   } else {
//       next()
//   }
// });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.dashboardRoutes)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.auth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  baseURL:"http://127.0.0.1:8000/", 
})
