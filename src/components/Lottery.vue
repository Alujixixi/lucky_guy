<template>
    <p class="main_name">
        {{currentOne}}
    </p>
</template>

<script>
    export default {
        name: "Lottery",
        props: {
            currentOne: {
                type: String,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>
