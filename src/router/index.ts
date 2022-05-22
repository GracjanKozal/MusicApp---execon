import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const routes = [
	{
		path: '/',
		name: 'Strona Główna',
		component: () => import('../views/HomeView.vue')
	},
	{
		path: '/album/:id',
		name: 'Album',
		component: () => import('../components/AlbumDetail/AlbumDetail.vue'),
		},
  {
    path: '/ulubione',
    name: 'Ulubione',
    component: () => import('../components/FavouriteList/FavouriteList.vue'),
  },
  {
    path: '/addalbums',
    name: 'Dodaj Album',
    component: () => import('../components/AddAlbums/AddAlbums.vue'),
  },
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router




