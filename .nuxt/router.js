import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fa8d247 = () => interopDefault(import('..\\pages\\agenda.vue' /* webpackChunkName: "pages/agenda" */))
const _02cdc63c = () => interopDefault(import('..\\pages\\agenda-details.vue' /* webpackChunkName: "pages/agenda-details" */))
const _cf1dfe26 = () => interopDefault(import('..\\pages\\all-blocks.vue' /* webpackChunkName: "pages/all-blocks" */))
const _af86d228 = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _2aaab8d8 = () => interopDefault(import('..\\pages\\conservation.vue' /* webpackChunkName: "pages/conservation" */))
const _246da124 = () => interopDefault(import('..\\pages\\conservation-project.vue' /* webpackChunkName: "pages/conservation-project" */))
const _94ccf424 = () => interopDefault(import('..\\pages\\foundation.vue' /* webpackChunkName: "pages/foundation" */))
const _2c88372e = () => interopDefault(import('..\\pages\\foundation-heritage.vue' /* webpackChunkName: "pages/foundation-heritage" */))
const _9b9d102e = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages/history" */))
const _73013a6e = () => interopDefault(import('..\\pages\\homilies.vue' /* webpackChunkName: "pages/homilies" */))
const _2cd4b4be = () => interopDefault(import('..\\pages\\homilies-details.vue' /* webpackChunkName: "pages/homilies-details" */))
const _f9a6db64 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _f71ee17a = () => interopDefault(import('..\\pages\\news-details.vue' /* webpackChunkName: "pages/news-details" */))
const _1ebd78ee = () => interopDefault(import('..\\pages\\page-shop.vue' /* webpackChunkName: "pages/page-shop" */))
const _ba1c0f32 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/agenda",
    component: _2fa8d247,
    name: "agenda"
  }, {
    path: "/agenda-details",
    component: _02cdc63c,
    name: "agenda-details"
  }, {
    path: "/all-blocks",
    component: _cf1dfe26,
    name: "all-blocks"
  }, {
    path: "/archives",
    component: _af86d228,
    name: "archives"
  }, {
    path: "/conservation",
    component: _2aaab8d8,
    name: "conservation"
  }, {
    path: "/conservation-project",
    component: _246da124,
    name: "conservation-project"
  }, {
    path: "/foundation",
    component: _94ccf424,
    name: "foundation"
  }, {
    path: "/foundation-heritage",
    component: _2c88372e,
    name: "foundation-heritage"
  }, {
    path: "/history",
    component: _9b9d102e,
    name: "history"
  }, {
    path: "/homilies",
    component: _73013a6e,
    name: "homilies"
  }, {
    path: "/homilies-details",
    component: _2cd4b4be,
    name: "homilies-details"
  }, {
    path: "/news",
    component: _f9a6db64,
    name: "news"
  }, {
    path: "/news-details",
    component: _f71ee17a,
    name: "news-details"
  }, {
    path: "/page-shop",
    component: _1ebd78ee,
    name: "page-shop"
  }, {
    path: "/",
    component: _ba1c0f32,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
