<template>
  <div id="app">
    <Footer></Footer>
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
</style>
