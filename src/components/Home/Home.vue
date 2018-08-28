<template>
  <div>


    <top></top>
    <banner></banner>
    <div class="bi_box">
      <h2>{{$t('home.ifood.title')}}</h2>
      <a href="  https://www.allcoin.ca/trade/ifood2eth"><img src="../../assets/images/bi1.png" alt=""  class="biimg"></a>
      <a href="  https://www.vnbig.com/exchange/trade?code=VNBIG_ETH_IFOOD"><img src="../../assets/images/bi2.png" alt="" class="biimg"></a>
      <a href="https://exchange.fcoin.com/ex/gpm/ifood-eth"><img src="../../assets/images/bi3.png" alt="" class="biimg"></a>
    </div>
    <!-- IFOODS链应用场景  -->
    <!-- End About Section -->
    <div class="about-area inner-padding" ref="aboutSilder">
      <div class="container">
        <div class="about-area-inner">
          <div class="row">
            <div class="col-sm-12 col-md-6 foo" data-sr='enter'>
              <div id="about-silder" class="owl-carousel owl-theme about-slider">
                <div class="item">
                  <img src="../../assets/images/about1.jpg" alt="responsive img">
                </div>
                <div class="item">
                  <img src="../../assets/images/about2.jpg" alt="responsive img">
                </div>
                <div class="item">
                  <img src="../../assets/images/about3.jpg" alt="responsive img">
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-5 foo" data-sr='enter'>
              <div class="section-title-area-1">
                <h2 class="section-title">{{$t('home.application.title')}}</h2>
              </div>
              <div class="about-content">
                <p class="text-bold">{{$t('home.application.description')}}</p>
                <p class="float-r">
                  <!-- <a href="service-en.html">learn more>></a> -->
                  <router-link to="/application">{{$t('home.application.readmore')}}</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End About Section -->

    <!-- Service Section -->
    <div class="service-area ">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4" v-for="item in $t('home.application.items')">
            <div class="service-widget foo" data-sr='enter'>
              <img :src="item.iconurl" alt="responsive img">
              <h4>{{item.title}}</h4>

              <p>{{item.des}}</p>

            </div>
          </div>
          <!--                     <div class="col-xs-12 col-sm-6 col-md-4">
                                  <div class="service-widget foo" data-sr='enter'>
                                      <img src="../../assets/images/icon (1).png" alt="responsive img">
                                      <h4>Distributed data value protection and delivery</h4>
                                      <p>Based on block chain technology, the data of individuals and organizations will be protected by Ifoods chain. At the same time, data models will be paid for data transmission and data transactions value delivery.</p >

                                  </div>
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-4">
                                  <div class="service-widget foo" data-sr='enter'>
                                      <img src="../../assets/images/icon (5).png" alt="responsive img">
                                      <h4>Distributed food test network <br>
                                          <br>
                                      </h4>
                                      <p>The distributed food test network, based on the shared, open and distributed consensus of
          the block chain, is not only the central testing organization, but also the thousands of super
          probes and other smart device owners.</p >

                                  </div>
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-4">
                                  <div class="service-widget foo" data-sr='enter'>
                                      <img src="../../assets/images/icon (2).png" alt="responsive img">
                                      <h4>Distributed eco maintenance and administration</h4>
                                      <p>The distributed food safety and quality test eco is guaranteed by using Ifoods chain
          trade matching mechanism, payment mechanism, evaluation feedback mechanism, and
          according to the super node voting governance, and the whole people participation.</p >

                                  </div>
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-4">
                                  <div class="service-widget foo" data-sr='enter'>
                                      <img src="../../assets/images/icon (3).png" alt="responsive img">
                                      <h4>Distributed e-commerce network<br/><br/></h4>
                                      <p>Ifoods chain based on the large data obtained by the probe system, block chain technology,
          and AI to establish the Distributed E-Commerce DAPP, to ensure the safety, high quality, and
          verifiable of the distribution of electric business food.</p >

                                  </div>
                              </div> -->
        </div>
      </div>
    </div>
    <!-- End Service Section -->
    <!-- IFOODS链应用场景 end -->

    <!-- 行业痛点-->
    <div class="working-policy-area  working-policy-bg inner-padding">
      <div class="container">
        <div class="working-policy-inner">
          <div class="row">
            <div class="col-sm-12  foo" data-sr='enter'>
              <div class="section-title-area-4">
                <h2 class="section-title">{{$t('home.painPoint.title')}}</h2>
              </div>
            </div>
          </div>
          <div class="row">

            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <div class="row">
                <div class="col-sm-6 col-md-4">
                  <div class="working-policy-list foo" data-sr='enter'>
                    <div class="policy-icon">
                      <i class="fa fa-book"></i></div>
                    <div class="policy-short">
                      <h4 class="policy-title minHeight">{{$t('home.painPoint.item1')}}</h4>

                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="working-policy-list foo" data-sr='enter'>
                    <div class="policy-icon">
                      <i class="fa fa-hourglass-half"></i></div>
                    <div class="policy-short">
                      <h4 class="policy-title minHeight">{{$t('home.painPoint.item2')}}</h4>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="working-policy-list foo" data-sr='enter'>
                    <div class="policy-icon">
                      <i class="fa fa-paper-plane"></i></div>
                    <div class="policy-short">
                      <h4 class="policy-title minHeight">{{$t('home.painPoint.item3')}}</h4>

                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="working-policy-list foo" data-sr='enter'>
                    <div class="policy-icon">
                      <i class="fa fa-star"></i></div>
                    <div class="policy-short">
                      <h4 class="policy-title minHeight">{{$t('home.painPoint.item4')}}</h4>

                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="working-policy-list foo" data-sr='enter'>
                    <div class="policy-icon">
                      <i class="fa fa-shield"></i></div>
                    <div class="policy-short">
                      <h4 class="policy-title minHeight">{{$t('home.painPoint.item5')}}</h4>

                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="working-policy-list foo" data-sr='enter'>
                    <div class="policy-icon">
                      <i class="fa fa-tags"></i></div>
                    <div class="policy-short">
                      <h4 class="policy-title minHeight">{{$t('home.painPoint.item6')}}</h4>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End 行业痛点 -->
    <!-- 超级探针 -->
    <div class="feature-area " id="technical">
      <div class="container">

        <div class="row inner-padding">
          <div class="col-sm-12 col-md-4">
            <div class="feature-img foo" data-sr='enter'>
              <img src="../../assets/images/superProbeBg.png" alt="Super probe" class="mar-t10">
            </div>
          </div>
          <div class="col-sm-12 col-md-8 foo" data-sr='enter'>
            <div class="section-title-area-2">
              <h3 class="">{{$t('home.superProbe.title')}}</h3>
              <p class="text-bold font16">{{$t('home.superProbe.des')}}

              <h4>{{$t('home.superProbe.advantagesDes')}}</h4>
              <ul style="padding:0;">
                <li><i class="fa fa-clock-o mar-r16" style="margin-right: 18px;"></i>{{$t('home.superProbe.advantages1')}}
                </li>
                <li><i class="fa fa-exchange mar-r16"></i>{{$t('home.superProbe.advantages2')}}</li>
                <li><i class="fa fa-suitcase mar-r16" style="margin-right: 18px;"></i>{{$t('home.superProbe.advantages3')}}
                </li>
              </ul>
              <p class="float-r">
                <!-- <a href="superProbe-en.html">{{$t('home.superProbe.readmore')}}</a> -->
                <router-link to='/superProbe'>{{$t('home.superProbe.readmore')}}</router-link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- /超级探针 -->
    <!-- 视频 -->
    <!-- 视频 -->
    <div class="video-area inner-padding" id="video-area">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 foo" data-sr='enter'>
            <div id="video" class="owl-carousel video-silder ">
              <div class="item">
               <!--  <video src="https://ifoodschain-home-static.oss-ap-northeast-1.aliyuncs.com/videos/ifoodschain-en.mp4"
                       controls poster="../../assets/images/video/ifoodschainVideoBannerEn.jpg"></video> --> 
                 <video :src="sources.videoEn"  controls poster="../../assets/images/video/ifoodschainVideoBannerEn.jpg"></video>
              </div>
              <div class="item">
                <video :src="sources.videoCn"
                       controls poster="../../assets/images/video/ifoodschainVideoBanner.jpg"></video>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end 视频 -->

    <!-- roadMap -->
    <div class="roadMap-area inner-padding roadMap-bg" id="roadMap-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-12  foo" data-sr='enter'>
            <div class="section-title-area-4">
              <h2 class="section-title">{{$t('home.roadMap.title')}}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 foo">
            <div class="VivaTimeline" ref="VivaTimeline">
              <dl>
                <dt class="year18 yearY">{{$t('home.roadMap.year2018.year')}} <i class="fa fa-angle-down fa-lg"></i>
                </dt>
                <dd class="pos-left clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2018.month9')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2018.event9')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-right clearfix">
                  <div class="circ"></div>
                  <div class="time">{{$t('home.roadMap.year2018.month10')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2018.event10')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-left clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2018.month11')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2018.event11')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>

                <dt class="year19 yearY">2019 <i class="fa fa-angle-down fa-lg"></i></dt>
                <dd class="pos-right clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month1')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event1')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-left clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month3')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event3')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-right clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month5')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event5')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-left clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month7')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event7')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-right clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month8')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event8')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-left clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month10')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event10')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-right clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month11')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event11')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-left clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2019.month12')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2019.event12')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dt class="year19 yearY">2020<i class="fa fa-angle-down fa-lg"></i></dt>
                <dd class="pos-right clearfix">
                  <div class="circ"></div>
                  <div class="time"> {{$t('home.roadMap.year2020.month6')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2020.event6')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>
                <dd class="pos-left clearfix">
                  <div class="circ"></div>
                  <div class="time">{{$t('home.roadMap.year2020.month12')}}</div>
                  <div class="events">

                    <div class="events-body">
                      <div class="row">

                        <div class="events-desc">
                          {{$t('home.roadMap.year2020.event12')}}
                        </div>
                      </div>

                    </div>

                  </div>
                </dd>


              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- roadMap end -->
    <team></team>
    <news></news>
    <partners></partners>
    <bottom></bottom>
  </div>
</template>
<script>
  import Top from '../Header/header.vue'
  import Bottom from '../Footer/Footer.vue'
  import Banner from './Banner.vue'
  // import Swiper from 'swiper'
  import owlCarousel from '../../../static/js/owl.carousel.min.js'
  import vivaTimeline from '../../../static/js/jquery.eeyellow.Timeline.js'
  import Team from './Team.vue'
  import News from './News.vue'
  import Partners from './Partners.vue'
    import Cookies from 'js-cookie'
// 中央事件
import Bridge from '../../assets/js/bridge.js'
  export default {
    name: 'home',
    components: {
      Top,
      Banner,
      Team,
      News,
      Partners,
      Bottom
    },
    data() {
      return {
        loading:true,
        sources:{
          videoCn:"https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/videos/ifoodschain-cn.mp4",
          videoEn:"https://ifoodschain-home-static-domestic.oss-cn-beijing.aliyuncs.com/videos/ifoodschain-en.mp4"
        }
      }
    },
    created(){
      // Bridge.$on('videoUrl',(e)=>{
      //   // alert(e)
      //   this.sources = e;
      // })    
      this.getVideoUrl();
    },
    methods: {
      getVideoUrl:function(){
         this.sources = JSON.parse(Cookies.get('source'));
         // console.log(this.sources)
      },
      navStyle() {
        $(window).scroll(function () {
          var wScroll = $(this).scrollTop();

          if (wScroll > 0) {
            $('.navbar-default').addClass('sticky');
          } else {
            $('.navbar-default').removeClass('sticky');
          }

          // Scroll top
          if (wScroll > 800) {
            $('.scroll-top').css('display', 'block');
          } else {
            $('.scroll-top').css('display', 'none');

          }

        });
      },
      initScrollAnimation() {
        window.sr = ScrollReveal({duration: 800});
        sr.reveal('.foo');
        sr.reveal('.bar');

      },
      about_slider_carousel() {
        var owl = $("#about-silder");
        owl.owlCarousel({
          loop: true,
          margin: 10,
          smartSpeed: 2000,
          responsiveClass: true,
          navigation: false,
          items: 1,
          addClassActive: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          responsive: {}
        });
      },
      video() {
        var owl = $("#video");
        owl.owlCarousel({
          loop: true,
          // margin: 75,
          smartSpeed: 500,
          responsiveClass: true,
          navigation: false,
          items: 1,
          addClassActive: true,
          dots: true,
          autoplay: false,
          autoplayTimeout: 100000,
        });
      },
      // _initswiper() {
      //   const container = this.$refs.swiper;
      //   new Swiper(container, {})

      // },
      // _initVideoSwiper() {
      //   const container = this.$refs.videoSwiper;
      //   const videoPagination = this.$refs.videoPagination;
      //   let config = {
      //     pagination: {
      //       el: videoPagination,
      //     },
      //   }
      //   new Swiper(container, config);
      // },
      hideItem(ele) {
        $.each(ele, function (i, e) {
          $(e).hide()
        })
      },
      toggleItem(ele) {
        $.each(ele, function (i, e) {
          $(e).toggle();
        })
      },
      timeLine() {
        var that = this;
        const dd19 = $('.year19').nextAll('dd');
        // 默认显示2019年信息
        this.hideItem(dd19);
        $('.VivaTimeline').vivaTimeline({
          carousel: true,
          carouselTime: 3000
        });
        $('.yearY').click(function () {
          var nextYear = $(this).nextAll('.yearY').eq(0);
          var dd = $(this).nextUntil(nextYear)
          that.toggleItem(dd)
        })

      },


    },
    mounted() {
      // this._initswiper();
      // this._initVideoSwiper();
      this.timeLine();
      this.about_slider_carousel();
      this.video();
      this.navStyle();
      this.initScrollAnimation();


      // if(this.loading){
      //   setTimeout(function(){
      //     $(".wrapper-loading").hide();
      //     this.loading = false
      //   },1000)
      //
      // }

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .working-policy-bg {
    background: url(../../assets/images/bg-t.jpg) no-repeat center / 100% 100%;
  }

  .video-area {
    background: url(../../assets/images/video-bg.png) no-repeat center / 100% 100%;
  }

  .swiper-container.video-silder {
    padding-bottom: 35px;
  }

  .swiper-slide video {
    width: 100%;
  }

  .roadMap-bg {
    background-image: url(../../assets/images/banner-6.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  /*应用场景 items样式*/
  .service-widget h4 {
    min-height: 56px;
  }

  .bi_box {
    text-align: center;
    padding: 40px;
  }
  .biimg{
    width: 200px;
    height: 100px;
    margin: 40px 60px;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
  }
  .biimg:hover{
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  }
</style>
