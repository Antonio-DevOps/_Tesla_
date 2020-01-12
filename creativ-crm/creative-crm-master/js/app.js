$(document).ready(function() {
    $('.ba-menu-btn').on('click', function(){
        let menu = $('.ba-menu');

        if (menu.hasClass('open')){
            menu.removeClass('open').hide();
        } else {
            menu.addClass('open').show();
        }
    });
    $(window).on('resize', function(){
        if($(this).width() > 991 ){
            $('.ba-menu').addClass('open').show();
        } else {
            $('.ba-menu').removeClass('open').hide();
        }
    })
    $('#showSearch').on('click', function(){

        let searchForm = $('.ba-search-form');
        // let toolbar = $('.ba-toolbar');

        // if(!searchFrom.hasClass('open')){

        //     let searchPositionY = toolbar.offset().top + toolbar.innerHeight();
        //     searchFrom.css('transform', 'translateY(' + searchPositionY + 'px)' );
        // } else {
        //     searchFrom.css('transform', 'translateY(-100%)')
        // }
        searchForm.toggleClass('open');
    })

    $(".ba-tabs__btn").on("click", function(){
        // добавление и удаление класса active
        $(".ba-tabs__btn.active").removeClass("active");
        $(".ba-tabs-panel.active").removeClass("active");

        const tabIndex = $(this).attr("data-tab");

        $(this).addClass("active");
        $("[data-tab-index="+ tabIndex +"]").addClass("active");
    })

})