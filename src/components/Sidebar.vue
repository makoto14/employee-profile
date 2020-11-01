<template>
    <div class="hidden side-bar">
      <vs-sidebar
        relative
        v-model="active"
        open
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home">
          Home
        </vs-sidebar-item>
        <vs-sidebar-item v-for="detail in userData.Details" :key="detail.Details" v-bind:id="detail.key">
            {{ detail.name }}
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
</template>

<script>
export default {
    data:() => ({
        active: 'home'
    }),
    props: {
        userData: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
.side-bar {
    min-width: 300px;
    margin-top: 16px;
}
</style>