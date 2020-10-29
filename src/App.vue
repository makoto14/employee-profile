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
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  overflow-y: auto;
  background-color: #f1f5f9;
}

#app {
  padding-top: 56px;
}
</style>
