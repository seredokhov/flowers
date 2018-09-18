// Выбор размера букета
$(function(){
    var link =$('.vertical_scale a');

    link.on('click', function(){
        link.not($(this)).removeClass('active');
        if ($(this).hasClass('active')) return;
        $(this).addClass('active');
        return false;
    });
});

// Счетчик
$(function(){
    var input = $('.counter input'),
        plus = $('.counter .plus'),
        minus = $('.counter .minus');

    plus.on('click', function(){
        var count = parseInt($(this).siblings('input').val());
        count++;
        $(this).siblings('input').val(count);
    });
    minus.on('click', function(){
        var count = parseInt($(this).siblings('input').val());
        count--;
        if(count < 0) count = 0;
        $(this).siblings('input').val(count);
    });
});

// Слайдер
$(function(){
    var prev = $('.section_6 .prev'),
        next = $('.section_6 .next'),
        owl = $('.section_6 .owl-carousel'),
        idx = $('.section_6 .current'),
        allCount = $('.section_6 .sum');

    owl.owlCarousel({
        items: 3,
        loop:false,
        margin:0,
        merge:true,
        nav:true,
        navText: ['',''],
        dots: true,
        responsive:{
            0:{
                mergeFit:true,
                items: 1
            },
            768:{
                mergeFit:false,
                items: 3
            }
        },
        onInitialize: setCount,
        onChanged: setIdx
    });

    next.click(function() {
        owl.trigger('next.owl.carousel');
    });
    prev.click(function() {
        owl.trigger('prev.owl.carousel');
    });

    function setCount() {
        var items = owl.find('.item');
        allCount.text(items.length);
    }
    function setIdx(event) {
        var currentIdx = event.item.index + 1;
        if(!currentIdx) currentIdx = 1;
        idx.text(currentIdx);   
    }

});

// Yandex map
$(function(){
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            center: [43.237912, 76.934701],
            zoom: 17,
            controls: [],
            behaviors: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
            //placemark = new ymaps.Placemark([43.237912, 76.934701]);


        placemark = new ymaps.Placemark(
            [43.237912, 76.934701],
            {balloonContent: 'г. Алматы, Проспект Сейфуллина, 546, офис 107' },
            {
                iconLayout: 'default#image',
                iconImageHref: 'images/mark.png',
                iconImageSize: [96, 117],
                iconImageOffset: [-50, -90]
            }
            );

        myMap.geoObjects.add(placemark);
    }
});

// Информация о букете (моб версия)
$(function(){
    var infoLink = $('.mob_info'),
        fade = $('.mobile_fade'),
        close = fade.find('.close_fade');


    infoLink.on('click', function() {
        $(this).parent().siblings('.mobile_fade').toggleClass('showed');
        return false;
    });

    close.on('click', function() {
        $(this).parent().removeClass('showed');
    });
});

// Перемещение контактов
$(function() {
    if (document.body.clientWidth < 992) {
        var target = $('#remove').detach(),
            block = $('#for_remove');
        target.appendTo(block);
    }
});

// Дополнительная шапка

$(function() {
    if (document.body.clientWidth > 992) {
        $(window).scroll(function (){
            var windowScroll = $(window).scrollTop();
            var offset = 50;

            if (windowScroll > offset) {
                $('header').addClass("fix");
            } else {
                $('header').removeClass("fix");
            }
        });
    }
});

// Мобильное меню
$(function() {
    var open = $('.hamb'),
        close = $('.menu_close'),
        menu = $('.mobile_menu'),
        overlay = $('.overlay');

    open.on('click', function() {
        menu.addClass('opened');
        overlay.fadeIn(300);
    });
    close.add(overlay).on('click', function() {
        menu.removeClass('opened');
        overlay.fadeOut(300);
    });
});
