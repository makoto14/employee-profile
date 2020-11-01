<template>
  <div class="main">
      {{ userData }}
  </div>
</template>

<script>
export default {
    name: 'Main',
    props: {
        userData: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #ffffff;
    margin: 16px;
    border-radius: 50px;
    padding: 24px;
}
</style>
