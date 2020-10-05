<template>
    <div id="main_div">

        <Lottery v-if="startedChoosing" :current-one="the_list[currentIdx]"></Lottery>
        <p v-else id="main_name">
            {{welcome}}
        </p>
        <a class="button button-glow button-rounded button-raised button-primary"
            @click="gogogo">奥力给!</a>
<!--        <a class="button button-glow button-border button-rounded button-primary">奥利给!</a>-->
    </div>
</template>

<script>

    import Lottery from "./Lottery";
    export default {
        name: "MainPage",
        components: {Lottery},
        data: function() {
            return {
                startedChoosing: false,
                welcome: "Press “奥力给！” to Start",
                the_list: [
                    "唐少",
                    "GC",
                    "三七开",
                    "冷冷",
                    "臭猪1",
                    "臭猪2",
                    "臭猪3",
                    "臭猪4",
                    "臭猪5",
                    "臭猪6",
                    "臭猪7",
                    "臭猪8",
                ],
                currentIdx: 0,
                lastIdx: 0,
            };
        },
        computed: {
            length: function () {
                return this.the_list.length;
            },
            totalLength: function () {
                return this.length * 3;
            }
        },
        methods: {
            sleep: function(d){
                for(let t = Date.now();Date.now() - t <= d;);
            },
            gogogo: function () {
                this.startedChoosing = true;
                this.start_choosing();
            },
            start_choosing: function () {
                let time = 0;
                for(let i = 0; i < this.totalLength; i++) {
                    time += 100;
                    if(Math.abs(this.totalLength - i ) < 4) {
                        time += 100;
                    }
                    if(Math.abs(this.totalLength - i ) < 3) {
                        time += 100;
                    }
                    if(Math.abs(this.totalLength- i ) < 2) {
                        time += 100;
                    }
                    setTimeout( this.choosing, time);
                    // console.log(time);
                }
            },
            choosing: function () {
                let idx = 0;
                do {
                    idx = Math.floor(Math.random() * this.length);
                    console.log("log1: " + idx);
                } while (idx == this.lastIdx)
                console.log("log2: " + idx);
                this.lastIdx = idx;
                this.currentIdx = idx;
            }
        }
    }
</script>

<style scoped>
    .main_name {
        font-size: 10vw;
    }

    #main_div {
        margin: 0 auto;
        top: 25%;
        position: relative;
    }

    #start_btn {

    }

</style>
