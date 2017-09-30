<template>
    <div class="main-container">
        <img class="body-pic" :src="imgUrl" />
        <div class="button button1" @click="switchToPage('/tangce')">
            了解更多
        </div>
        <div class="button button2" @click="switchToPage('/tangzuo')">
            了解更多
        </div>
        <div class="button button3" @click="switchToPage('/tangshuo')">
            了解更多
        </div>
        <div class="button button4" @click="switchToPage('/tangren')">
            了解更多
        </div>
        <div class="button button5" @click="switchToPage('/hezuo')">
            了解更多
        </div>
        <my-footer />
    </div>
</template>
<script src="./script.js">

</script>
<style src="./style.css" scoped></style>