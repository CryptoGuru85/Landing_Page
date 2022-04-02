import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1e10452 = () => interopDefault(import('..\\pages\\hcp\\index.vue' /* webpackChunkName: "pages/hcp/index" */))
const _138432b2 = () => interopDefault(import('..\\pages\\patient\\index.vue' /* webpackChunkName: "pages/patient/index" */))
const _28160c48 = () => interopDefault(import('..\\pages\\hcp\\looking-ahead.vue' /* webpackChunkName: "pages/hcp/looking-ahead" */))
const _1afb034f = () => interopDefault(import('..\\pages\\hcp\\patient-financial-assistance.vue' /* webpackChunkName: "pages/hcp/patient-financial-assistance" */))
const _e7c8b53c = () => interopDefault(import('..\\pages\\hcp\\patient-resources.vue' /* webpackChunkName: "pages/hcp/patient-resources" */))
const _16ba9acc = () => interopDefault(import('..\\pages\\hcp\\therapies.vue' /* webpackChunkName: "pages/hcp/therapies" */))
const _010217f0 = () => interopDefault(import('..\\pages\\patient\\about-rare-blood-disorders.vue' /* webpackChunkName: "pages/patient/about-rare-blood-disorders" */))
const _2ba3e5b7 = () => interopDefault(import('..\\pages\\patient\\financial-assistance.vue' /* webpackChunkName: "pages/patient/financial-assistance" */))
const _9908453a = () => interopDefault(import('..\\pages\\patient\\find-an-event.vue' /* webpackChunkName: "pages/patient/find-an-event" */))
const _37380117 = () => interopDefault(import('..\\pages\\patient\\our-treatments.vue' /* webpackChunkName: "pages/patient/our-treatments" */))
const _72529a80 = () => interopDefault(import('..\\pages\\patient\\sign-up.vue' /* webpackChunkName: "pages/patient/sign-up" */))
const _e53ac78e = () => interopDefault(import('..\\pages\\patient\\resources-for-you\\attp-support.vue' /* webpackChunkName: "pages/patient/resources-for-you/attp-support" */))
const _173e1930 = () => interopDefault(import('..\\pages\\patient\\resources-for-you\\cad-support.vue' /* webpackChunkName: "pages/patient/resources-for-you/cad-support" */))
const _a86dfc34 = () => interopDefault(import('..\\pages\\patient\\resources-for-you\\hemophilia-suport.vue' /* webpackChunkName: "pages/patient/resources-for-you/hemophilia-suport" */))
const _7bb22770 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/hcp",
    component: _e1e10452,
    name: "hcp"
  }, {
    path: "/patient",
    component: _138432b2,
    name: "patient"
  }, {
    path: "/hcp/looking-ahead",
    component: _28160c48,
    name: "hcp-looking-ahead"
  }, {
    path: "/hcp/patient-financial-assistance",
    component: _1afb034f,
    name: "hcp-patient-financial-assistance"
  }, {
    path: "/hcp/patient-resources",
    component: _e7c8b53c,
    name: "hcp-patient-resources"
  }, {
    path: "/hcp/therapies",
    component: _16ba9acc,
    name: "hcp-therapies"
  }, {
    path: "/patient/about-rare-blood-disorders",
    component: _010217f0,
    name: "patient-about-rare-blood-disorders"
  }, {
    path: "/patient/financial-assistance",
    component: _2ba3e5b7,
    name: "patient-financial-assistance"
  }, {
    path: "/patient/find-an-event",
    component: _9908453a,
    name: "patient-find-an-event"
  }, {
    path: "/patient/our-treatments",
    component: _37380117,
    name: "patient-our-treatments"
  }, {
    path: "/patient/sign-up",
    component: _72529a80,
    name: "patient-sign-up"
  }, {
    path: "/patient/resources-for-you/attp-support",
    component: _e53ac78e,
    name: "patient-resources-for-you-attp-support"
  }, {
    path: "/patient/resources-for-you/cad-support",
    component: _173e1930,
    name: "patient-resources-for-you-cad-support"
  }, {
    path: "/patient/resources-for-you/hemophilia-suport",
    component: _a86dfc34,
    name: "patient-resources-for-you-hemophilia-suport"
  }, {
    path: "/",
    component: _7bb22770,
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
