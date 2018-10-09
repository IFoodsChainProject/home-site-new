<template>
  <div id="mobile-download">
    <div class="container ">
      <header>
        <img src="../../assets/images/mobileLogo.png">
        <h2>IFOOD Wallet</h2>
      </header>
      <section>
        <img src="../../assets/images/ios-download.png" alt="">
        <button @click="iosDownload">
          <img src="/static/img/d2.png" alt=""> 
          <span>立即安装</span>
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    iosDownload(){
      window.location.href='itms-services://?action=download-manifest&url=https://www.ifoodschain.com/download/ios/manifest.plist'
    }
  }
}
</script>

<style scoped>
#mobile-download{
  background: #092a43;
  background-position: 0rem 0rem;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
}
*{
  font-family: Helvetica,Tahoma,Arial,"Hiragino Sans GB","Microsoft YaHei","微软雅黑","华文细黑","宋体",sans-serif;
}
.container{
  position: absolute;
  width: 25rem;
  height: 42rem;
  top:50%;
  left: 50%;
  margin-left: -12.5rem;
  margin-top: -21rem;
  text-align: center;
}
img{
  max-width: 100%;
}
h2{
  margin: 0;
  padding: 0;
}
header{
  margin-bottom: 6rem;
}
header img{
  width: 7rem;
  border-radius: .8rem;
  margin-bottom: 1rem;
}
header h2{
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;
}
section{
  width: 20rem;
  margin: auto;
}
section>img{
  display: block;
  width: 19rem;
  margin: auto;
}
section button{
  display: block;
  width: 18rem;
  outline: none;
  height: 4.5rem;
  border-radius: 1rem;
  border: 1px solid #092a43;
  margin: 2rem 1rem;
  line-height: 4.5rem;
  text-align: center !important;
  background-color:#fff;
  font-weight: 600;
  color: #092a43;
}
section button>img{
  vertical-align:sub;
  width: 1.6rem;
  height: 2rem;
}

@media only screen and (max-width: 328px){
  header h1{
    font-size: 2.4rem;
  }
}

</style>
