import imgUrl from '@/assets/image/index.png'
import myFooter from '@/components/Footer'
import buttonUrl from '@/assets/image/index_button.png'

export default {
    data: function(){
        return {
            msg: 'index',
            imgUrl: imgUrl,
            buttonUrl: buttonUrl
        }
    },
    mounted: function() {
        let navItems = document.querySelectorAll('.header-nav ul li');
        
        navItems.forEach(function(item) {
            item.setAttribute('class', '');
        });

        navItems[0].setAttribute('class', 'active');

        if (document.querySelector('.main-container').offsetHeight > 100) {
            document.querySelectorAll('.button').forEach(function(dom) {
                dom.style.opacity = '1';
            });
        } else {
            document.querySelector('.body-pic').onload = function() {
                console.log('ready');
                document.querySelectorAll('.button').forEach(function(dom) {
                    dom.style.opacity = '1';
                });
            }
        }
        
    },
    components: {
        myFooter
    },
    methods: {
        switchToPage(path) {
            this.switchTo(path, 'fade');
            window.scrollTo(0,0)
        }
    }
}