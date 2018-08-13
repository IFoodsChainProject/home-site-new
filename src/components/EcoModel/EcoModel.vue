<template>
	<div>
		<top></top>
		    <!-- Hero Section -->
    <div class="page-header" id="home">
        <div class="header-caption">
            <div class="header-caption-contant">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="header-caption-inner">
                                <h1>{{$t('ecomodel.banner.title')}}</h1>
                                <p>{{$t('ecomodel.banner.des')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- Pricing Section -->
    <div class="pricing-area inner-padding">
        <div class="container">

            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4" v-for="item in $t('ecomodel.ecomodelItems') ">
                    <div class="pricing-package foo" data-sr='enter'>
                        <div class="pricing-header">
                            <div class="pricing-tag">
                                <!-- 30
                                <p>monthly</p> -->
                                <img :src="item.url">
                            </div>
                        </div>
                        <div class="pricing-body">
                            <h2 class="pricing-title">{{item.name}}</h2>
                            <p>
                                {{item.des}}
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <!-- End Pricing Section -->
    <bottom></bottom>
	</div>
</template>
<script type="text/javascript">
  import Cookies from 'js-cookie'
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
              lange:''
           }
		},
		methods:{
			initScrollAnimation(){
				window.sr = ScrollReveal({ duration: 800 });
				sr.reveal('.foo');
				sr.reveal('.bar');

			},
      getCookie(){

      }
		},
		mounted(){
			this.initScrollAnimation();
		}
	}
</script>
<style type="text/css" scoped>
	.page-header{
        background-image: url(../../assets/images/page-header-bg.jpg);
    }
  /*@media  (min-width: 980px) {*/
    /*.pricing-package{*/
      /*min-height: 500px;*/
    /*}*/
  /*}*/
</style>
