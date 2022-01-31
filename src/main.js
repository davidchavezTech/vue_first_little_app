// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test},
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  // components: { App },
  // template: '<App/>'
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount("#app")

