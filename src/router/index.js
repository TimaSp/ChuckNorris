import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'
import Favs from '../pages/Favorites.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
			{
        path: '/',
        name: 'Main',
        component: Main
			},
			{
				path: '/favs',
				name: 'Favs',
				component: Favs
			}
	]
})