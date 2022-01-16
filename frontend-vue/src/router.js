import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Main from './components/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})