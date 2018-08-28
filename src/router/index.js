import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home/Home.vue'
import Demo from '@/components/demo.vue'
import Ecology from '@/components/EcoModel/EcoModel.vue'
import Application from '@/components/Application/Application.vue'
import Technology from '@/components/Technology/Technology.vue'
import SuperProbe from '@/components/SuperProbe/SuperProbe.vue'
import News from '@/components/News/News.vue'
import Team from '@/components/Team/Team.vue'
import NewDetail from '@/components/News/NewsDetail.vue'
import Download from '@/components/Download/download.vue'
 import Cookies from 'js-cookie'
Vue.use(Router)

const router =new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
          requireCountry: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: HelloWorld
    },
    {
      path:'/ecology',
      name:'ecology',
      component:Ecology
    },
    {
      path:'/application',
      name:'application',
      component:Application
    },
    {
      path:'/Technology',
      name:'technology',
      component:Technology
    },
    {
      path:'/SuperProbe',
      name:'superProbe',
      component:SuperProbe
    },
    {
      path:'/News',
      name:'news',
      component:News
    },
    {
      path:'/Team',
      name:'team',
      component:Team
    },
    {
      path:'/Download',
      name:'download',
      component:Download
    },
    {
      path:'/News/detail/:id',
      name:'news-detail',
      component:NewDetail
    }
  ]
})
 router.beforeEach((to, from, next) => {
  if (to.meta.requireCountry) {  // 根据国家判断是否显示官网
      if ( Cookies.get('countryId') !== 'cn') {  // 通过cookies获取countryId，非国内访问展示首页
        next();
      }
      else {
        window.location.href = '../../static/noAccess.html'; 
      }
  }
  else {
    next();
  }
  
 });
export default router;