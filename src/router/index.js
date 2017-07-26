//路由器模块
import Vue from 'vue';
import VueRouter from 'vue-router';
import about from '../components/about.vue';
import home from '../components/home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/about',
      components:about
    },
    {
      path:'/home',
      components:home
    },
    {
      path:'/',
      redirect:about
    }
  ]
});
