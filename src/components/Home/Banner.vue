<template>
      <!-- Hero Section -->
    <div class="hero-area" id="home">
        <div id="hero-slider-screen" class="owl-carousel owl-theme hero-slider-inner">

            <div class="item">
                <img src="../../assets/images/bg2.jpg" alt="responsive img">
                <div class="hero-caption">
                    <div class="hero-caption-inner">
                        <h3>{{$t('home.banner.banner1.slogan')}}</h3>
                        <h1>IFOODS CHAIN</h1>
                        <p>{{$t('home.banner.banner1.description')}}</p >
                        <a :href="$t('home.banner.banner1.whitePaperUrl', [sources])"  target="_blank" class="btn btn-default btn-sm-outline" role="button">{{$t('home.banner.banner1.whitePaper')}}</a>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/bg1.png" alt="responsive img">
                <div class="hero-caption">
                    <div class="hero-caption-inner superProbe-inner">

                        <img :src="$t('home.banner.banner2.img')" alt="superProbe">
                        <p>
                          {{$t('home.banner.banner2.description')}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero Section -->
</template>

<script>
// import Swiper from 'swiper'
import Cookies from 'js-cookie'
import owlCarousel from '../../../static/js/owl.carousel.min.js'
import Bridge from '../../assets/js/bridge.js'
export default {
 data(){
      return {
      mySwiper:'',
      sources: this.$i18n.locale  == 'CH' ? 'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/whitepaper/whitepaper_20180607_cn.pdf' : 'https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/whitepaper/whitepaper_20180920_en.pdf'
    }
  },
  created(){
    this.getWhitePaperUrl();
  },
  methods: {
      getWhitePaperUrl:function(){
         var sources = JSON.parse(Cookies.get('source'));
         this.sources = Cookies.get('language') == 'CH' ? sources.whitePaperUrlCn : sources.whitePaperUrlEn
         console.log(this.sources)
      },
      //  _initSwiper() {
      //   // let Swiper = swiperAsync; //异步加载的
      //   const container = this.$refs.swiper; //ref='swiper'
      //   const pagination= this.$refs.pagination;
      //   const config = {  //swiper的参数配置

      //     slidesPerView: 'auto',
      //     centeredSlides: true,
      //     initialSlide: this.activeIndex,
      //     loop: true,
      //     autoplay: 1000,
      //     speed: 1000,
      //     paginationClickable :true,
      //     observer: true ,
      //     pagination: {
      //       el:pagination,
      //       clickable :true
      //     },

      //   };
      //   this.mySwiper = new Swiper(container, config);
      // },
      hero_slider_carousel() {
        var owl = $("#hero-slider-screen");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            smartSpeed: 1000,
            stopOnHover:true,
            responsiveClass: true,
            navigation: true,
            items: 1,
            touchDrag:false,
            addClassActive: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 10000,
            responsive: {}
        });
    }
    },
    mounted(){
      // this._initSwiper();
      this.hero_slider_carousel();
      // Bridge.$on('msg',(e)=>{
      //   // alert(e)
      //   this.sources = e;
      // })
    },

}
</script>

<style scoped>
  /*@import '../../../node_modules/swiper/dist/css/swiper.min.css';*/

  .swiper-container{
    height: 100vh;
  }
  .swiper-slide.swiper-slide1{
    background: url('../../assets/images/bg2.jpg') no-repeat center ;
    background-size:  100% 100%;

  }
  .swiper-slide.swiper-slide2{
    background: url('../../assets/images/bg1.png') no-repeat center ;
    background-size:  auto 100%;

  }




</style>
