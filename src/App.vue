<template>
  <div id="app">
  <!--   <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
 mounted(){
   this.$nextTick(function () {
     setTimeout(function () {
       document.body.removeChild(document.getElementById('wrapper-loading'))
     },1000)
   })
 }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
