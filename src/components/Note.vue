<template>
    <div class="content">
        {{ noteData }}
    </div>
</template>

<script>
export default {
    name: 'Note',
    props: {
        noteData: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>

</style>