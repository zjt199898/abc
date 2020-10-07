<!--  -->
<template>
<div class='footer'>
<div class="nav">
<div class="left"><img src="../assets/1.jpg" alt=""></div>
<div class="right">
<div class="top">
<span>品牌</span>
<h2>粥品香坊(回龙观)</h2>
</div>
<div class="jz">蜂鸟转送/38分钟送达</div>
<div class="bottom"><span>减</span><p>在线支付满28减5</p></div>
</div>
<div class="hint"><span>公告</span><p>粥品香坊打固话手哈手机号机的金黄色的就是机会...></p></div>
<div class="location">5个></div>
</div>
<div class="menu">
<ul>
<router-link to="/views/commodity" tag="li">
        <p>商品</p>
      </router-link>
      <router-link to="/views/merchant" tag="li">
        <p>评论</p>
      </router-link>
      <router-link to="/views/comment" tag="li">
        <p>商家</p>
      </router-link>
</ul>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:"Footer",
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>
  .nav{
    width: 100%;
    height: 120px;
    background: #54473f;
    position: relative;
  }
 .nav .left{
   width: 60px;
   height: 60px;
   float: left;
   margin: 20px;
 }
.nav .left img{
  display: block;
  width: 100%;
  height: 100%;
}
.nav .right{
   width: 240px;
   height: 80px;
   float: left;
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   color: white;
 }
 .nav .right .top{
   display: flex;
   align-items: center;
   font-weight: bolder;
 }
 .nav .right .top span{
   width: 36px;
   height: 24px;
   background: red;
   line-height: 24px;
   text-align: center;
   font-size: 14px;
   margin-right: 10px;
 }
 .nav .right .jz{
   margin: 2px 0;
   font-size: 14px;

 }
 .nav .right .bottom{
   display: flex;
   align-items: center;
 }
 .nav .right .bottom span{
   width: 12px;
   height: 12px;
   color: red;
   background: white;
   line-height: 12px;
   text-align: center;
   margin-right: 5px;
 }
 .nav .hint{
   width: 100%;
   height: 26px;
   background: #574f4c;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
 }
 .nav .hint span{
   width: 30px;
   height: 14px;
   background: white;
   color: black;
  margin: 2px 10px 0 7px;
  font-weight: bolder;
  text-align: center;
  line-height: 14px;
 }
 .nav .hint p{
   font-weight: bolder;
   color: white;
 }
 .nav .location{
   width: 40px;
   height: 20px;
   background:#4c3f36;
   color: white;
   border-radius: 10px;
   position: absolute;
   right: 20px;
   bottom: 30px;
   text-align: center;
   line-height: 20px;
 }
</style>
