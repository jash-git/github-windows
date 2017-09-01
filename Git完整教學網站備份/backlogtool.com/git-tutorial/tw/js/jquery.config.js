/* config */
$(function() {

    setTimeout(function(){
        $('#socials').show();
    }, 1000);

    //scroll
    $('#topLink').click(function () {
        $(this).blur();
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

    /*
     * Navigation active
     */

    var $url = location.href.split("/");
    var $link = $url.slice($url.length-1,$url.length);
    var $endPath = $url.slice($url.length-2,$url.length-1);
    // Global Nav
    $('#nav').find('a[href*="'+$endPath+'/"]').addClass('Current');
    // Side-menu
    $('.s_sideMenu').find('a[href="./'+$link+'"]').addClass('Selected');

});
