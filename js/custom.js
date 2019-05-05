$( document ).ready(function() {

	$(".add-btn").on("click",function(){
		$(this).hide();
		$(this).siblings(".added-btn").show();
	})

	$(".added-btn").on("click",function(){
		$(this).hide();
		$(this).siblings(".add-btn").show();
	})

  	$(".your-point").tooltip('show');

  	$('.form-check-input').click(function() {
	  var check = $('#filter-modal').find('input[type=checkbox]:checked').length;
	  $(".filter-count").html(check);
	});

  	$('.clear-all-btn').click(function() {
	  $('#filter-modal').find('input[type=checkbox]:checked').prop("checked", false);
	  $(".filter-count").html("0");
	});
  	$("a.nav-link").click(function() {
  		var elm = $(this).attr("id");
  		$('a.nav-link').removeClass("active"); 		
  		$("#"+elm).children(".searchRadio").prop("checked", true);
  		$("#"+elm).addClass("active");
  	});
});
  