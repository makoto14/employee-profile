<template>
  <div id="app">
    <Navigation></Navigation>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
