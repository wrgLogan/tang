import imgUrl from '@/assets/image/tangce.png'
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

        navItems[1].setAttribute('class', 'active');
    },
    components: {
        myFooter
    }
}