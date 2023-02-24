import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import Layout from '@/layout'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerView:[]
  },
  getters: {
  },
  mutations: {
    GetRouter(state){
      // 获取 router路由
      console.log(321);
      let routersname = [{path:'AboutView',name:"关于"},{path:'home',name:"主页"},{path:'info',name:"详细"},]
      let routers = []
      routers = routersname.map((i) =>{
        console.log(`@/views/${i.path}`);
        let component = null
        // if (require('@/views/' + i.path + '.vue'))
        component = (resolve) => require([`@/views/${i.path}`], resolve);
        return {
          path:"/",
          component: Layout,
          children:[{
            path:i.path,
            // component:() => import('@/views/' + i.path + '.vue'),
            component:component,
            meta:{
              title:i.name,
            }
          }]
        }
      })
      state.routerView = routers
      routers.forEach((i) => {
        router.addRoute(i)
      }) 
      
    }
  },
  actions: {
    getRouter({commit}){
      commit('GetRouter')
    }
  },
  modules: {
  }
})
