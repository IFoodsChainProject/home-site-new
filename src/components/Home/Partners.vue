<template>
	    <!-- Clients Section -->
    <div class="client-area inner-padding foo" data-sr='enter'>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-title-area-4 foo" data-sr='enter'>
                        <h2 class="section-title" >{{$t("home.cooperative.title")}}</h2>
                    </div>
                </div>
            </div>
            <div class="row clients-carousel">
                                <!-- 科尔沁牛业 -->
                <div class="col-xs-6 col-md-2 borderCcc" v-for="partner in partners">
                        <div class="item">
                            <a :href="partner.link" target="_blank">
                            <img :src="partner.url" alt="responsive img">
                            </a>
                        </div>
                </div>

                    <!-- </div> -->

            </div>
        </div>
    </div>
    <!-- End Clients Section -->
</template>
<script type="text/javascript">
	export default{
        name:'parthers',
        data(){
           return{
           	 partners:[
                 {url:require('../../assets/images/partner/hz04.png'),
                  link:'http://kerchin.com/'
                 },
                 {url:require('../../assets/images/partner/hz071.png'),
                  link:'http://www.pasonfoods.com/'
                 },
                 {url:require('../../assets/images/partner/hz06.png'),
                  link:'http://www.caftfoods.com/'
                 },
                 {url:require('../../assets/images/partner/hz20.png'),
                  link:'http://www.jatests.com/'
                 },
                 {url:require('../../assets/images/partner/hz01.png'),
                  link:'http://www.buaa.edu.cn/'
                 },
                 {url:require('../../assets/images/partner/hz02.png'),
                  link:'http://www.ppsuc.edu.cn'
                 },
                 {url:require('../../assets/images/partner/hz14.png'),
                  link:'http://www.cooix.com/'
                 },
                 {url:require('../../assets/images/partner/hz22.png'),
                  link:'https://trinity.tech'
                 },
                 {url:require('../../assets/images/partner/hz08.png'),
                  link:'https://www.huobi.com/zh-cn/'
                 },
                 {url:require('../../assets/images/partner/hz19.png'),
                  link:'http://www.vnbig.com/ '
                 },
                 {url:require('../../assets/images/partner/hz17.png'),
                  link:'http://www.biyong.sg/'
                 },
                 {url:require('../../assets/images/partner/hz10.png'),
                  link:'http://www.prnasia.com/'
                 },
                 {url:require('../../assets/images/partner/hz18.png'),
                  link:'http://www.bishijie.com/'
                 },
                 {url:require('../../assets/images/partner/hz09.png'),
                  link:'http://www.iterduo.com/'
                 },
                 {url:require('../../assets/images/partner/hz21.png'),
                  link:'http://www.hellobtc.com/'
                 },
                 {url:require('../../assets/images/partner/hz15.png'),
                  link:'http://www.bcfans.com/'
                 },
                 {url:require('../../assets/images/partner/hz12.png'),
                  link:'#'
                 },
                 {url:require('../../assets/images/partner/hz16.png'),
                  link:'https://www.kcash.com/'
                 },
                 {url:require('../../assets/images/partner/hz23.png'),
                  link:'#'
                 },
                 {url:require('../../assets/images/partner/hz24.png'),
                  link:'#'
                 },
                 {url:require('../../assets/images/partner/hz25.png'),
                  link:'#'
                 },
           	 ]
           }
        }
	}
</script>
