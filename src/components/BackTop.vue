<template>
    <div @click="onHandleClick">
        <img src="../assets/image/返回顶部.png" />
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    data: function() {
        return {
            
        }
    },
    mounted() {
        console.log('window\'s height:' + $(window).height());
    },
    methods: {
        onHandleClick() {
            let nav = document.querySelector('.header-nav');
            nav.scrollIntoView();
        }
    }
}
</script>
<style scoped>
div{
    position: fixed;
    bottom: 30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background-color: #ffb617;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,.1);
}

img{
    height: 90%;
    display: block;
    margin: auto;
    margin-top: 5%;
}
</style>
