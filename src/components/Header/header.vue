<template>
    <!-- Nav Section -->
    <header>
        <!-- Nav Section -->
        <nav class="navbar navbar-default navbar-fixed-top nav-area" id="scroll-menu">
          <div class="changeLang">
              <div class="container">
               <!--  <ul class="" >
                  <li > -->
                    <!-- <a >APP 下载</a> -->
                    <router-link to="/download">{{$t('home.navigatorTop')}}</router-link>
                    <a href="javascript:;">
                      <select v-model="locale">
                        <option value="EN">EN</option>
                        <!--
                        <option value="CH">中文</option>
                        -->
                        <option value="KO">한국어</option>
                        <option value="VI">vi</option>
                      </select>
                    </a>
                <!--   </li>
                </ul> -->
              </div>
          </div>
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

                        <li v-for = '(item,index) in homeTexts.navigator' :key="index"  >
                        	<!-- <a href="javascript:;" :class="navIndex == index ? 'selected' : ''">{{item.title}}</a> -->
                        	 <router-link :to="item.path" >{{item.title}}</router-link>
                        </li>
<!--                          <li >
                         	<a href="javascript:;">
                         	    <select v-model="locale">
                              <option value="EN">EN</option>
                              <option value="CH">中文</option>
                              <option value="KO">한국어</option>
                              <option value="VI">vi</option>
                            </select>
                         </a>
                         </li> -->
                    </ul>

                </div>

            </div>
        </nav>
    </header>
    <!-- End Nav Section -->
</template>


<script>
import Cookies from 'js-cookie'
// 中央事件
import Bridge from '../../assets/js/bridge.js'
export default {
  data () {
    return {
      locale: Cookies.get('language') || 'EN',
      homeTexts:this.$i18n.t('home'),
      navIndex: "",
      sources:''
    }
  },
  watch: {
    locale (val) {
    	// console.log(val)
    	Cookies.set('language', val)
      this.$i18n.locale = val
      this.homeTexts = this.$i18n.t('home')
      // 向banner组件中传白皮书地址
      var msg = Cookies.get('language') == 'CH' ? JSON.parse(Cookies.get('source')).whitePaperUrlCn : JSON.parse(Cookies.get('source')).whitePaperUrlEn
      console.log(JSON.parse(Cookies.get('source')))
      this.sendToBanner(msg);

    }
  },
  create(){



  },
  methods:{
    //  兄弟组件传参
    sendToBanner:function(val){
      Bridge.$emit('msg',val)
    }, 
    sendToVideo:function(val){
      Bridge.$emit('videoUrl',val)
    },
  	routerLink(index, path) {
  		// console.log(index)
	  // 点击哪个路由就赋值给自定义的下下标
	  this.navIndex = index;
	  console.log(this.navIndex)
	  // 路由跳转
	  this.$router.push(path)
	},
	    navStyle(){
      $(window).scroll(function() {
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
    }
  },
    mounted(){

    this.navStyle();

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.changeLang{
  text-align: right;
  background: rgba(30, 30, 30, 0.9);
}
.changeLang a option{
  color:#000;
}
.changeLang a{
  color: #fff;
  margin-left: 25px;
      font-size: 12px;
    line-height: 1.6;
}
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  /*border: solid 1px #000;*/
  border:none;
  /*将默认的select选择框样式清除*/
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
    /*width: 100px;*/
  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("../../assets/images/triangle.png") no-repeat scroll right center transparent;


  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 14px;

  option{
      color: #000;
	}
}



/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand { display: none; }

a.router-link-exact-active{
	    color: #00a6ff !important;
    font-weight: bold !important;
}
.navbar> .container .navbar-brand{
	margin-right: 0;
}
</style>
