<template>
  <div class="main">
      <div class="main-conteiner" v-for="detail in userData.Details" :key="detail.Details">
            <div class="conteiner-title">{{ detail.name }}</div>
            <div class="conteiner-main">
                <!-- {{ detail.content }} -->
                <Announce  v-if="detail.key === 'announce'" :announceData="detail.content"></Announce>
                <PersonalInfomation v-if="detail.key === 'personalInfomation'" :personalInfomationData="detail.content"></PersonalInfomation>
                <PerformanceInfomation v-if="detail.key === 'performanceInfomation'" :performanceInfomationData="detail.content"></PerformanceInfomation>
                <Note v-if="detail.key === 'note'" :noteData="detail.content"></Note>
            </div>
      </div>
  </div>
</template>

<script>
import Announce from './Announce.vue'
import PersonalInfomation from './Personal_Infomation.vue'
import PerformanceInfomation from './Performance_infomation.vue'
import Note from './Note.vue'

export default {
    name: 'Main',
    props: {
        userData: {
            type: Object,
            require: true
        }
    },
    components: {
        Announce,
        PersonalInfomation,
        PerformanceInfomation,
        Note
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
