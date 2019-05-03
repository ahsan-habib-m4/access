$( document ).ready(function() {

	$(".add-btn").on("click",function(){
		$(this).hide();
		$(this).siblings(".added-btn").show();
	})

	$(".added-btn").on("click",function(){
		$(this).hide();
		$(this).siblings(".add-btn").show();
	})

  $(".your-point").tooltip('show')
});
  