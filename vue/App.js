// call vuex
Vue.use(Vuex)

// modules vuex
const moduleTest = {
	namespaced: true,
	state: {
		show: false
	},
	mutations: {
		show (state) {
			state.show = !state.show
		}
	}
}

// create new store
const store = new Vuex.Store({
	modules: {
		test: moduleTest
	}
})


// create a root instance
var App = new Vue({
    el: '#app-storename',
    store,
    data () {
    	return {

    	}
    },
    methods: {
        
    },
    mounted () {
        console.log("hello world!")
    }
});

