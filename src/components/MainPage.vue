<template>
    <div id="main_div">

        <Lottery v-if="status != 'HOME'" :current-one="the_list[currentIdx]"></Lottery>
        <p v-else-if="status == 'HOME'" id="main_name">
            {{welcome}}
        </p>
        <button class="button button-glow button-rounded button-raised button-primary"
           :disabled="status == 'CHOOSING'" @click="gogogo">奥力给!</button>
        <ListSet v-show="status == 'LIST_SETTING'" :list="the_list" :status="status"/>

<!--        <a class="button button-glow button-border button-rounded button-primary">奥利给!</a>-->
    </div>
</template>

<script>

    import Lottery from "./Lottery";
    import ListSet from "./ListSet";
    export default {
        name: "MainPage",
        components: {ListSet, Lottery},
        data: function() {
            return {
                status: this.$store.getters.get_status,
                welcome: "Press “奥力给！” to Start",
                the_list: this.$store.state.the_list,
                currentIdx: 0,
                lastIdx: 0,
            };
        },
        computed: {
            // the_list: function() {
            //     return this.$store.the_list;
            // },
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
                console.log("choosing")
                this.$store.commit("status_switch", {status:"CHOOSING"})
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
                    setTimeout( this.choosing, time, i, this.totalLength);
                    // console.log(time);
                }
            },
            choosing: function (i, length) {
                let idx = 0;
                do {
                    idx = Math.floor(Math.random() * this.length);
                } while (idx == this.lastIdx)
                this.lastIdx = idx;
                this.currentIdx = idx;
                if(length === i+1) {
                    console.log("here")
                    // this.$store.state.status = "CHOOSING_FINISHED";
                }
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
        top: 5%;
        position: relative;
    }

    #start_btn {

    }

</style>
