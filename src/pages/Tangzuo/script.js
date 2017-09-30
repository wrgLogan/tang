import imgUrl from '@/assets/image/tangzuo_bg.jpg'
import myFooter from '@/components/Footer'
import longPicUrl_1 from '@/assets/image/long_pic_1.jpg'
import longPicUrl_2 from '@/assets/image/long_pic_2.jpg'
import longPicUrl_3 from '@/assets/image/long_pic_3.jpg'
import longPicUrl_4 from '@/assets/image/long_pic_4.jpg'
import $ from 'jquery'

var jQuery = $;

$.fn.extend({
    loganAnimate: function (prop, params, callback) {
        var empty = jQuery.isEmptyObject(prop),
            defaultParams = {
                speed: 300,
                delay: 0,
                easing: 'ease-out'
            };

        // Account for `.transition(properties, callback)`.
        if (typeof params === 'function') {
            callback = params;
            params = {};
        }

        var p = $.extend(defaultParams, true, params);

        if (params && params.debug) {
            console.log(p);
        }

        if (empty) {
            callback && callback();
        } else {
            // 初始化
            this.css({
                "transition": "all " + p.speed + 'ms ' + p.easing + ' ' + p.delay + "ms",
                "height": this.css('height'),
                "width": this.css('width'),
                "opacity": this.css('opacity')
            });

            // 开启GPU加速的HACK
            // this.css({
            //     "webkit-transform": "translate3d(0,0,0)",
            //     "-moz-transform": "translate3d(0,0,0)",
            //     "-ms-transform": "translate3d(0,0,0)",
            //     "-o-transform": "translate3d(0,0,0)",
            //     "transform": "translate3d(0,0,0)"
            // });

            setTimeout(function () {
                this.css(prop);
            }.bind(this), 0);

            setTimeout(function () {
                this.css({
                    "transition": "none"
                });
                callback && callback();
            }.bind(this), p.speed);
        };

        return this;
    },
    isShow: function () {
        var displayVal = this.css('display');
        console.log(displayVal != 'none');
        return displayVal != 'none';
    }
})

export default {
    data: function () {
        return {
            msg: 'index',
            imgUrl: imgUrl,
            longPicUrl: longPicUrl_1,
            videoList: [{
                url: 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=h0502mtnevk&auto=0'
            }, {
                url: 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=e0554ivrpvb&auto=0'
            }]
        }
    },
    mounted: function () {
        let navItems = document.querySelectorAll('.header-nav ul li');

        navItems.forEach(function (item) {
            item.setAttribute('class', '');
        });

        navItems[2].setAttribute('class', 'active');

        $('.longPic-container').niceScroll()
    },
    components: {
        myFooter
    },
    methods: {
        showModal: function (index) {
            var $modal = $('#modal');
            var $videoContainer = $('.video-container').eq(0);
            var $longPicContainer = $('.longPic-container');

            var videoListArr = [
                [{
                    url: 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=h0502mtnevk&auto=0'
                }, {
                    url: 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=e0554ivrpvb&auto=0'
                }],
                [],
                [{
                    url: 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=f0554eg2w79&auto=0'
                }],
                [{
                    url: 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=r03396v84tk&auto=0'
                }]
            ];

            var longPicArr = [
                longPicUrl_1,
                longPicUrl_2,
                longPicUrl_3,
                longPicUrl_4
            ];

            console.log(index);

            this.$data.videoList = videoListArr[index - 1];
            this.$data.longPicUrl = longPicArr[index - 1];

            setTimeout(function () {
                // 载入视频和长图
                let $modalItems = $('.modal-item');
                let $firstItem = $modalItems.eq(0);

                // init
                $modal.show().css('opacity', '0');
                $modalItems.hide();
                $firstItem.show().css({
                    'opacity': '0',
                    'transform': 'translate(-50%, -50%)'
                });

                // animate
                $modal.loganAnimate({
                    'opacity': '1'
                });

                $firstItem.loganAnimate({
                    'opacity': '1',
                    'transform': 'translate(-50%, -50%)'
                });
            }, 100)

        },
        hideModal: function () {
            var $modal = $('#modal');
            var $videoContainer = $('.video-container');
            var $longPicContainer = $('.longPic-container');

            // animate
            $modal.loganAnimate({
                'opacity': '0'
            }, function () {
                $modal.hide();
            });

            $longPicContainer.loganAnimate({
                'opacity': '1',
                'transform': 'translate(-50%, -70%)'
            });

            $videoContainer.loganAnimate({
                'opacity': '1',
                'transform': 'translate(-50%, -70%)'
            });
        },
        toNext: function () {
            var modalItems = $('.modal-item');
            var showIndex = 0;
            var itemLength = modalItems.length;

            for (let i = 0; i < itemLength; i++) {
                var $item = modalItems.eq(i);
                if ($item.isShow()) {
                    break;
                };
                showIndex++;
            };

            if (showIndex >= itemLength - 1) {
                return;
            };

            let $nowItem = modalItems.eq(showIndex);
            let $nextItem = modalItems.eq(showIndex + 1);

            // init
            $nextItem.css({
                'display': 'block',
                'opacity': '0',
                'transform': 'translate(00%, -50%)'
            })

            $nowItem.loganAnimate({
                'opacity': '0',
                'transform': 'translate(-100%, -50%)'
            });

            $nextItem.loganAnimate({
                'opacity': '1',
                'transform': 'translate(-50%, -50%)'
            }, function () {
                $nowItem.hide();
            });
        },
        toPrev: function () {
            var modalItems = $('.modal-item');
            var showIndex = 0;
            var itemLength = modalItems.length;

            for (let i = 0; i < itemLength; i++) {
                var $item = modalItems.eq(i);
                if ($item.isShow()) {
                    break;
                };
                showIndex++;
            };

            if (showIndex <= 0) {
                return;
            };

            let $nowItem = modalItems.eq(showIndex);
            let $prevItem = modalItems.eq(showIndex - 1);

            // init
            $prevItem.css({
                'display': 'block',
                'opacity': '0',
                'transform': 'translate(-100%, -50%)'
            })

            $nowItem.loganAnimate({
                'opacity': '0',
                'transform': 'translate(0%, -50%)'
            });

            $prevItem.loganAnimate({
                'opacity': '1',
                'transform': 'translate(-50%, -50%)'
            }, function () {
                $nowItem.hide();
            });
        }
    }
}
