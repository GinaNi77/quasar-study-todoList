
const routes = [
  {
    path: '/',
    component: () => import('layouts/Users.vue'),
    children: [
      { path: '', component: () => import('pages/Profile.vue') }
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
