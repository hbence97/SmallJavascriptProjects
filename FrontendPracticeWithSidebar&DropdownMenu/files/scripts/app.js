$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('header nav').addClass('scrolled')
    } else {
        $('header nav').removeClass('scrolled');
    }
});

$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('.sidebar').addClass('sidebar-scrolled')
    } else {
        $('.sidebar').removeClass('sidebar-scrolled');
    }
});

$('.dimens-mngmnt-btn').click(function(e){
    $('.sidebar ul .dimens-mngmnt-show').toggleClass("show");
    $('.sidebar ul .first').toggleClass("rotate");
});

$('.engine-spec-btn').click(function(e){
    $('.sidebar ul .engine-spec-show').toggleClass("show");
    $('.sidebar ul .second').toggleClass("rotate");
});

$('.alloc-engine-btn').click(function(e){
    $('.sidebar ul .alloc-engine-show').toggleClass("show");
    $('.sidebar ul .third').toggleClass("rotate");
});

$('.user-mngmnt-btn').click(function(e){
    $('.sidebar ul .user-mngmnt-show').toggleClass("show");
    $('.sidebar ul .fourth').toggleClass("rotate");
});

$('.prmtr-tables-btn').click(function(e){
    $('.sidebar ul ul .prmtr-tables-show').toggleClass("show");
    $('.sidebar ul .fifth').toggleClass("rotate");
});

$('.hierarchies-filters-btn').click(function(e){
    $('.sidebar ul ul .hierarchies-filters-show').toggleClass("show");
    $('.sidebar ul .sixth').toggleClass("rotate");
});

$('.rate-mngmnt-btn').click(function(e){
    $('.sidebar ul ul .rate-mngmnt-show').toggleClass("show");
    $('.sidebar ul .seventh').toggleClass("rotate");
});

$('.ftp-patterns-btn').click(function(e){
    $('.sidebar ul ul .ftp-patterns-show').toggleClass("show");
    $('.sidebar ul .eight').toggleClass("rotate");
});