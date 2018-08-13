<template>
	<div>
		<top></top>
    <!-- Hero Section -->
    <div class="page-header application-area" id="home">
      <div class="header-caption">
        <div class="header-caption-contant">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="header-caption-inner">
                  <h1>{{$t('application.banner.title')}}</h1>
                  <p>
                    {{$t('application.banner.des')}}
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
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="section-title-area-4 foo" data-sr='enter'>
                <h2 class="section-title">{{$t('application.item1.title')}}</h2>
                <p>{{$t('application.item1.subtitle')}}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-7 ">
              <div class="provide-massage">
                <p>{{$t('application.item1.des.con1')}}</p>
                <p><span class="text-bold">{{$t('application.item1.des.con2title')}}</span> <br/>
                  {{$t('application.item1.des.con2')}}
                </p>

              </div>
            </div>
            <div class="col-xs-12 col-sm-5">
              <div class="provide-img">
                <img src="../../assets/images/ifoods-y1-en.jpg" alt="responsive img">
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
                <h2 class="section-title">{{$t('application.item2.title')}}</h2>
                <p>{{$t('application.item2.subtitle')}}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <div class="provide-img">
                <img src="../../assets/images/ifoods-y2-en.jpg" alt="responsive img">
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 ">
              <div class="provide-massage">
                <p>  <strong>{{$t('application.item2.des.con1title')}}</strong> <br/>
                  {{$t('application.item2.des.con1')}}
                </p>
                <p> <strong>{{$t('application.item2.des.con2title')}}</strong> <br/>
                  {{$t('application.item2.des.con2')}}
                </p>
                <p> <strong>{{$t('application.item2.des.con3title')}}</strong> <br/>
                  {{$t('application.item2.des.con3')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End We Provide Section -->


    <!-- Service Section -->
    <div class="service-area inner-padding">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="section-title-area-4 foo" data-sr='enter'>
              <h2 class="section-title">{{$t('application.item3.title')}}</h2>
              <p>{{$t('application.item3.des')}}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3" v-for="item in $t('application.item3.subitems')">
            <div class="service-widget foo" data-sr='enter'>
              <img :src="item.iconurl" alt="responsive img">
              <h4>{{item.title}}</h4>
              <p v-html="item.des"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Service Section -->

    <!-- We Provide Section -->
    <div class="provide-area inner-padding4">
      <div class="provide-area-inner">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="section-title-area-4 foo" data-sr='enter'>
                <h2 class="section-title">{{$t('application.item4.title')}}</h2>
                <p>{{$t('application.item4.subtitle')}}</p>
              </div>
            </div>
          </div>

          <div class="row">

            <div class="col-xs-12 col-sm-6 ">
              <div class="provide-massage" v-html="$t('application.item4.des')">


              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="provide-img">
                <img src="../../assets/images/ifoods-y3-en.jpg" alt="responsive img">
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
                <h2 class="section-title">{{$t('application.item5.title')}}</h2>

              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <div class="provide-img">
                <img src="../../assets/images/ifoods-y4-en.jpg" alt="responsive img">
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 ">
              <div class="provide-massage">
                <p>
                  {{$t('application.item5.des')}}

                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- End We Provide Section -->
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
	.application-area{
        background-image: url(../../assets/images/pork.jpg);
    }
</style>
