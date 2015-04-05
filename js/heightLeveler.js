// Author - Kevin Rosario Rodrigues.
// e: kevrodrigues116@gmail.com

// Free to use under The MIT License (MIT)
// javascript height leveler. Calculates heights and levels them out. Works with any element

var heightAdjuster = function () {

    function heightLeveler(group) {

        var tallest = 0;
        
        group.each(function () {
            thisHeight = $(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }
   
    return {
        levelOut: heightLeveler
    };

}();

$(function () {
    $('.control.button .apply').on('click', function (e) {
        e.preventDefault();
        heightAdjuster.levelOut($('.button-group > a'));
    });

    $('.control.button .reset').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.main-content').find('.button-group > a').css({"height": ""});
    });

    $('.control.content > .apply').on('click', function (e) {
        e.preventDefault();
        heightAdjuster.levelOut($('.content-group .left-group, .right-group'));
    });

    $('.control.content > .reset').on('click', function (e) {
        e.preventDefault();
        $('.content-group').find('.left-group, .right-group').css({"height": ""});
    });


});