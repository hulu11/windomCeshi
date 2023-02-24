import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    children:[
      {
      path:"home",
      component: () => import("@/views/HomeView"),
      meta:{
        title:"你好呀",
        keepAlive:false
      }
    },
  ]
  },
]

const router = new VueRouter({
  routes
})

export default router
