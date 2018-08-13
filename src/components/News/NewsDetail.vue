<template>
	<div>
        <!-- Nav Section -->
        <header>
            <!-- Nav Section -->
            <nav class="navbar navbar-default navbar-fixed-top nav-area" id="scroll-menu">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src="../../assets/images/logo.png" alt="responsive img" height=64></a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav" >

                            <li v-for = '(item,index) in $t("home.navigator")' :key="index"  >
                                <!-- <a href="javascript:;" :class="navIndex == index ? 'selected' : ''">{{item.title}}</a> -->
                                <router-link :to="item.path" >{{item.title}}</router-link>
                            </li>

                      </ul>

                  </div>

              </div>
          </nav>
      </header>
      <!-- End Nav Section -->

 
            <!-- Hero Section -->
    <div class="page-header news-banner" id="home">
        <div class="header-caption">
            <div class="header-caption-contant">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="header-caption-inner">
                                <h1>{{$t('news.banner.title')}}</h1>
                                <!-- <p><a href="#">Home </a> > Blog</p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero Section -->
   

    <!-- Pricing Section -->
    <div class="pricing-area inner-padding article" v-for="item in $t('news.newsDetail')" v-if='item.id == newsId'>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="head">
                        <div class="title">{{item.title}}</div> 
                        <div class="time">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-xs-12">
                <div class="body" v-html="item.body">
                   
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
  import Top from '../Header/header.vue'
  import Bottom from '../Footer/Footer.vue'
	export default{
         name:'newsDetail',
         components:{
            Top,
            Bottom
         },
         data(){
            return{
                newsId: this.$route.params.id,
            }
         },
         mounted(){
            // alert(this.$route.params.id)
         }
	}
</script>
<style type="text/css">
	
</style>