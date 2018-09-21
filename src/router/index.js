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
          requireCountry: true // 添加该字段，表示进入这个路由是需要判断
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
      // if ( Cookies.get('countryId') !== 'cn') {  // 通过cookies获取countryId，非国内访问展示首页
      //   next();
      // }
      // else {
      //   window.location.href = '../../static/noAccess.html';
      // }

    $.ajax({
      url:'https://api.ifoodschain.com/public/getcountryid',
      type:'GET',
                  // xhrFields:{
                  //     withCredentials:  true
                  // },
                  // crossDomain:  true,
                  dataType:'json',
                  success:function(res){
                   if(res){
                     // this.$nextTick(function () {
                       setTimeout(function () {
                         document.body.removeChild(document.getElementById('wrapper-loading'))
                       },1000)
                     // })
                     if(res.data.country_id == 'cn'){
                          // 国内访问
                          var source = {
                            whitePaperUrlCn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/whitepaper/whitepaper_20180607_cn.pdf',
                            whitePaperUrlEn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/whitepaper/whitepaper_20180920_en.pdf',
                            videoCn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/videos/ifoodschain-cn.mp4',
                            videoEn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/videos/ifoodschain-en.mp4'
                          }
                          Cookies.set('source', JSON.stringify(source))
                          Cookies.set('countryId',res.country_id)
                          to.meta.requireCountry = false;
                          window.location.href = '../../static/noAccess.html';

                        }else{
                          // 国外访问
                          var source = {
                            whitePaperUrlCn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/whitepaper/whitepaper_20180607_cn.pdf',
                            whitePaperUrlEn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/whitepaper/whitepaper_20180920_en.pdf',
                            videoCn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/videos/ifoodschain-cn.mp4',
                            videoEn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/videos/ifoodschain-en.mp4'
                          }
                          Cookies.set('source', JSON.stringify(source))
                          to.meta.requireCountry = false;
                          next();
                        }
                      }
                    }
                  });
  }
  else {
    next();
  }

 });
export default router;
