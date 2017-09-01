$(function() {

    // Page scroll
    $('a[href*=#]').click(function() {
        var href= $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
        var position = target.offset().top;
        $($.browser.safari ? 'body' : 'html').animate({
            scrollTop:position
        }, 'slow');
        return false;
    });

});
