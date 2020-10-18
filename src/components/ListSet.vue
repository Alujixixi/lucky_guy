<template>
    <div>
        <text></text>
        <text></text>
        <button @click="setList()">submit</button>
    </div>

</template>

<script>
    export default {
        name: "ListSet",
        props: {
            list: {
                type: Array,
                required: true
            },
            status: {
                type: String,
                required: true
            }
        },
        methods: {
            setList: function () {
                this.list = [1, 2, 3];
            }
        }
    }
</script>

<style scoped>

</style>
