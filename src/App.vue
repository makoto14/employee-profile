<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="conteiner">
      <Sidebar :userData="userData"></Sidebar>
      <Main :userData="userData"></Main>
    </div>
  </div>
</template>

<script>
import userData from './assets/profile-data.json'
import Navigation from './components/Navigation.vue'
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  data: function(){
    return {
      userData: userData
    }
  },
  components: {
    Navigation,
    Sidebar,
    Main
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

.conteiner {
  display: flex;
}
</style>
