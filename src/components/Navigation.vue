<template>
  <div class="navigation">
    <div class="logo-area">

    </div>
    <div class="right-area">
      <div class="search-area">
      <vs-input
        primary
        v-model="value"
        placeholder="Search" />
      </div>
      <div class="account-area">
        <vs-avatar size="30" primary badge badge-color="success">
          <i class='bx bxs-hot' ></i>
        </vs-avatar>
      </div>
    </div>
  </div>
</template>

<script>

import '../../node_modules/material-icons/iconfont/material-icons.css'

export default {
  name: 'Navigation',
  data:() => ({
  active: 0
})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  position: fixed;
  background-color: #ffffff;
  /* width: 100vw; */
  width: calc(100% - 32px);
  height: 56px;
  top: 0;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-area {
  display: flex;
}

.search-area {
  margin-right: 16px;
}
</style>
