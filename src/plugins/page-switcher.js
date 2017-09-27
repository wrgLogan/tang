var install = function (Vue, options) {
    console.log(Vue, options);
    var router = options.router;
    var root = options.vm;

    if (!root.animation) {
        root.$data.animation = '';
    }

    root.$data.animation = 'backward';

    Vue.prototype.$switchTo = Vue.prototype.switchTo = function(path, animation, duration) {
        if (duration) {
            // $('.page-container').css('transition-duration', duration + 'ms ');
            document.querySelectorAll('.page-container').forEach(function(dom){
                dom.style.transitionDuration = duration + 'ms';
            })
        }

        root.$data.animation = animation || 'forward';
        router.push(path);

        setTimeout(function() {
            root.$data.animation = 'backward';
        }, duration || 300);
    };

    Vue.prototype.$goBackward = function(animation) {
        root.$data.animation = animation || 'backward';
        router.back();
    };
};

export default {
    install: install
};