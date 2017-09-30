import imgUrl from '@/assets/image/tangshuo.png'
import myFooter from '@/components/Footer'

export default {
    data: function(){
        return {
            msg: 'index',
            imgUrl: imgUrl
        }
    },
    mounted: function() {
        let navItems = document.querySelectorAll('.header-nav ul li');
        
        navItems.forEach(function(item) {
            item.setAttribute('class', '');
        });

        navItems[3].setAttribute('class', 'active');
    },
    components: {
        myFooter
    }
}