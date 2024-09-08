import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../pages/Home.vue"),
		},
		{
			path: "/auth/login",
			// name: "home",
			component: () => import("../pages/Login.vue"),
		},
		{
			path: "/dashboard/applications",
			name: "applications",
			component: () => import("../pages/Admin.vue"),
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../pages/About.vue"),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("../pages/Contact.vue"),
		},
		{
			path: "/properties",
			name: "properties",
			component: () => import("../pages/Properties.vue"),
		},
	],
});

export default router
