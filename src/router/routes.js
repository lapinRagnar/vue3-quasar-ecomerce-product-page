
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'about', name: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'men', name: 'men', component: () => import('pages/MenPage.vue') },
      { path: 'women', name: 'women', component: () => import('pages/WomenPage.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/ContactPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
