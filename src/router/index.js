import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';

const isServer = typeof window === 'undefined';

const history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
	{
		path: '/home',
		component: Home
	}
];
export default function() {
	return createRouter({ routes, history });
}
