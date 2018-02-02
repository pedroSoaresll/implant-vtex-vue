let templateTest = `
    <div class="teste">
        <h1>Ola mundo</h1>
    </div>
`

Vue.component('teste-component', {
	template: templateTest,
	data () { 
		return {
			count: 1
		}
	},
	methods: {

		firstMethodsTest () {
            console.log("component working!")
        }

    },
    create () {
        this.firstMethodsTest()
    },
	mounted () {
		
	}
})