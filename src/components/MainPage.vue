<template>
    <div id="main_div">
        <p id="main_name">
            {{who_am_i}}
        </p>
        <a class="button button-glow button-rounded button-raised button-primary"
            @click="gogogo">奥力给!</a>
<!--        <a class="button button-glow button-border button-rounded button-primary">奥利给!</a>-->
    </div>
</template>

<script>

    export default {
        name: "MainPage",
        data: function() {
        return {
                who_am_i: "Press “奥力给！” to Start",
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
                ]
            };
        },
        computed: {
        },
        methods: {
            sleep: function(d){
                for(let t = Date.now();Date.now() - t <= d;);
            },
            gogogo: function () {
                this.start_choosing();
            },
            start_choosing: function () {
                let n = this.the_list.length;
                for(let i = 0; i < 3*n; i++) {
                    let time = 100 * i;
                    setTimeout( this.choosing, time);
                    console.log(time);
                    // this.func();
                    // let idx = Math.floor(Math.random()*this.the_list.length);
                    // this.who_am_i = this.the_list[idx];
                    //
                    // console.log(this.who_am_i);
                    // // if(Math.abs(i-n) > 5)
                    // this.sleep(100);
                }
            },
            func: function() {
                let idx = Math.floor(Math.random()*this.the_list.length);
                this.who_am_i = this.the_list[idx];

                console.log(this.who_am_i);
                // if(Math.abs(i-n) > 5)
                this.sleep(100);
            },
            choosing: function () {
                let idx = Math.floor(Math.random()*this.the_list.length);
                this.who_am_i = this.the_list[idx];
            }
        }
    }
</script>

<style scoped>
    #main_name {
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
