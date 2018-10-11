define(['jquery'],function($){
	function slide(){
		//按钮
			var oBtns = $("#banner").find("ol").find("li");
			var oUl = $("#banner").find("ul");
			var aLi = oUl.find("li");


			var iNow = 0; //记录当前是第几张
			var timer = null; //设计记录定时器的标识


			timer = setInterval(timerInner, 2000);

			function timerInner(){
				iNow++;
				tab();
			}

			function tab(){
				if(iNow == oBtns.size()){
					oBtns.attr("class", "");
					oBtns.eq(0).attr("class", "active");
				}else{
					oBtns.attr("class", "");
					oBtns.eq(iNow).attr("class", "active");
				}
				
				oUl.animate({top: iNow * -449},20, function(){
					if(iNow == oBtns.size()){
						iNow = 0;
						oUl.css("top", "0px");
					}
				});
			}


			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			$("#banner").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})
	}
	return{
		slide:slide,
	}
})