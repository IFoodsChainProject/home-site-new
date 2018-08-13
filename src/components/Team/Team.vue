<template>

    <div>
        <top></top>
            <!-- Hero Section -->
    <div class="page-header team-banner" id="home">
        <div class="header-caption">
            <div class="header-caption-contant">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="header-caption-inner foo">
                                <h1>{{$t('team.banner.title')}}</h1>
                                <p>{{$t('team.banner.des')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <!-- End Hero Section -->
    <div class="founderTeam-area foo">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="founderTeam inner-padding foo" >{{$t('team.origin.title')}}</h2>
                </div>
            </div>
            <div class="row foo">
                <div class="col-xs-12" v-for="item in $t('team.origin.founder') ">
                <div class="founderTeam-itme  leftIcon" id="founder1">
                    <img :src="item.img">
                    <div class="des">
                        <h3>{{item.name}}</h3>
                        <span>{{item.position}}</span>
                        <p>{{item.des}}</p>
                        <p class="inIcon"> <a href="https://www.linkedin.com/in/隆-卡-514459118/" target="_blank" ><img  v-show="item.inicon"  :src="item.inicon"></a> </p>
                    </div>
                </div>
                </div>
                <!--<div class="col-xs-12">-->
                <!--<div class="founderTeam-itme leftIcon" id="founder2">-->
                    <!--<img src="../../assets/images/team/founder2.jpg">-->
                    <!--<div class="des">-->
                        <!--<h3>Steven Van </h3>-->
                        <!--<span>Director of the foundation</span>-->
                        <!--<p>-->
                             <!--Master's degree in Instrument Science and Optoelectronics Engineering, Beijing University of Aeronautics and Astronautics.-->
<!--In 2013, majored in the block chain, deeply understood the chain operation principles and familiar with the operation and planning of digital products online transactions.-->
<!--In depth research on global front raster sensors and intelligent hardware; Planning and operating over a number of Internet projects;-->
<!--Responsible for the information management platform project of the State Food and drug administration.-->

                        <!--</p>-->
                        <!--<p class="inIcon"> <a href="https://www.linkedin.com/in/志凯-范-94977b12b/" target="_blank" ><img src="./../../assets/images/in.png"></a></p>-->
                    <!--</div>-->

                <!--</div>-->
                <!--</div>-->
                <!--<div class="col-xs-12">-->
                <!--<div class="founderTeam-itme leftIcon" id="founder3">-->
                      <!--<img src="../../assets/images/team/founder3.jpg">-->
                    <!--<div class="des">-->
                        <!--<h3>Lin RooJee (U.S.) </h3>-->
                        <!--<span>Founder & Director of the foundation</span>-->
                        <!--<p>-->
<!--Ph. D. in food science, University of Georgia, USA;-->
<!--Served as a senior manager of science & technology, CTO, a member of M & A.Adviser to the national food safety & technology center of the United States;-->
<!--The honorary director of the China Meat Research Institute;-->
<!--Chairman of the new China food group, China; chairman of the food company (Beijing) Limited. Owns a number of patents in food technology, research, production, testing, and technology optimization.-->
<!--Deeply studied the application of artificial intelligence.-->


                        <!--</p>-->
                        <!--<p class="inIcon">-->
                            <!--<a href="https://www.linkedin.com/in/汝吉-林-25928b143/" target="_blank" ><img src="./../../assets/images/in.png"></a>-->
                        <!--</p>-->
                    <!--</div>-->

                <!--</div>-->
                <!--</div>-->

            </div>
        </div>
    </div>
      <!-- 核心团队 -->
      <div class="coreTeam-area foo">
        <div class="container">
          <div class="row">
            <div class="col-xs-12"  >
              <h3 class="coreTit inner-padding foo">{{$t('team.core.title')}}</h3>
            </div>
          </div>
          <div class="row" id="coreTeam-items">
            <div class="col-xs-12 " v-for="item in $t('team.core.coreitems') ">
              <div class="coreTeam-itme" id="core0">
                <img :src="item.img" alt="">
                <div class="des "><div>{{item.name}} <span>{{item.position}}</span>
                </div>
                  <p>{{item.des}}</p>
                  <p class="inIcon"> <a :href="item.inUrl" target="_blank" >
                    <img v-show="item.inicon"  :src="item.inicon"></a>                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 核心团队end -->
      <!-- 技术团队 -->

      <div class="technical-area foo">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h3 class="technicalTit inner-padding foo">{{$t('team.technical.title')}}</h3>
            </div>
          </div>
          <div class="row" id="TechnicalTeam-items">
            <div class="col-xs-12 " v-for="item in $t('team.technical.technicalitems') ">
              <div class="technicalTeam-itme" id="technical0">
                <img :src="item.img" alt="">
                <div class="des "><div>{{item.name}} <span>{{item.position}}</span>
                </div>
                  <p>{{item.des}} </p >
                  <p class="inIcon">
                    <a :href="item.inUrl"><img v-show="item.inicon"  :src="item.inicon" alt=""></a>
                  </p >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- /技术团队 -->
      <!-- 顾问团队 -->
      <div class="adviserTeam-area foo">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h3 class="adviserTit inner-padding">{{$t('team.adviser.title')}}</h3>
            </div>
          </div>
          <div class="row" id="adviserTeam-items">

            <div class="col-xs-12 " v-for="item in $t('team.adviser.adviseritems') ">
              <div class="adviserTeam-itme">
                <img :src="item.img" alt="">
                <div class="des ">
                  <div>{{item.name}}<span>{{item.position}} </span></div>
                  <p>{{item.des}} </p >
                  <p class="inIcon">
                    <a :href="item.inUrl"><img v-show="item.inicon" :src="item.inicon" alt=""></a>
                  </p >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 顾问团队end -->
 <!-- Testimonials Section -->




    <!-- Clients Section -->
    <div class="client-area inner-padding ">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div id="clients-slider" class="owl-carousel owl-theme clients-carousel foo" data-sr='enter'>
                        <div class="item">
                            <img src="../../assets/images/client-logo-1.png" alt="responsive img">
                        </div>
                        <div class="item">
                            <img src="../../assets/images/client-logo-2.png" alt="responsive img">
                        </div>
                        <div class="item">
                            <img src="../../assets/images/client-logo-3.png" alt="responsive img">
                        </div>
                        <div class="item">
                            <img src="../../assets/images/client-logo-4.png" alt="responsive img">
                        </div>
                        <div class="item">
                            <img src="../../assets/images/client-logo-5.png" alt="responsive img">
                        </div>
                        <div class="item">
                            <img src="../../assets/images/client-logo-6.png" alt="responsive img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Clients Section -->
    <bottom></bottom>
    </div>
</template>
<script type="text/javascript">
     import Top from '../Header/header.vue'
  import Bottom from '../Footer/Footer.vue'
    export default{
        name:'application',
        components:{
            Top,
            Bottom
        },
        data(){
           return{

           }
        },
        methods:{
            initScrollAnimation(){
                window.sr = ScrollReveal({ duration: 800 });
                sr.reveal('.foo');
                sr.reveal('.bar');

            }

        },
        mounted(){
            this.initScrollAnimation();
        }
    }
</script>
<style type="text/css" scoped>
.team-banner {
    background-image: url(../../assets/images/team-bg.jpg);
}
</style>
