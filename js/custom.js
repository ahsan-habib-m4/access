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

  	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, '\\$&');
	    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	var srcType = getParameterByName('type'); 

	if(srcType == "all"){
		$('a.nav-link').removeClass("active"); 	
		$("#srcByall").prop("checked", true);
		$("#srcByall").parent("a").addClass('active');
	} else if (srcType == "reach") {
		$('a.nav-link').removeClass("active"); 	
		$("#srcByreach").prop("checked", true);
		$("#srcByreach").parent("a").addClass('active');
	} else if (srcType == "match") {
		$('a.nav-link').removeClass("active"); 	
		$("#srcBymatch").prop("checked", true);
		$("#srcBymatch").parent("a").addClass('active');
	} else if (srcType == "safety") {
		$('a.nav-link').removeClass("active"); 	
		$("#srcBySaftety").prop("checked", true);
		$("#srcBySaftety").parent("a").addClass('active');
	}

});
  