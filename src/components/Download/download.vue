<template>
  <div class="download">
    <top></top>
    <div class="background">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 ">
            <div class="phone">
              <img src="../../assets/images//d1.png" alt="">
            </div>

          </div>
          <div class="col-sm-12 col-md-6">
            <div class="downloads">
              <h2>{{$t('download.title')}}</h2>
              <!-- <div class="text-left">{{$t('download.div1')}}</div> -->
              <div class="text-left">{{$t('download.div2')}}</div>
              <!-- <div class="download-alt"> -->
                <div class="row download-con">
                  <div class="download-box  col-xs-6 col-sm-6 col-md-6">
                    <div>
                      <img src="../../assets/images/erc20-wallet-android-qrcode.png" alt="">
                    </div>
                    <!-- <p>{{$t('download.btn1')}}</p> -->
                    <div class="download-btn" @click="downloadApk"><img src="../../assets/images/d4.png" alt=""> {{$t('download.btn1')}}</div>
                  </div>
                  <!-- <div class="download-box  col-xs-6 col-sm-6 col-md-6">
                    <div><img src="../../assets/images/ios-download.png" alt=""></div>
                    <p>{{$t('download.btn2')}}</p>
                     <div class="download-btn" @click="iosDownload"><img src="/static/img/d2.png" alt=""> {{$t('download.btn2')}}</div>
                  </div> -->
                </div>

              <!-- </div> -->

            </div>
          </div>
        </div>
      </div>
    </div>
          <!-- 全局提示框 -->
      <div  v-show="isAlert" class="dialog-tips dialog-center">
          <!-- <div>ios端将近期发布</div> -->
          ios端将近期发布
      </div>
    <bottom></bottom>
  </div>
</template>

<script type="text/javascript">
  import Top from '../Header/header.vue'
  import Bottom from '../Footer/Footer.vue'

  export default {
    name: 'download',
    data(){
       return{
        isAlert:false
       }
    },
    components: {
      Top,
      Bottom
    },
    methods:{
      downloadApk:function(){
        window.location.href="https://www.ifoodschain.com/download/android/ifood-android-V1.2.2.apk"
      },
      iosDownload:function(){
        this.isAlert = true;
        var that = this;
        setTimeout(function(){
          that.isAlert = false;
        }, 1000)
        // window.location.href='itms-services://?action=download-manifest&url=https://www.ifoodschain.com/download/ios/manifest.plist'
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>


.dialog-tips{
    position: fixed;
    z-index: 100;
    min-width: 220px;
    padding: 40px 22px;
    white-space: nowrap;
    background-color:rgba(0,0,0,.8);
    box-shadow: 0px 8px 15px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
     transition: all .3s ease;
     color: #fff;
     border-radius: 4px;
}
/*    .dialog-tips-icon{
        width: 54px;
        height: 54px;
        display: inline-block;
        margin-bottom: 13px;
    }*/
.dialog-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.download{
  background:#ddd;
}
  .background{
    background: url("../../assets/images/bg.png");
   background-size: 100% 100%;
  }
  .phone {
    margin-top: 100px;
    width: 100%;
    text-align: center;
  }

  .phone img {
    display: inline-block;
    vertical-align: middle;
    width: 294px;
    height: 566px;
    margin: 0 auto;
  }

  .downloads {
    margin-top: 200px;
    width: 100%;
    /*text-align: center;*/
  }

  .downloads h2 {
    color: #122a41;
    margin-bottom: 10px;
    text-align: left;
  }

  .download-con{
    margin: 40px 0;
  }

  /*.downloads div {
    color: #555d64;
    text-align: left;
  }*/
  .download-box>div {
     color: #555d64;
    text-align: left;
  }
  .download-box>div:nth-of-type(1) img{
  width: 140px;
  display: inline-block;
  }
 .download-btn{
   display: inline-block;
       width: 143px;
    height: 48px;
    border-radius: 9px;
    border: 1px solid #122a41;
    margin: 30px 0 30px;
    line-height: 48px;
    text-align: center !important;
   /*margin: 40px 30px 20px*/
 }
.download-btn img{
    width: 19px;
    height: 23px;
}
  .download-btn p{
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
  }
/*.img-btn{
  display: inline-block;
}*/
  *{
    font-family: Helvetica,Tahoma,Arial,"Hiragino Sans GB","Microsoft YaHei","微软雅黑","华文细黑","宋体",sans-serif;
  }
  @media screen and (max-width:480px) {
.downloads{
  margin-top: 40px;
}
  }
</style>
