import { createRouter, createWebHistory } from 'vue-router'

const simplechildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.uisheet',
    meta: { auth: true, name: 'UiSheet' },
    component: () => import('../views/Uikit/UiSheet')
  }
]
const authchildRoutes = (prop, mode = false) => [
  {
    path: '/signin',
    name: prop + '.signin',
    meta: { auth: true, name: 'SignIn' },
    component: () => import('../views/pages/Authentication/SignIn')
  },
  {
    path: '/signup',
    name: prop + '.signup',
    meta: { auth: true, name: 'SignUp' },
    component: () => import('../views/pages/Authentication/SignUp')
  },
  {
    path: '/confirmMail',
    name: prop + '.confirmMail',
    meta: { auth: true, name: 'Confirm Mail' },
    component: () => import('../views/pages/Authentication/ConfirmMail')
  },
  {
    path: '/lockScreen',
    name: prop + '.lockScreen',
    meta: { auth: true, name: 'Lock Screen' },
    component: () => import('../views/pages/Authentication/LockScreen')
  },
  {
    path: '/recoverPassword',
    name: prop + '.recoverPassword',
    meta: { auth: true, name: 'Recover password' },
    component: () => import('../views/pages/Authentication/RecoverPassword')
  },
  {
    path: '/navbar',
    name: prop + '.navbar',
    meta: { auth: true, name: 'NavBar' },
    component: () => import('../views/main/Navbar')
  },
  // Error Pages
  {
    path: 'error404',
    name: prop + '.error404',
    meta: { auth: true, name: 'Error404' },
    component: () => import('../views/pages/Utilities/Error404')
  },
  {
    path: 'error500',
    name: prop + '.error500',
    meta: { auth: true, name: 'Error500' },
    component: () => import('../views/pages/Utilities/Error500')
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true, name: 'maintenance' },
    component: () => import('../views/pages/Utilities/Maintenance')
  }
]

const defaultchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'dashboard' },
    component: () => import('../views/main/dashboard')
  },
  {
    path: 'import',
    name: prop + '.importexport',
    meta: { auth: true, name: 'importexport' },
    component: () => import('../views/main/ImportExport')
  },
  {
    path: 'products',
    name: prop + '.products',
    meta: { auth: true, name: 'products' },
    component: () => import('../views/main/Products')
  },
  {
    path: 'platforms',
    name: prop + '.platforms',
    meta: { auth: true, name: 'platforms' },
    component: () => import('../views/main/Platforms')
  },
  {
    path: 'support',
    name: prop + '.support',
    meta: { auth: true, name: 'support' },
    component: () => import('../views/main/Support')
  },
  {
    path: 'activity',
    name: prop + '.activity',
    meta: { auth: true, name: 'activity' },
    component: () => import('../views/main/Activity')
  },
  {
    path: 'settings',
    name: prop + '.settings',
    meta: { auth: true, name: 'settings' },
    component: () => import('../views/main/Settings')
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/simple'),
    children: simplechildRoutes('hope')
  },
  {
    path: '/default',
    name: 'default',
    component: () => import('../layouts/Client'),
    children: defaultchildRoutes('default')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/simple'),
    children: authchildRoutes('auth')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

export default router
