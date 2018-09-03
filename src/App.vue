<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
export default {
     created:function(){
       // this.getSources();
     },
    methods:{
      getSources:function(){
        var that = this;
        $.ajax({
          url:'https://www.ifoodschain.com/officialWebsite/getcountryid',
          type:'GET',
                // xhrFields:{
                //     withCredentials:  true
                // },
                // crossDomain:  true,
                dataType:'json',
                success:function(res){
                 if(res){
                   res=JSON.parse(res)
                   if(res.country_id == 'cn'){
                        // 国内访问
                        var source = {
                          whitePaperUrlCn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/whitepaper/whitepaper_20180607_cn.pdf',
                          whitePaperUrlEn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/whitepaper/whitepaper_20180827_en.pdf',
                          videoCn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/videos/ifoodschain-cn.mp4',
                          videoEn:'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/videos/ifoodschain-en.mp4'
                        }
                        Cookies.set('source', JSON.stringify(source))
                        Cookies.set('countryId',res.country_id) 
                        

                      }else{
                        // 国外访问
                        var source = {
                          whitePaperUrlCn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/whitepaper/whitepaper_20180607_cn.pdf',
                          whitePaperUrlEn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/whitepaper/whitepaper_20180827_en.pdf',
                          videoCn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/videos/ifoodschain-cn.mp4',
                          videoEn:'https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/videos/ifoodschain-en.mp4'
                        }
                        Cookies.set('source', JSON.stringify(source))
                      }
                    }
                  }
                });
      }
    },
    mounted(){
     this.$nextTick(function () {
         setTimeout(function () {
           document.body.removeChild(document.getElementById('wrapper-loading'))
         },1000)
     })
   }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
