$(function(){
    $(window).scroll(function(){
        $('.sessao').each(function(){
            var windowOffY = $(window).scrollTop();
            var windowHeight = $(window).height();
            var elOffY = $(this).offset().top;

            if(elOffY+200 < (windowOffY + windowHeight) && elOffY+200+$(this).height() > windowOffY){
                //console.log("Estamos na sessao" + $(this).attr('target'));
                $('a').css('border-bottom','0');
                var target = $(this).attr('target');
                $('.nav-'+target).css('border-bottom', '2px solid #8cffda');
                return;
            }
        });
    })
});