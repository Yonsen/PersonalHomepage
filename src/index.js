/**
 * Created by wu on 2017/2/21.
 */
require(__dirname + '/css/common.css');
require(__dirname + '/css/index.less');
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

        this.tagCloud();

        var π=Math.PI,sin=Math.sin,cos=Math.cos;
        void function(){
            var k=0; //元素上显示的数字
            var r=100; //半径
            var h=8; //半赤道的元素个数
//遍历经线
            for(var i=0;i<=h;i++){
                var φ=i/h*π,s=sin(φ)*r,c=cos(φ)*r;
//计算该纬线上最适合的元素个数
//等于赤道的元素个数乘以当前纬线半径和赤道半径的比
                var l=Math.max(s/r*h*2|0,1);
//遍历纬线
                for(var j=0;j<l;j++){
//创建元素，并初始化
                    var e=document.createElement("a");
                    e.href="#"+k;
                    e.textContent=k++;
                    ball.appendChild(e);
//调整好朝向，并平移旋转到初始位置
                    e.style.transform=[
                        "rotateY("+j/l*360+"deg)",
                        "rotateZ("+i/h*180+"deg)",
                        "translateY("+r+"px)",
                        "rotateX(-90deg)",
                        "rotateZ(-90deg)",
                    ].join(" ");
                };
            };
        }();
    },
    tagCloud: function () {
        var π = Math.PI,
            sin = Math.sin,
            cos = Math.cos,
            ball = document.querySelector('.ball');

        var k = 0, // 元素上显示的数字
            r = 100, // 半径
            h=8; // 半赤道的元素个数
        // 遍历经线
        for(var i=0; i<=h; i++){
            var φ = i/h*π,
                s=sin(φ)*r,
                c=cos(φ)*r;
            // 计算该纬线上最适合的元素个数
            // 等于赤道的元素个数乘以当前纬线半径和赤道半径的比
            var l = Math.max(s/r*h*2|0, 1);
            // 遍历纬线
            for(var j=0; j<l; j++){
                // 创建元素，并初始化
                var tag = document.createElement('a');
                tag.href = '#'+k;
                tag.textContent = k++;
                // 调整好朝向，并平移旋转到初始位置
                tag.style.transform = [
                    'rotateY(' + j/l*360 + 'deg)',
                    'rotateZ(' + i/h*180 + 'deg)',
                    'translateY(' + r + 'px)',
                    'rotateX(-90deg)',
                    'rotateZ(-90deg)'
                ].join(' ');
                ball.appendChild(tag);
            }
        }
    }
}.init();