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
        nav:false,
        responsive:{
            678:{
                mergeFit:true
            },
            1000:{
                mergeFit:false
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