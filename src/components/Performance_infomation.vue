<template>
    <div class="content">
        {{ performanceInfomationData }}
    </div>
</template>

<script>
export default {
    name: 'PerformanceInfomation',
    props: {
        performanceInfomationData: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>

</style>