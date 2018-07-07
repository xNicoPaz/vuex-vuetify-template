import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonasList from './components/PersonasList'

Vue.use(VueRouter)

let routes = [
	{
		path: '/',
		component: PersonasList
	}
]	

export default new VueRouter({routes})