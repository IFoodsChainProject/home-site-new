<template>
<div>
	 <!-- Team Section -->
    <div class="team-area inner-padding">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-title-area-4 foo" data-sr='enter'>
                        <h2 class="section-title">{{$t('team.banner.title')}}</h2>
                        <p>{{$t('team.banner.des')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Team Section -->
    <!-- Testimonials Section -->
    <div class="testimonials-area inner-padding" style="padding-top: 0;">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 foo" data-sr='enter'>
                    <div id="testimonial-slider" class="owl-carousel owl-theme testimonial-carousel">
                         <div class="item"  v-for="item in $t('team.origin.founder') ">
                           <router-link to="/team">
                            <div class="client-img">
                              <img :src="item.img" alt="responsive img">
                            </div>
                            <div class="client-details">
                                <h5 class="client-name">{{item.name}} <span class="text-thin">{{item.position}}</span></h5>
                                <p>{{item.des}}</p>
                            </div>
                            </router-link>
                        </div>
                         <div class="item"  v-for="item in $t('team.core.coreitems') ">
                            <router-link to="/team">
                            <div class="client-img">
                                <img :src="item.img" alt="responsive img">
                            </div>
                            <div class="client-details">
                                <h5 class="client-name">{{item.name}} <span class="text-thin">{{item.position}}</span></h5>
                                <p>{{item.des}}</p>

                            </div>
                            </router-link>
                        </div>
                     <div class="item"  v-for="item in $t('team.technical.technicalitems') ">
                        <router-link to="/team">
                            <div class="client-img">
                                <img :src="item.img" alt="responsive img">
                            </div>
                            <div class="client-details">
                                <h5 class="client-name">{{item.name}}
<span class="text-thin">{{item.position}}</span></h5>
                                <p>{{item.des}}
</p>
                            </div>
                            </router-link>
                        </div>
                     <div class="item" v-for="item in $t('team.adviser.adviseritems') ">
                        <router-link to="/team">
                            <div class="client-img">
                                <img :src="item.img" alt="responsive img">
                            </div>
                            <div class="client-details">
                                <h5 class="client-name">{{item.name}}
<span class="text-thin">{{item.position}}</span></h5>
                                <p>{{item.des}}
                                </p>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Testimonials Section -->
    <!-- Call To Action Section 2 -->
</div>

</template>

<script type="text/javascript">
	// import owlCarousel from ''
	export default {
		name:'team',
		methods:{
		    testimonial_carousel() {
		        var owl = $("#testimonial-slider");
		        owl.owlCarousel({
		            loop: true,
		            margin: 75,
		            smartSpeed: 500,
		            responsiveClass: true,
		            navigation: false,
		            items: 2,
		            addClassActive: true,
		            dots: true,
		            // autoplay: true,
		            // autoplayTimeout: 5000,
		            responsive: {
		                0: {
		                    items: 1,
		                    nav: false
		                },
		                800: {
		                    items: 2,
		                    nav: false
		                }
		            }
		        });
		    }
		},
	    mounted(){
	    	this.testimonial_carousel() ;
	    }

	}
</script>

<style scoped>


</style>
