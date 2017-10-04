import imgUrl from '@/assets/image/tangshuo_min.jpg'
import myFooter from '@/components/Footer'
import audioUrl from '@/assets/audio/唐说采访音频.mp3'

export default {
    data: function(){
        return {
            msg: 'index',
            imgUrl: imgUrl,
            audioUrl: audioUrl
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