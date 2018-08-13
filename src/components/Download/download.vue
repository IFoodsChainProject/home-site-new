<template>
  <div class="downloadPage">
    <top></top>
    <div class="container downloadCon">
      <div class="row">
        <div class="col-sm-12 col-md-6 ">
          <div class="phone">
            <img src="../../assets/images/d1.png" alt="">
          </div>

        </div>
        <div class="col-sm-12 col-md-6">
          <div class="downloads">
            <h2>IFOOD钱包</h2>
            <div>打造全球食品检测共享生态</div>
            <div>MAKE GLOBAL FOOD DETECTION SHARED ECO</div>
            <div class="download-alt">
              <div class="img-btn">
                <div class="download-btn"><img src="../../assets/images/d4.png" alt=""> IOS下载</div>
                <div class="download-btn"><img src="../../assets/images/d2.png" alt=""> Android下载</div>
              </div>
              <div class="ma"><img src="../../assets/images/d3.png" alt=""></div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script type="text/javascript">
  import Top from '../Header/header.vue'
  import Bottom from '../Footer/Footer.vue'

  export default {
    name: 'download',
    components: {
      Top,
      Bottom
    }
  }
</script>

<style scoped>
.downloadPage{
  background: #f5f5f5;
  overflow: hidden;
}
.downloadCon{
 margin: 80px auto;
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
    text-align: center;
  }

  .downloads h2 {
    color: #122a41;
    margin-bottom: 10px;
    text-align: left;
  }

  .downloads div {
    color: #555d64;
    text-align: left;
  }
  .download-alt{

  }
  .img-btn {
    display: inline-block;
    color: #122a41;
  }

  .img-btn .download-btn {
    width: 143px;
    height: 55px;
    border-radius: 9px;
    border: 1px solid #122a41;
    margin: 30px 0 30px;
    line-height: 55px;
    text-align: center;
  }

  .img-btn .download-btn img {
    width: 19px;
    height: 23px;
  }

  .ma {
    display: inline-block;
  }

  .ma img {
    width: 160px;
    height: 160px;
    margin-left: 20px;
    margin-bottom:90px;
  }
  *{
    font-family: Helvetica,Tahoma,Arial,"Hiragino Sans GB","Microsoft YaHei","微软雅黑","华文细黑","宋体",sans-serif;
  }
  @media screen and (max-width:480px) {
.downloads{
  margin-top: 40px;

}
.downloadCon{
 margin: 40px auto;
}
  }
</style>
