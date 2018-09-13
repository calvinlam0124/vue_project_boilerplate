<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link :to="{ name: 'HelloWorld', params: { userId: 123 }}">HelloWorld/Home</router-link>
    <router-link :to="{ name: 'ContentOneName', params: { userId: 123 }}">ContentOne</router-link>
    <router-link :to="{ name: 'ContentTwoName', params: { userId: 123 }}">ContentTwo</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  background-color: aquamarine;
}
</style>
