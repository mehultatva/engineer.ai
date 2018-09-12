$(document).ready(function() {
    //Prevent Page Reload on all # links
    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });



    $(".trainer_card").on("mouseenter", function() {
        $(this).addClass("flip");
    })
    $(".trainer_card").on("mouseleave", function() {
        $(this).removeClass("flip");
    })

    $(".trainer_card").on("touchstart", function() {
        $(this).closest(".trainers").find(".trainer_card").removeClass("flip");
        $(this).toggleClass("flip");
    })

 $(".back-to-top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    })

    //slider
    var window_width = $(window).width(),
        slider_item = $(".home-slider-with-parallex li").length;
    $(".home-slider-with-parallex li:first-child").addClass('active');
    $(".home-slider-with-parallex li").height(window_width * 0.246);
    $(".home-slider-with-parallex li").width(window_width);
    $(".home-slider-with-parallex ul").width(window_width * slider_item);

    //next click
    $(".next-btn").click(function() {
        if ($(".home-slider-with-parallex li.active").next().length) {
            $(".home-slider-with-parallex li.active").addClass('next').next().addClass('active');
            $(".home-slider-with-parallex li.next").removeClass('active next');
            var current_active = $(".home-slider-with-parallex li.active").index();
            $(".home-slider-with-parallex ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
    })
    //prev click
    $(".prev-btn").click(function() {
        if ($(".home-slider-with-parallex li.active").prev().length) {

            $(".home-slider-with-parallex li.active").addClass('prev').prev().addClass('active');
            $(".home-slider-with-parallex li.prev").removeClass('active prev');
            var current_active = $(".home-slider-with-parallex li.active").index();
            $(".home-slider-with-parallex ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
    })

var wrap_width=0,wrapper_width,list_width,no_active,list_width=207,wrap_width;

    $(window).load(function(event) {

        $("body").css("opacity" , 1)
wrapper_width = $(".logo-wrap").width();
 $('.partner-section ul').css('-webkit-transform',  'translateX(0px)');
no_active = parseInt(wrapper_width/list_width, 10)

//ul width
$(".partner-section li").each(function(){
if($(this).index() < no_active){
   $(this).addClass("active")
}
wrap_width = wrap_width + list_width;
})
$(".partner-section ul").width(wrap_width);


//prev click
$(".logo-prev").click(function(){

        if ($(".partner-section li.active").first().prev().length) {
            $(".partner-section li.active").last().removeClass("active");
$(".partner-section li.active").first().prev().addClass("active");

if($(".partner-section li.active").first().index() == 0){
            $(".partner-section ul").css("transform", "translateX(0px)");
            $(".logo-prev").addClass("disable");
}
else{
var currTrans = $('.partner-section ul').css('-webkit-transform').split(/[()]/)[1];
var posx = currTrans.split(',')[4];
var posx_int = parseInt(posx, 10)
posx_int = posx_int + list_width;
            $(".partner-section ul").css("transform", "translateX(" + (posx_int) + "px)");
}

            };
})

//next click
$(".logo-next").click(function(){

        if ($(".partner-section li.active").last().next().length) {
$(".partner-section li.active").first().removeClass("active");
$(".partner-section li.active").last().next().addClass("active");
if($(".partner-section li.active").last().index() == ($(".partner-section li").length -1) ){
            $(".partner-section ul").css("transform", "translateX(" + -(wrap_width-wrapper_width) + "px)");
            $(".logo-next").addClass("disable");
}
    else{
var currTrans = $('.partner-section ul').css('-webkit-transform').split(/[()]/)[1];
var posx = currTrans.split(',')[4];
var posx_int = parseInt(posx, 10)
posx_int = posx_int - list_width;
            $(".partner-section ul").css("transform", "translateX(" + (posx_int) + "px)");
    }
            };

})

    })




    $(window).resize(function(event) {
wrapper_width = $(".logo-wrap").width();

        window_width = $(window).width(),
            slider_item = $(".home-slider-with-parallex li").length;
        $(".home-slider-with-parallex li:first-child").addClass('active');
        $(".home-slider-with-parallex li").height(window_width * 0.246);
        $(".home-slider-with-parallex li").width(window_width);
        $(".home-slider-with-parallex ul").width(window_width * slider_item);
        var current_active = $(".home-slider-with-parallex li.active").index();
        $(".home-slider-with-parallex ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");

    });




    /*mobile menu*/
    $(".hamburger-menu").click(function() {
        $("html,body").toggleClass("open-menu");
    });
    
     $.fn.parallax = function(options) {
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            'start': 0,
            'stop': offset.top + $$.height(),
            'coeff': 0.95
        };
        var opts = $.extend(defaults, options);
        return this.each(function() {
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if ((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        'background-position': '0 ' + newCoord + 'px'
                    });
                }
            });
        });
    };
    if ($('.parallax').length) {
        $('.parallax').parallax({ 'coeff': -0.3 });
    }

});



/* Window scroll */
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("body").addClass('small-header top-full');
    } else {
        $("body").removeClass('small-header');
    }
});