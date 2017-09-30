import imgUrl from '@/assets/image/hezuo_min.jpg'
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

        navItems[5].setAttribute('class', 'active');
    },
    components: {
        myFooter
    }
}