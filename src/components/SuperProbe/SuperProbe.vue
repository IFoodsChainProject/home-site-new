<template>
	<div>
		<top></top>
    <!-- Hero Section -->
    <div class="page-header superProbe-area" id="home">
        <div class="header-caption">
            <div class="header-caption-contant">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="header-caption-inner">
                                <h1>{{$t('superprobe.banner.title')}}</h1>
                                <p>{{$t('superprobe.banner.des')}}

</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero Section -->
    <!-- We Provide Section -->
    <div class="provide-area inner-padding4">
        <div class="provide-area-inner">

                <div class="about-area inner-padding">
            <div class="container">
                <div class="about-area-inner">

                    <div class="row">
                        <div class="col-sm-12 col-md-6 foo" data-sr='enter'>
                            <div  class=" about-slider">
                                <div class="item">
                                    <img :src="$t('superprobe.banner.url')" alt="responsive img">
                                </div>

                            </div>
                        </div>
                        <div class="col-sm-12 col-md-5 foo" data-sr='enter'>
                            <div class="section-title-area-1">
                                <h2 class="section-title"></h2>
                            </div>
                            <div class="about-content">
                                <p class="text-bold" v-html="$t('superprobe.system.des')">

</p >
                               <!--<p>-->
<!--The Super Probe is developed by the Ifoods chain Intelligent Hardware Lab for meat quality inspection equipment.</p>-->
                               <!--<p>Super probes need to be used in conjunction with DAPP.</p>-->
                               <!--<p>Features: immediacy, rapidity, and portability.</p>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- End We Provide Section -->

        <!-- We Provide Section -->
    <div class="provide-area inner-padding4">
        <div class="provide-area-inner">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title-area-4 foo" data-sr='enter'>
                            <h2 class="section-title">{{$t('superprobe.condition.title')}}</h2>

                            <!-- <p>Ifoods chain基于区块链技术将保护个人和机构的相关数据，同时为了价值传递会有数据模型付费使用和检测数据买卖。</p> -->
                        </div>
                    </div>
                </div>

                <div class="row useScene">
                 <div class="col-xs-12 col-sm-4" v-for="item in $t('superprobe.conditionitems') ">
                    <p>{{item.des}}<br><br></p>
                      <div class="provide-img">
                            <img :src="item.url" alt="responsive img">
                        </div>
                </div>
                <!--<div class="col-xs-12 col-sm-4">-->
                    <!--<p>View the surrounding shops through DAPP  <br><br></p>-->
                        <!--<div class="provide-img">-->
                            <!--<img src="../../assets/images/super3.jpg" alt="responsive img">-->
                        <!--</div>-->
                <!--</div>-->
                   <!--<div class="col-xs-12 col-sm-4">-->
                    <!--<p>The regulatory agency analyzes regional shops through DAPP</p>-->
                       <!--<div class="provide-img">-->
                            <!--<img src="../../assets/images/super4.jpg" alt="responsive img">-->
                        <!--</div>-->
                <!--</div>-->
                </div>
            </div>
        </div>
    </div>
    <!-- End We Provide Section -->


    <!-- Service Section -->
    <div class="service-area inner-padding property-area">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-title-area-4 foo" data-sr='enter'>
                        <h2 class="section-title">{{$t('superprobe.efficient.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="row property-con">

                    <div class="service-widget foo" data-sr='enter' v-for="item in $t('superprobe.efficientitems') ">
                        <img :src="item.url" alt="responsive img">
                        <h4>{{$t(item.des)}}</h4>
                    </div>


                    <!--<div class="service-widget foo" data-sr='enter'>-->
                        <!--<img src="../../assets/images/length.png" alt="responsive img">-->
                        <!--<h4>Length&lt;20cm</h4>-->
                    <!--</div>-->


                    <!--<div class="service-widget foo" data-sr='enter'>-->
                        <!--<img src="../../assets/images/width.png" alt="responsive img">-->
                        <!--<h4>Width&lt;10CM</h4>-->
                    <!--</div>-->


                    <!--<div class="service-widget foo" data-sr='enter'>-->
                        <!--<img src="../../assets/images/thick.png" alt="responsive img">-->
                        <!--<h4>thickness&lt;5CM</h4>-->
                    <!--</div>-->


                    <!--<div class="service-widget foo" data-sr='enter'>-->
                        <!--<img src="../../assets/images/weight.png" alt="responsive img">-->
                        <!--<h4>weight&lt;0.5KG</h4>-->
                    <!--</div>-->


            </div>
        </div>
    </div>
    <!-- End Service Section -->
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
.superProbe-area {
    background-image: url(../../assets/images/superbg.jpg);
}
.property-area .property-con{
 text-align: center;
 display: flex;
}
.property-area .property-con .service-widget{flex: 1;}
</style>
