$(document).foundation();

$(".carousel-text").bxSlider({
    pager: false
});

$(".top-slider").bxSlider(
    {
        mode: 'fade'
    }
);


$("#autoCloseExample li a").click(function(){
    var $selected = $(this).text();
    $(".dropdown-btn").text($selected);

    if($selected == 'Blog'){
        $("#search-input").attr("placeholder",'Search in blog')
        $("#search-input").parent().addClass("blog");
    }

    if($selected == 'Portfolio'){
        $("#search-input").attr("placeholder",'Search in portfolio')
        $("#search-input").parent().removeClass("blog");
    }
});
$(".hamburger-icon").click(function(){
    $("nav.main-nav").slideToggle('slow');
});

$( window ).resize(function() {
    if($( window ).width() > 640) {
        $("nav.main-nav").show();
    }
});