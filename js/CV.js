
/**
 * Created by MYNVTSE61526 on 06/11/2017.
 */
$( document ).ready(function() {
   // $(".cv-block").css('min-height', $(window).outerHeight());
    var screenheight = $(window).width();
    if(screenheight >= 1240){
        $(".cv-block").css('min-height', $(window).outerHeight());
    }else{
        $(".cv-block").css('min-height', $(".cv-content").outerHeight());
    }
    $(window).on('resize', function(){
        if($(this).width() >= 1240){
            $(".cv-block").css('min-height', $(window).outerHeight());
        }else{
            $(".cv-block").css('min-height', $(".cv-content-block").outerHeight());
        }

    });
});