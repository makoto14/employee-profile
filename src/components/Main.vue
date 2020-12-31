<template>
  <div class="main">
      <div class="main-conteiner" v-for="detail in userData.Details" :key="detail.Details">
            <div class="conteiner-title">{{ detail.name }}</div>
            <div class="conteiner-main">{{ detail.content }}</div>
      </div>
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
.main-conteiner {
    background-color: #ffffff;
    margin: 16px;
    border-radius: 50px;
    padding: 24px;
}

.conteiner-title {
    font-weight: bold;
}

.conteiner-main {
    margin: 8px 0 0 0;
}
</style>
