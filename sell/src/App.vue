<template>
  <div id="app">
    <Footer>

    </Footer>
<router-view></router-view>

  </div>
</template>

<script>

import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
Footer,
  }
}
</script>

<style>
.menu{
   width: 100%;
   height: 30px;
   background: white;
 }
 .menu ul{
    width: 100%;
   height: 30px;
   display: flex;
 }
 .menu ul li{
    height: 30px;
    flex: 1;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: bolder;
    color: #6c7073;
 }
 .menu ul .active{
   color: red;
 }
</style>
