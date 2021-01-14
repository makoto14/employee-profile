<template>
    <div class="content">
        {{ personalInfomationData }}
    </div>
</template>

<script>
export default {
    name: 'PersonalInfomation',
    props: {
        personalInfomationData: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>

</style>