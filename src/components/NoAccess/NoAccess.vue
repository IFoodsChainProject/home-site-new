<template>
	<div class="noAccessBox">
		<div><img src="../ico/ifoodsLogo.png" style="height: 24px;vertical-align: middle;margin: -2px 4px 0 0;">ifoodschain官方提示您：</div>
		<div>您所在的地区被限制访问此网页</div>
		<div>you can't access the webpage from your region</div>
	</div>
</template>
<style scoped>

        body{
            position: relative;
            width: 100vw;
            height: 100vh;
            margin: 0!important;
            overflow: hidden!important;
        }
        .noAccessBox{
            width: 700px;
            height: 128px;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-80%);
            padding-left: 200px;
            background: url("../img/backgrounds/icon_sorry.png") left center no-repeat;
            background-size: 174px 128px;
            font-size: 22px;
            line-height: 42px;
            color: #333;
            box-sizing: border-box;
        }
    
</style>