/**
 * Created by wu on 2017/2/21.
 */
require(__dirname + '/css/index.less');
var Swiper = require(__dirname + '/lib/swiper.min.js');
var Clipboard = require(__dirname + '/lib/clipboard.min.js');
var Util = require(__dirname + '/js/util.js');
var app = {
    init: function () {
        $(".loading-process").remove();
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            mousewheelControl: true
        });
    }
}.init();