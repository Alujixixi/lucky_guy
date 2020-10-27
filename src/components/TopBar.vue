<template>
    <div class="top-bar">
        <i class="drop-down icon-top-bar iconfont icon-setting">
            <ul class="drop-down-content">
                <li><a @click="onListSettingClick">抽奖名单</a></li>
                <li><a href="#">我是2</a></li>
                <li><a href="#">我是3</a></li>
            </ul>
        </i>
        <!--        <a class="button-top-bar button button-glow button-border button-rounded button-primary">录入名单</a>-->
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        methods: {
            onListSettingClick: function () {
                this.$store.state.status
            }
        }
    }
</script>

<style scoped>

    .top-bar {
        width: 100%;
        position: absolute;
    }

    .icon-top-bar {
        float: right;
        font-size: 24px;
        margin: 10px;
    }

    .button-top-bar {
        float: right;
    }

    ul {
        list-style: none;
    }

    ul a {
        display: block;
        text-decoration: none;
        height: auto;
        width: max-content;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
        color: white;
    }

    .drop-down {
        /*position: relative;*/
        height: 50px;
        overflow: visible;
    }

    .drop-down-content {
        display: none;
        padding: 0;
        margin-top: 6px;
        position: fixed;
        right: 2px;
        background-color: #2f3e45;
        color: white;
        padding: 2px 5px;
        /*position: absolute;*/
    }

    .drop-down-content li:hover a {
        background-color: deepskyblue;
    }

    .nav .drop-down:hover {
        overflow: visible;
    }

    .drop-down:hover .drop-down-content {
        display: block;
    }

</style>
