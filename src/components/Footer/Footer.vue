<template>
	<div>
		 <!-- Footer Section -->
        <div class="footer-area foo" data-sr='bottom'>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 footer-social ">
                  <div >
                    <a href="https://www.facebook.com/ifoods.chain" target="_blank">
                        <i class="fa fa-facebook"></i>
                    </a>
                     <span>facebook</span>

                   </div>
                   <div class="wechat"> <a href="javascript:;" target="_blank"><i class="fa fa-weixin"></i> </a><span>IFOOD</span>
                        <div>
                            <img src="../../assets/images/wechat.png">
                        </div>
                   </div>
                   <div class="wechat Official"> <a href="javascript:;" target="_blank"><i class="fa fa-weixin"></i> </a><span>I-FOODS-CHAIN</span>
                        <div>
                            <img src="../../assets/images/Accounts.jpg">
                        </div>
                   </div>
                    <div>
                        <a href="https://twitter.com/IfoodsL" target="_blank"><i class="fa fa-twitter"></i></a>
                        <span>twitter</span></div>
                    <div><a href="https://github.com/IFoodsChainProject" target="_blank"><i class="fa fa-github"></i></a><span>github</span></div>
                    <div >
                        <a href="https://t.me/ifoodschainCN" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a><span>telegramCN</span>

                    </div>
                     <div >
                        <a href="https://t.me/ifoodschainEN" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a><span>telegramEN</span>

                    </div>
                    <div >
                    <a href="https://t.me/ifoodschainVN" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a><span>telegramVN</span>

                    </div>
               </div>
            </div>
                        <div class="row">
                <ul class="col-md-3 col-xs-6 footer-navs">
                    <li class="nav-title"><a href="" target="_blank">{{$t('footer.Navigation.title')}}</a></li>
                    <li><a href="index-en.html" target="_blank">{{$t('footer.Navigation.subtitle[0]')}}</a></li>
                    <li><a href="index-en.html#video-area" target="_blank">{{$t('footer.Navigation.subtitle[1]')}}</a></li>

                </ul>
                <ul class="col-md-3 col-xs-6 footer-navs">
                    <li class="nav-title"><a href="" target="_blank">{{$t('footer.Ecological.title')}}</a></li>
                     <li><a href="ecology-en.html" target="_blank">{{$t('footer.Ecological.subtitle[0]')}}</a></li>
                    <li><a href="technology-en.html" target="_blank">{{$t('footer.Ecological.subtitle[1]')}}</a></li>

                    <li><a href="" target="_blank">{{$t('footer.Ecological.subtitle[2]')}}</a></li>
                </ul>
                 <ul class="col-md-3 col-xs-6 footer-navs">
                    <li class="nav-title"><a href="" target="_blank">{{$t('footer.About.title')}}</a></li>
                    <li><a href="team-en.html" target="_blank">{{$t('footer.About.subtitle[0]')}}</a></li>
                    <li><a href="news-en.html" target="_blank">{{$t('footer.About.subtitle[1]')}}</a></li>

                    <li><a href="index-en.html#roadMap-area" target="_blank">{{$t('footer.About.subtitle[2]')}}</a></li>
					<li><a href="data/privacy.pdf" target="_blank">{{$t('footer.About.subtitle[3]')}}</a></li>
                </ul>
                <ul class="col-md-3 col-xs-6 footer-navs">
                    <li class="nav-title"><a href="javascript:;" target="_blank">{{$t('footer.Contact.title')}}</a></li>
                    <li>
                        <!-- <i class="fa fa-envelope-o" aria-hidden="true" target="_blank"></i> -->
                        <a href="mailto:IFD@ifoodschain.com">IFD@ifoodschain.com</a></li>
                    <li>
                        <!-- <i class="fa fa-telegram" aria-hidden="true" target="_blank"></i> -->
                        <a href="https://t.me/ifoodschainCN">https://t.me/ifoodschainEN</a></li>
                </ul>
            </div>

        </div>

        </div>



    <!-- Ends Footer Section -->
    <!-- Copyright Section -->
    <div class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <p class="footer-copyright">
                       {{$t('footer.disclaimer')}}
                    </p>
                </div>
            </div>
        </div>
    </div>
	</div>
</template>
<script type="text/javascript">
	export default{
     name:'bottom',
	}
</script>
<style type="text/css">

</style>
