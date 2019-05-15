$( document ).ready(function() {

$.getJSON("https://collegeapis.herokuapp.com/api/v1/schools/?format=json", function(data){
    for (var i = 0, len = 10; i < len; i++) {
        var cardHTML = "";
        cardHTML = cardHTML + "<div class='container-fluid card'>";
        cardHTML = cardHTML +    "<div class='card-heade row'>";
        cardHTML = cardHTML +     "<div class='col-9'>";
        cardHTML = cardHTML +      "<div class='row'>";
        cardHTML = cardHTML +        "<div class='col-5 college-pic'>";
        cardHTML = cardHTML +          "<img src='img/uni-image.png'>";
        cardHTML = cardHTML +        "</div>";
        cardHTML = cardHTML +        "<div class='col-7 college-name'>";
        cardHTML = cardHTML +          "<h4>"+data[i]["org_full_name"]+"</h4>";
        cardHTML = cardHTML +          "<p class='college-loc'>Montchair, NJ</p>";
        cardHTML = cardHTML +        "</div>";
        cardHTML = cardHTML +      "</div>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +    "<div class='col-3 add-btn-cont'>";
        cardHTML = cardHTML +      "<button type='button' class='btn btn-outline-dark add add-btn' style='display: block;'><img src='img/add.png' alt='add'></br>Add</button>";
        cardHTML = cardHTML +      "<button type='button' class='btn btn-outline-dark add added-btn' style='display: none;'><img src='img/added.png' alt='added'></br>Added</button>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +  "</div>";
        cardHTML = cardHTML +  "<hr class='divider'>";
        cardHTML = cardHTML +  "<div class='card-statastics row'>";
        cardHTML = cardHTML +    "<div class='col-4'>";
        cardHTML = cardHTML +          "<img src='img/gratuate.png' alt='gratuate'><br/>";
        cardHTML = cardHTML +      "<p class='amount'>65%</p>";
        cardHTML = cardHTML +      "<p>Gratuate rate</p>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +    "<div class='col-4'>";
        cardHTML = cardHTML +      "<img src='img/cost.png' alt='avg cost'><br/>";
        cardHTML = cardHTML +      "<p class='amount'>$9K</p>";
        cardHTML = cardHTML +      "<p>Avg cost after aid</p>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +    "<div class='col-4'>";
        cardHTML = cardHTML +      "<img src='img/undergrate.png' alt='Under grate'><br/>";
        cardHTML = cardHTML +      "<p class='amount'>3K</p>";
        cardHTML = cardHTML +      "<p>Total undergrades</p>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +  "</div>";
        cardHTML = cardHTML +  "<div class='card-match'>";
        cardHTML = cardHTML +    "<div class='match-title'>";
        cardHTML = cardHTML +      "<p>Match</p>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +    "<div class='match-text'>";
        cardHTML = cardHTML +      "<p>Your <span class='bold'>Estimated SAT is lower</span> than the average score range of admitted and enrolled students</p>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +    "<div class='match-range-cont'>";
        cardHTML = cardHTML +      "<label class='min-lim-num'>600</label>";
        cardHTML = cardHTML +      "<div class='range-bar'>";
        cardHTML = cardHTML +        "<div class='your-point' style='left: 40%;' data-toggle='tooltip' data-placement='top' title='YOU'></div>";
        cardHTML = cardHTML +        "<div class='avrg-range' style='left: 39%; width: 16%'><p>990-1150</p></div>";
        cardHTML = cardHTML +        "<label class='max-lim-num'>1600</label>";
        cardHTML = cardHTML +      "</div>";
        cardHTML = cardHTML +    "</div>";
        cardHTML = cardHTML +  "</div>";
        cardHTML = cardHTML +"</div>";

        $("#card-holder").append(cardHTML);
    }
    $(".your-point").tooltip('show');
});

  $(document).on('click','.add-btn',function(){
    $(this).hide();
    $(this).siblings(".added-btn").show();
  });
  $(document).on('click','.added-btn',function(){
    $(this).hide();
    $(this).siblings(".add-btn").show();
  });


});