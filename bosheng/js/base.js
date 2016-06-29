$(function(){ 
	$("#nav li").click(function(){
	 var me=$(this);
	  me.addClass("active").siblings("li").removeClass("active");
	});


	///*滚动页面隐藏或者显示*/
	//$(window).scroll(function(){
     //   var topNav = $(".top-nav");
    //
	//	$(this).scrollTop()>100?topNav.stop(false,true).addClass("active"):topNav.stop(false,true).removeClass("active");
	//});

	//$(".__case-list li").hover(function(){
	//	$(this).find(".-modal").animate({
	//		'bottom':"0"
	//	},500);
	//},function(){
	//	$(this).find(".-modal").animate({
	//		'bottom':"-281px"
	//	},500);
	//});
});

