$(function(){

    /*MENU MOBILE*/ 
    $('.mobile').click(function(){
        $(this).find('ul').slideToggle();
    })
    
    /*menu scroll*/ 
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop':offSetTop});
        
        return false;
    })
    
});