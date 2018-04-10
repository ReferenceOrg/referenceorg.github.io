$(document).ready(function () {
    // Top Navbar Scroll Change
    var scroll_start = 0;
    var offset = 50;
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset) {
        if (!$('#top-nav').hasClass('initialwhite')) { $("#top-nav").addClass('inverse'); }
        $('#top-nav').addClass('shadow');
    } else {
        if (!$('#top-nav').hasClass('initialwhite')) { $("#top-nav").removeClass('inverse'); }
        $('#top-nav').removeClass('shadow');
    }

    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset) {
            if (!$('#top-nav').hasClass('initialwhite')) { $("#top-nav").addClass('inverse'); }
            $('#top-nav').addClass('shadow');
        } else {
            if (!$('#top-nav').hasClass('initialwhite')) { $("#top-nav").removeClass('inverse'); }
            $('#top-nav').removeClass('shadow');
        }
    });

    // Nav Drawer
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });





});