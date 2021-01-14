<template>
    <div class="content">
        {{ announceData }}
    </div>
</template>

<script>
export default {
    name: 'Announce',
    props: {
        announceData: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>

</style>