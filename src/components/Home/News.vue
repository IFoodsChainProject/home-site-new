<template>
	<!-- Blog Section -->
    <div class="blog-area inner-padding2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-title-area-4 foo" data-sr='enter'>
                        <h2 class="section-title">{{$t('news.banner.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-4"  v-for="(item,index) in $t('news.newsitems')" v-if="index < 3" @click="goNewsDetail(item.id)">
                        <div class="post-row foo" data-sr='enter'>

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
                            <a href="newsPage-4-en.html" class="btn btn-default btn-post" role="button">{{item.more}}<i class="fa fa-angle-double-right" id="margin-bottom"></i></a>
                        </div>
                        </div>

                        </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Blog Section -->
</template>
<style>
  #margin-bottom{
    margin-bottom: 50px;
  }
</style>
<script type="text/javascript">
	export default {
        name:'news',
        data(){
        	return{

        	}
        },
        methods:{
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

        }

	}
</script>
