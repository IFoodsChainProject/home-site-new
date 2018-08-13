<template>
	<div>
		<top></top>
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
    <!-- Blog Section -->
    <div class="blog-area inner-padding7">
        <div class="container">
            <div class="row foo" data-sr='enter'>
                <div class="blog-masonary">
                    <div class="post-grid"  v-for="item in $t('news.newsitems')"  @click="goNewsDetail(item.id)">
                        <div class="post-row foo" data-sr='enter'>
                        <div class="post-header">
                            <div class="post-feature">
                                <img :src="item.responsiveimg" alt="responsive img">
                            </div>
                        </div>
                        <div class="post-body">
                            <div class="post-caption">
                                <h2 class="post-heading"><a :href="item.http">{{item.title}}</a></h2>
                                 <div class="post-Mega">{{item.little}}</div>
                                <div class="post-sticker"><small>{{item.sum}}</small>
                                    <p class="month">{{item.month}}</p>
                                </div>
                            </div>
                            <p class="post-text">{{item.des}}</p>
                        </div>
                        <div class="post-footer">
                            <a href="javascript:;" class="btn btn-default btn-post" role="button">{{item.more}}<i class="fa fa-angle-double-right"></i></a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- End Blog Section -->
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

			},
            goNewsDetail(id){
                this.$router.push({
                    name: 'news-detail',
                    params: {
                        id: id
                    }
                })
            }
		},
		mounted(){
			this.initScrollAnimation();
		}
	}
</script>
<style type="text/css" scoped>
.news-banner {
  background-image: url(../../assets/images/news-bg.png);
}
.post-grid .post-body p.post-text::after {
    /*content: "...";*/
    /*font-weight: bold;*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*padding: 0 20px 1px 45px;*/
    background: url(../../assets/images/ellipsis_bg.png) repeat-y;
}
</style>
