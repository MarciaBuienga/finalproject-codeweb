$(document).ready(function()
{
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.narbar').toggleClass('nav-toggle');        
    });

    $(window).on('scroll load', function(){

        $('#menu-bar').toggleClass('fa-times');
        $('.narbar').removeClass('nav-toggle'); 
    });

    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('src');

        $('#sandes-img').attr('src', src);
    });
});