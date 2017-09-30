<template>
    <div>
        <img class="body-pic" :src="imgUrl" />
        <!-- <div class="tangzuo-container"> -->
            <div class="tangzuo-item item-1" @click="showModal(1)">
                <p>会唱歌的奥利奥</p>
            </div>
            <div class="tangzuo-item item-2" @click="showModal('2')">
                <p>绽放家乐氏的恒久之美</p>
            </div>
            <div class="tangzuo-item item-3" @click="showModal('3')">
                <p>与kindle一起发现阅读的乐趣</p>
            </div>
            <div class="tangzuo-item item-4" @click="showModal('4')">
                <p>和携程一起，用你的创意发现旅行的意义</p>
            </div>
        <!-- </div> -->
        <div id="modal">
            <div class="video-container modal-item" v-for="(video, index) in videoList">
                <embed :src="video.url" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
            </div>
            <div class="longPic-container modal-item">
                <img :src="longPicUrl" />
            </div>
            <img src="../../assets/image/left.png" class="left-btn" @click="toPrev"/>
            <img src="../../assets/image/right.png" class="right-btn" @click="toNext"/>
            <img src="../../assets/image/close.png" class="close-btn" @click="hideModal"/>
        </div>
        <my-footer />
    </div>
</template>
<script src="./script.js">

</script>
<style src="./style.css" scoped></style>