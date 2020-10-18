import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        the_list: [
            "唐少",
            "GC",
            "三七开",
            "冷冷",
            // "臭猪1",
            // "臭猪2",
            // "臭猪3",
            // "臭猪4",
            // "臭猪5",
            // "臭猪6",
            // "臭猪7",
            // "臭猪8",
        ],
    },
    mutations: {
        increment (state) {
            state.count++
        }

    }
})
