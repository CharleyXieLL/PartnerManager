import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import BlogDetail from '../pages/BlogDetail.vue';
import BlogEdit from '../pages/BlogEdit.vue';
import BlogList from '../pages/BlogList.vue';
import Login from '../pages/Login.vue';

const isServer = typeof window === 'undefined';

const history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
	{
		path: '/',
		redirect: '/blogList',
		component: BlogList
	},
	{
		path: '/blogList',
		name: 'BlogList',
		component: BlogList
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/blog/add',
		component: BlogEdit
	},
	{
		path: '/blogDetail/:blogId',
		component: BlogDetail
	},
	{
		path: '/blogEdit/:blogId',
		component: BlogEdit
	}
];
export default function() {
	return createRouter({ history, routes });
}
