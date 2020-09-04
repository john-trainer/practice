window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

$(function(){
    $('.nav-btn').on('click', function(){
        $('.nav-btn, .ham-menu').toggleClass('show');
    });
});

$(function(){
    var tscroll = $('#top-btn');
    tscroll.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            tscroll.fadeIn();
        } else {
            tscroll.fadeOut();
        }
    });
    tscroll.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 300);
        return false;
    });
});

$(function(){
    $('a[href^="#"]').click(function(){
        var adjust = -64;
        var speed = 300;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});