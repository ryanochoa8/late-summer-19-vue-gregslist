import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Cars from './views/Cars.vue'
// @ts-ignore
import Houses from './views/Houses.vue'
//@ts-ignore
import Jobs from './views/Jobs.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
    {
      path: '/houses',
      name: 'houses',
      component: Houses
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/houses/:houseId',
      name: 'house',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        //@ts-ignore
        return import(/* webpackChunkName: "about" */ './views/House.vue') //NOTE change this to House
      }
    },
    {
      path: '/cars/:carId',
      name: 'car',
      component: function () {
        //@ts-ignore
        return import(/* webpackChunkName: "car" */ './views/Car.vue')
      }
    },
    {
      path: '/jobs/:jobId',
      name: 'job',
      component: function () {
        //@ts-ignore
        return import(/* webpackChunkName: "car" */ './views/Job.vue')
      }
    },
    {
      path: '*',
      redirect: '/cars'
    }
  ]
})
