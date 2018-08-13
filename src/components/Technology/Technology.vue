<template>
	<div>
		<top></top>
   <!-- Hero Section -->
    <div class="page-header technology-banner" id="home">
        <div class="header-caption">
            <div class="header-caption-contant">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="header-caption-inner">
                                <h1>{{$t('technology.banner.title')}}</h1>
                                <p>{{$t('technology.banner.des')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero Section -->



    <!-- Pricing Section -->
    <div class="pricing-area technology-area inner-padding">
        <div class="container">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6" v-for="item in $t('technology.technologyitems') ">
                    <div class="pricing-package   foo" data-sr='enter'>
                         <div class="pricing-header">
                            <div class="pricing-tag">
                                <!-- 30
                                <p>monthly</p> -->
                              <img :src="item.url">
                            </div>
                        </div>
                        <div class="pricing-body technology-body">
                            <h2 class="pricing-title">{{item.name}}</h2>
                            <p v-html="item.des"></p>
                        </div>
                    </div>
                </div>
                <!--<div class="col-xs-12 col-sm-12 col-md-6">-->
                    <!--<div class="pricing-package   foo" data-sr='enter'>-->
                          <!--<div class="pricing-header">-->
                            <!--<div class="pricing-tag">-->
                                <!--&lt;!&ndash; 30-->
                                <!--<p>monthly</p> &ndash;&gt;-->
                                <!--<img src="img/icon-j8.png">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="pricing-body technology-body">-->
                            <!--<h2 class="pricing-title">OBFT consensus mechanism</h2>-->
                            <!--<p>-->
                              <!--Ifoods Chain proposed the OBFT consensus mechanism includes: <br>-->
<!--1.Trusted verification nodes are selected from a lot of nodes by community voting, and the verification nodes may be added or deleted at any time based on ecological requirements. <br>-->
<!--2.In each round of block generation of Ifoods Chain, a verification node is selected by a random algorithm to record the information data block, to meet the ecological requirements of rapid block generation without bifurcation and tampers. <br>-->
<!--3.The OBFT consensus mechanism consumes no resources for mining and supports high-frequency trading. Based on the OBFT consensus, the TPS in the Ifoods Chain ecosystem can exceed 5,000.-->

                            <!--</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="col-xs-12 col-sm-12 col-md-6">-->
                    <!--<div class="pricing-package  foo" data-sr='enter'>-->
                           <!--<div class="pricing-header">-->
                            <!--<div class="pricing-tag">-->
                                <!--&lt;!&ndash; 30-->
                                <!--<p>monthly</p> &ndash;&gt;-->
                                <!--<img src="img/icon-j7.png">-->
                            <!--</div>-->
                        <!--</div>-->
                                    <!--<div class="pricing-body technology-body">-->
                            <!--<h2 class="pricing-title">USP infrastructure</h2>-->
                           <!--<p>-->
                             <!--In the Ifoods chain infrastructure, a USP (universal service platform) system is designed that serves the needs of different users of the Ifoods chain block chain system in the food field.-->
<!--We incorporated the core function of the Ifoods chain block chain. After incorporation, the whole structure is used as the middleware of the Ifoods chain block chain system. The USP system will be reserved for the front-end application of the open API interface and SDK.  <br>-->
<!--(1) Simplify and unify the docking of Ifoods chain system;<br>-->
<!--(2) Enable users, developers and other vendors to access and accept Ifoods chain services anytime, anywhere, using various devices and accesses.-->

                           <!--</p>-->
                        <!--</div>-->

                    <!--</div>-->
                <!--</div>-->
                <!--<div class="col-xs-12 col-sm-12 col-md-6">-->
                    <!--<div class="pricing-package foo" data-sr='enter'>-->
              <!--<div class="pricing-header">-->
                            <!--<div class="pricing-tag">-->
                                <!--&lt;!&ndash; 30-->
                                <!--<p>monthly</p> &ndash;&gt;-->
                                <!--<img src="img/icon-j2.png">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="pricing-body technology-body">-->
                            <!--<h2 class="pricing-title">DAI</h2>-->
                            <!--<p>-->
                               <!--The application scenario of Ifoods chain involves related technologies such as transaction matching, model selection, data analysis and so on. The use of these technologies, including model training, is based on artificial intelligence with depth learning algorithms, and will consume massive computing power. Therefore, we introduce distributed artificial intelligence (DAI).-->
                            <!--</p>-->
                        <!--</div>-->

                    <!--</div>-->
                <!--</div>-->
                <!--<div class="col-xs-12 col-sm-12 col-md-6">-->
                    <!--<div class="pricing-package foo" data-sr='enter'>-->
               <!--<div class="pricing-header">-->
                            <!--<div class="pricing-tag">-->
                                <!--&lt;!&ndash; 30-->
                                <!--<p>monthly</p> &ndash;&gt;-->
                                <!--<img src="img/icon-j3.png">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="pricing-body technology-body">-->
                            <!--<h2 class="pricing-title">Super probe system</h2>-->
                           <!--<p>-->
                              <!--Super probe is a mature application of Ifoods chain smart device for meat detection. The super probe system is a MEMS food detection DAPP block chain application system designed by Ifoods chain for consumers, businessmen and food enterprises. The super probe is easy to carry and can be used to detection food related data quickly and instantaneously. Compared with the standard database of eco chain such as experts, it helps consumers choose.-->
<!--Mobile terminal is the main feedback channel after consumer detection.-->


                           <!--</p>-->
                        <!--</div>-->

                    <!--</div>-->
                <!--</div>-->

                <!--<div class="col-xs-12 col-sm-12 col-md-6">-->
                    <!--<div class="pricing-package foo" data-sr='enter'>-->
                   <!--<div class="pricing-header">-->
                            <!--<div class="pricing-tag">-->
                                <!--&lt;!&ndash; 30-->
                                <!--<p>monthly</p> &ndash;&gt;-->
                                <!--<img src="img/cunzheng.png">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="pricing-body technology-body">-->
                            <!--<h2 class="pricing-title">Block chain certificate</h2>-->
                           <!--<p>-->
       <!--Block chain certificate is an important technical point of Ifoods chain block chain platform. <br>-->
<!--Block chain certificate ensures that food safety and quality detection information is recorded on the block chain. The information stored on the block chain eventually forms an effective chain for food safety. Because the whole chain of evidence is composed of multiple links and multiple nodes, it also somehow ensures the reliability of product information.-->

                           <!--</p>-->
                        <!--</div>-->

                    <!--</div>-->
                <!--</div>-->



            </div>
        </div>
    </div>
    <!-- End Pricing Section -->
    <bottom></bottom>
	</div>
</template>
<script type="text/javascript">
  import Top from '../Header/header.vue'
  import Bottom from '../Footer/Footer.vue'
	export default{
		name:'ecology',
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
.technology-banner {
    background-image: url(../../assets/images/banner-t.jpg);
}
</style>
