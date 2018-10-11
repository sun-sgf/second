console.log("加载完成index");

//配置路径

require.config({
	paths:{
		"slide":"slide",
		"jquery":"jquery-1.11.3",

	}
})

// define(["slide"],function(slide){
// 	function main(){
		
		
// 		//循环广告图
// 		slide.slide();
// 	}
// 	return{
// 		main:main
// 	}
// })
require(['slide'],function(slide){
	slide.slide();
})