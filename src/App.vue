<template>
  <div id="app">
    <div class="header-nav">
      <ul>
        <li class="active" @click="navSwitchTo('/')"><div class="link">首页</div></li>
        <li class="" @click="navSwitchTo('/tangce')"><div class="link">唐策</div></li>
        <li class=""><div class="link">唐作</div></li>
        <li class="" @click="navSwitchTo('/tangshuo')"><div class="link">唐说</div></li>
        <li class="" @click="navSwitchTo('/tangren')"><div class="link">唐人</div></li>
        <li class="" @click="navSwitchTo('/hezuo')"><div class="link">合作</div></li>
      </ul>
    </div>
    <transition :name="animation">
        <router-view class="page-container"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
      animation: function() {
          return this.$root.animation;
      }
  },
  mounted: function() {
    let navItems = document.querySelectorAll('.header-nav ul li');
    navItems.forEach(function(navItem) {
      navItem.onclick = function() {
        navItems.forEach(function(item) {
          item.setAttribute('class', '');
        });
        this.setAttribute('class', 'active');
      }
    })
  },
  methods: {
    navSwitchTo(path){
      this.switchTo(path, 'fade');
    }
  }
}
</script>

<style>
#app {
  position: relative;
  height: 100%;
  width: 100%;
}

.header-nav{
  position: relative;
  height: 80px;
  /* background-color: #eee; */
  background-image: url('assets/image/tang_icon.png');
  background-repeat: no-repeat;
  background-size: auto 60px;
  background-position: 5% center;
  z-index: 1;
  /* box-shadow: 0 1px 5px #bbb; */
  min-width: 1168px;
}

.header-nav ul{
  float: right;
  margin-right: 5%;
  height: 100%;
}

.header-nav ul li{
  display: inline-block;
  position: relative;
  font-size: 18px;
  color: #ffc447;  /*active: #ff6d33*/
  height: 100%;
  line-height: 80px;
  margin-left: 30px;
  cursor: pointer;
}

.header-nav ul li:last-child::after{
  display: none;
}

.header-nav ul li::after{
  content: '';
  position: absolute;
  height: 1px;
  width: 60%;
  background-color: #ffc447;
  top: 51%;
  left: 42px;
  transform: rotate(-60deg)
}

.header-nav ul li.active{
  color: #ff6d33;
}

.header-nav ul li.active:before{
  display: block;
  position: absolute;
  top: 58px;
  content: '';
  height: 5px;
  width: 110%;
  background-image: url('assets/image/下滑.png');
  background-size: 47px;
  background-repeat: no-repeat;
  background-position: -5px -7px;
  border-radius: 4px;
}

.page-container{
    position: absolute;
    left: 0px;
    top: 80px;
    width: 100%;
}

.body-pic{
  min-width: 1168px;
}
</style>
